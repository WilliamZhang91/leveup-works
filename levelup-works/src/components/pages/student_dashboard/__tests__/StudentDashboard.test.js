import { StudentDashboard } from "../StudentDashboard";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from 'react-router-dom';

describe("Student Dashboard", () => {
    let mockFunction;
    let studentDashboardComponent;

    beforeEach(() => {
        mockFunction = () => { return true };
        studentDashboardComponent = render(
            <BrowserRouter>
                <StudentDashboard setIsDashboardOpen={mockFunction} />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    test("Renders the first tab and it's text content/image", () => {
        const firstTab = studentDashboardComponent.getByTestId("aim");
        expect(firstTab.textContent).toBe("AIM");
        expect(firstTab.querySelector("img")).toHaveAttribute("src", "objectives.png");
        expect(firstTab.querySelector("img")).toHaveAttribute("alt", "objectives");
    });

    test("Renders the second tab and it's text content/image", () => {
        const secondTab = studentDashboardComponent.getByTestId("guide");
        expect(secondTab.textContent).toBe("GUIDE");
        expect(secondTab.querySelector("img")).toHaveAttribute("src", "instructions.png");
        expect(secondTab.querySelector("img")).toHaveAttribute("alt", "instructions");
    });

    test("Renders the third tab and it's text content/image", () => {
        const thirdTab = studentDashboardComponent.getByTestId("tutorial");
        expect(thirdTab.textContent).toBe("TUTORIAL");
        expect(thirdTab.querySelector("img")).toHaveAttribute("src", "video.png");
        expect(thirdTab.querySelector("img")).toHaveAttribute("alt", "tutorial");
    });

    test("Renders the fourth tab and it's text content/image", () => {
        const thirdTab = studentDashboardComponent.getByTestId("project");
        expect(thirdTab.textContent).toBe("PROJECT");
        expect(thirdTab.querySelector("img")).toHaveAttribute("src", "project.png");
        expect(thirdTab.querySelector("img")).toHaveAttribute("alt", "project");
    });

    test("Renders the fifth tab and it's text content/image", () => {
        const thirdTab = studentDashboardComponent.getByTestId("submit");
        expect(thirdTab.textContent).toBe("SUBMIT");
        expect(thirdTab.querySelector("img")).toHaveAttribute("src", "submit.png");
        expect(thirdTab.querySelector("img")).toHaveAttribute("alt", "submit");
    });

});