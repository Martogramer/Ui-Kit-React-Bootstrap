import Index from "views/Index";
import LandingPage from "views/examples/JardinLanding";
import CreateProduct from "views/index-sections/CreateProduct";
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
        path: 'registrarse',
        element: <SignUp />
    },
    {
        path: 'usuarios',
        element: <Users />
    },
])
export const admin = ([
    {
        path: '',
        element: <Users />
    },
    {
        path: 'crear',
        element: <CreateProduct />
    },
    {
        path: 'usuarios',
        element: <Users />
    },
])