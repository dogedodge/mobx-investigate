import { render, fireEvent } from "@testing-library/react";
import { CountView } from "../components/CountView";
import { StoreProvider } from "../stores/StoreProvider";
import { ObserverContainer } from "../containers/ObserverContainer";

describe("CountView", () => {
  it("cannot update correctly without observer", () => {
    // Arrange
    const { getByText } = render(
      <StoreProvider>
        <ObserverContainer>
          <CountView />
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
