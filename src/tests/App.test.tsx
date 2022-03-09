import { render, screen } from "@testing-library/react";
import App from "App";

test("Hello world!", () => {
  render(<App />);
  const app = screen.getByText(/Hello world!/i);
  expect(app).toBeInTheDocument();
});
