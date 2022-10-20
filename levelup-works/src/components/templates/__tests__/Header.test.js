import { Header } from "../Header";
import App from "../../../App";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from "history";

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

    // test("empty avatar image is rendered", () => {
    //     isDashboardOpen = false;
    //     // headerComponent.getByTestId("empty-avatar")
    //     // expect(emptyAvatar).toContain(emptyAvatar);
    //     headerComponent.getByTestId("empty-avatar")
    //     expect(screen).toContain(emptyAvatar);
    // });

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

    // test("Teacher link redirects back to home page if there is no teacher login", () => {
    //     const history = createMemoryHistory({ initialEntries: ["/"] });
    //     const { getByText } = render(
    //         <Router location={history.location} navigator={history}>
    //             <Homepage />
    //         </Router>
    //     );
    //     expect(history.location.pathname).toBe('/');
    //     fireEvent.click(getByText("TEACHERS"));
    //     expect(history.location.pathname).toBe("/")
    // });

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