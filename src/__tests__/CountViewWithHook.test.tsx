import { render, fireEvent } from "@testing-library/react";
import { CountViewWithHook } from "../components/CountViewWithHook";
import { StoreProvider } from "../stores/StoreProvider";
import { ObserverContainer } from "../containers/ObserverContainer";

describe("CountViewWithHook", () => {
  it("update correctly with obserable only in hook", () => {
    // Arrange
    const { getByText } = render(
      <StoreProvider>
        <ObserverContainer>
          <CountViewWithHook />
        </ObserverContainer>
      </StoreProvider>
    );
    // Act
    const addBtn = getByText("+");
    fireEvent.click(addBtn);
    // Update after click button
    expect(getByText("Count is 1")).toBeInTheDocument();
    // not trigger parent component re-render
    expect(
      getByText("Parent component has been rendered 1 times.")
    ).toBeInTheDocument();
  });
});
