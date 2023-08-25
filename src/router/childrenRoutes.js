import Index from "views/Index";
import LandingPage from "views/examples/JardinLanding";
import SignIn from "views/index-sections/SignIn";
import SignUp from "views/index-sections/SignUp";
import Users from "views/index-sections/Users";

export const user = ([
    {
        path: '',
        element: <Index />
    },
    {
        path: 'productos',
        element: <LandingPage />
    },
])

export const auth = ([
    {
        path: '',
        element: <SignIn />
    },
    {
        path: 'signup',
        element: <SignUp />
    },
    {
        path: 'users',
        element: <Users />
    },
])