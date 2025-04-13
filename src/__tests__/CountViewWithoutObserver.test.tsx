import { render, fireEvent } from "@testing-library/react";
import { CountViewWithoutObserver } from "../components/CountViewWithoutObserver";
import { StoreProvider } from "../stores/StoreProvider";
import { ObserverContainer } from "../containers/ObserverContainer";

describe("CountViewWithoutObserver", () => {
  it("cannot update correctly without observer", () => {
    // Arrange
    const { getByText } = render(
      <StoreProvider>
        <ObserverContainer>
          <CountViewWithoutObserver />
        </ObserverContainer>
      </StoreProvider>
    );
    // Act
    const addBtn = getByText("+");
    fireEvent.click(addBtn);
    // No update after click button
    expect(getByText("Count is 0")).toBeInTheDocument();
    expect(
      getByText("Parent component has been rendered 1 times.")
    ).toBeInTheDocument();
  });
});
