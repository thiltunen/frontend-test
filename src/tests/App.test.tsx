import { render, screen } from "@testing-library/react";
import App from "App";

test("App renders without crashing", () => {
  render(<App />);
  const heading = screen.getByText(/Awesome projects/i);
  expect(heading).toBeInTheDocument();
});
