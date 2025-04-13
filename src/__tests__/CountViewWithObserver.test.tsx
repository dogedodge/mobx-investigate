import { render, fireEvent } from "@testing-library/react";
import { CountViewWithObserver } from "../components/CountViewWithObserver";
import { StoreProvider } from "../stores/StoreProvider";
import { ObserverContainer } from "../containers/ObserverContainer";

describe("CountViewWithObserver", () => {
  it("update correctly", () => {
    // Arrange
    const { getByText } = render(
      <StoreProvider>
        <ObserverContainer>
          <CountViewWithObserver />
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
