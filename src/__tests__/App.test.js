import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
