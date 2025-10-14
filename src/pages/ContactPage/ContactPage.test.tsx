import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import ContactPage from "./index";

function renderContactPage() {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ContactPage />
      </ThemeProvider>
    </BrowserRouter>
  );
}

describe("ContactPage", () => {
  test("requires all form fields to be filled", async () => {
    renderContactPage();

    userEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });

  test("validates name length", async () => {
    renderContactPage();

    userEvent.type(screen.getByLabelText(/full name/i), "AB");
    userEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/full name must be at least 3 characters/i)
      ).toBeInTheDocument();
    });
  });

  test("validates email format", async () => {
    renderContactPage();

    userEvent.type(screen.getByLabelText(/email/i), "not-an-email");
    userEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid email address/i)
      ).toBeInTheDocument();
    });
  });
});
