import { render, fireEvent } from "@testing-library/react";
import { StoreProvider } from "../stores/StoreProvider";

import { renderCountView } from "../components/renderCountView";
import { ObserverContainerWithChildFn } from "../containers/ObserverContainerWithChildFn";

describe("renderCountView", () => {
  it("update correctly", () => {
    // Arrange
    const { getByText } = render(
      <StoreProvider>
        <ObserverContainerWithChildFn childFn={renderCountView} />
      </StoreProvider>
    );
    // Act
    const addBtn = getByText("+");
    fireEvent.click(addBtn);
    // Update after click button
    expect(getByText("Count is 1")).toBeInTheDocument();
    // trigger parent component re-render
    expect(
      getByText("Parent component has been rendered 2 times.")
    ).toBeInTheDocument();
  });
});
