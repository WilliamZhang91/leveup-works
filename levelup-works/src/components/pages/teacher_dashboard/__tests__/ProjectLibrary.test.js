import { ProjectLibrary } from "../ProjectLibrary";
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from "react-router-dom";
import { act, render, cleanup, renderHook } from "@testing-library/react";
import { useProjectLibrary } from "../../../Hooks/useProjectLibrary";

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

describe("Student Dashboard", () => {
    let projectLibraryComponent;
    let mockFunction;
    let getAccessTokenSilently = jest.fn();
    const { result } = renderHook(useProjectLibrary);

    beforeEach(() => {
        projectLibraryComponent = render(
            <Auth0Provider getAccessTokenSilently={getAccessTokenSilently} >
                <BrowserRouter>
                    <ProjectLibrary setIsDashboardOpen={mockFunction} />
                </BrowserRouter>
            </Auth0Provider>
        );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks;
    });

    test("Renders loading svg if projectLibrary is empty", async () => {
        act(() => {
            result.current.fetchProjectLibrary()
        });
        expect(result.current.projectLibrary).toStrictEqual([]);
    });

});