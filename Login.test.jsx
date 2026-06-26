import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import Login from "./Login";

test("renders login form", () => {
  render(
    <BrowserRouter>
      <Login setUser={() => {}} />
    </BrowserRouter>
  );

  expect(screen.getByPlaceholderText("Username"))
    .toBeInTheDocument();

  expect(screen.getByPlaceholderText("Email"))
    .toBeInTheDocument();

  expect(screen.getByPlaceholderText("Password"))
    .toBeInTheDocument();
});

test("allows user to enter data", () => {
  render(
    <BrowserRouter>
      <Login setUser={() => {}} />
    </BrowserRouter>
  );

  const username = screen.getByPlaceholderText("Username");

  fireEvent.change(username, {
    target: { value: "Misty" }
  });

  expect(username.value).toBe("Misty");
});