export default jest.mock('@auth0/auth0-react', () => ({
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