import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/App";
import { BrowserRouter } from "react-router-dom";

it("renders the app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Properties Page/i);
  expect(linkElement).toBeInTheDocument();
});
