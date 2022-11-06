import { ProgressCard } from "../../../templates/ProgressCard";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

const mockProgress = [
    {
        name: "John Doe",
        studentID: 1,
        projectID: [
            1,
            6
        ],
        completed: true
    },
    {
        name: "Jane Doe",
        studentID: 2,
        projectID: 2,
        completed: true
    }
]


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
        }
    },
}));

describe("Progress Tracker", () => {
    test("Renders correct number of students", () => {
        const { getAllByText } = render(mockProgress.map((el) => {
            return <ProgressCard el={el} />
        }));
        expect(getAllByText('John Doe')).toHaveLength(1);
        expect(getAllByText('Jane Doe')).toHaveLength(1);
    });
});