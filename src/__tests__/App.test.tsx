import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { StoreProvider } from "../stores/StoreProvider";

describe.skip("App Component", () => {
  test("renders Vite + React heading", () => {
    render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("increments count when button is clicked", () => {
    render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const button = screen.getByText(/count is 0/i);

    fireEvent.click(button);

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  test("renders Vite and React logos", () => {
    render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const viteLogo = screen.getByAltText(/Vite logo/i);
    const reactLogo = screen.getByAltText(/React logo/i);

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });
});
