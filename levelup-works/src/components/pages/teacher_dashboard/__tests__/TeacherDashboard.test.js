import { TeacherDashboard } from "../TeacherDashboard";
import { useTab } from "../../../Hooks/useTab"
import { render, renderHook, act, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from 'react-router-dom';
import { useStudentProfiles } from "../../../Hooks/useStudentProfiles";
import axios from "axios";
import { mockStudents } from "../__mock__/mockData";
import { Auth0Provider } from '@auth0/auth0-react';
import MockAdapter from "axios-mock-adapter";

jest.mock('@auth0/auth0-react', () => ({
    Auth0Provider: ({ children }) => <div>{children}</div>,
    withAuthenticationRequired: ((component, _) => component),
    useAuth0: () => {
        return {
            isLoading: false,
            user: {
                "idTokenData": {
                    "sub": "auth0|1234556667787",
                    "nickname": "johndoe",
                    "name": "John Doe",
                    "email": "johndoe@email.com",
                    "email_verified": false,
                    "_app_metadata": {
                        "name": "John Doe",
                        "role": 9,
                        "studentid": 9,
                        "teacherid": 9
                    },
                },
            },
            isAuthenticated: true,
            loginWithRedirect: jest.fn(),
            getAccessTokenSilently: jest.fn().mockImplementation(
                () => new Promise(resolve => resolve("test-token"))
            )
        };
    },
}));

describe("Teacher Dashboard", () => {

    let mockFunction;
    let teacherDashboardComponent;
    let getAccessTokenSilently = jest.fn();

    beforeEach(() => {
        mockFunction = () => { return true };
        teacherDashboardComponent = render(
            <Auth0Provider getAccessTokenSilently={getAccessTokenSilently} >
                <BrowserRouter>
                    <TeacherDashboard setIsDashboardOpen={mockFunction} />
                </BrowserRouter>
            </Auth0Provider>
        );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks;
    });

    test("Renders the first tab and its text content/image", () => {
        const firstTab = teacherDashboardComponent.getByTestId("progress-tracker");
        expect(firstTab.textContent).toBe("PROGRESS");
        expect(firstTab.querySelector("img")).toHaveAttribute("src", "progress_tracker.png");
        expect(firstTab.querySelector("img")).toHaveAttribute("alt", "progress_tracker");
    });

    test("Renders the second tab and its text content/image", () => {
        const secondTab = teacherDashboardComponent.getByTestId("students");
        expect(secondTab.textContent).toBe("STUDENTS");
        expect(secondTab.querySelector("img")).toHaveAttribute("src", "student_profiles.png");
        expect(secondTab.querySelector("img")).toHaveAttribute("alt", "student_profiles");
    });

    test("Renders the third tab and its text content/image", () => {
        const thirdTab = teacherDashboardComponent.getByTestId("help");
        expect(thirdTab.textContent).toBe("HELP");
        expect(thirdTab.querySelector("img")).toHaveAttribute("src", "help_requests.png");
        expect(thirdTab.querySelector("img")).toHaveAttribute("alt", "help_request");
    });

    test("Renders the fourth tab and its text content/image", () => {
        const fourthTab = teacherDashboardComponent.getByTestId("submissions");
        expect(fourthTab.textContent).toBe("SUBMISSIONS");
        expect(fourthTab.querySelector("img")).toHaveAttribute("src", "project_submissions.png");
        expect(fourthTab.querySelector("img")).toHaveAttribute("alt", "project_submissions");
    });

    test("Renders the fifth tab and its text content/image", () => {
        const fifthTab = teacherDashboardComponent.getByTestId("projects");
        expect(fifthTab.textContent).toBe("PROJECTS");
        expect(fifthTab.querySelector("img")).toHaveAttribute("src", "project_library.png");
        expect(fifthTab.querySelector("img")).toHaveAttribute("alt", "project_library");
    });

    test("Tab should be set to an initial state of 1", () => {
        const { result } = renderHook(useTab);
        expect(result.current.tabSelected).toBe(1);
    });

    test("Tab should be set to 2 when passed into toggleTab", () => {
        const { result } = renderHook(useTab);
        act(() => {
            result.current.toggleTab(2);
        });
        expect(result.current.tabSelected).toBe(2);
    });

    test("Should fetch student profiles successfully", async () => {
        const requestInstance = axios.create({
            baseURL: "http://localhost:8090/",
            timeout: 2000,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        });

        const mock = new MockAdapter(requestInstance);
        const url = "students/all_students";

        // requestInstance.get('students/all_students')
        //     .then(response => console.log('response', response))
        //     .catch(error => console.log('error', error));

        mock.onGet(url).reply(200, mockStudents);
        const { result } = renderHook(() => useStudentProfiles());
        expect(result.current.studentProfiles).toMatchObject({});
        await act(async () => {
            result.current.fetchStudentProfiles();
        });
        await waitFor(() => {
            try {
                expect(result.current.fetchStudentProfiles).toHaveBeenCalledTimes(1)
                expect(result.current.studentProfiles).toMatchObject(mockStudents);
            } 
            catch (err) {
                return err;
            }
        });
    });
})