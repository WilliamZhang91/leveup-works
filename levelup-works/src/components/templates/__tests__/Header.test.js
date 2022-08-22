import React, { useState } from "react";
import { Header } from "../Header";
import App from "../../../App";
import { Modal } from "../Modal";
import { fireEvent, getRoles, renderHook } from "@testing-library/react";
import { TeacherDashboard } from "../../pages/teacher_dashboard/TeacherDashboard";
import { Homepage } from "../../pages/Homepage";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import star from "../../../images/star.png";
import { act } from "react-dom/test-utils";

describe("Test header component", () => {

    let headerComponent;
    let isDashboardOpen;
    jest.mock("../Header");

    beforeEach(() => {
        headerComponent = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    test("Register button is rendered", () => {
        headerComponent.getAllByTestId("register");
        expect(screen.getAllByText(/register/i)).toBeInTheDocument;
    });

    test("Login button is rendered", () => {
        headerComponent.getByTestId("login");
        expect(screen.getAllByText(/log in/i));
    });

    test("Large logo image is displayed", async () => {
        const logo = document.querySelector("img");
        expect(logo.src).toContain("http://localhost/star.png");
    });

    test("Should render header on default route", () => {
        const { getAllByTestId } = render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );
        let headerComponent = getAllByTestId("home-header");
        expect(headerComponent).toBeTruthy();
    });

    test("Teacher link redirects back to home page if there is no teacher login", () => {
        const history = createMemoryHistory({ initialEntries: ["/"] });
        const { getByText } = render(
            <Router location={history.location} navigator={history}>
                <Homepage />
            </Router>
        );
        expect(history.location.pathname).toBe('/');
        fireEvent.click(getByText("TEACHERS"));
        expect(history.location.pathname).toBe("/")
    });

    test("Header logo should change when dashboard is open", () => {
        isDashboardOpen = true;
        const history = createMemoryHistory({ initialEntries: ["/"] });
        render(
            <Router location={history.location} navigator={history}>
                <Header isDashboardOpen={isDashboardOpen} />
            </Router>
        );
        const logo = screen.getByTestId("dashboard-open-star");
        expect(logo).toBeInTheDocument();
    });
    
});