import { createBrowserRouter } from 'react-router-dom'
import { admin, auth, user } from './childrenRoutes'
import UserInterfaces from 'views/layouts/UserInterfaces'
import AuthInterfaces from 'views/layouts/AuthInterfaces.js'
import AdminInterfaces from 'views/layouts/AdminInterfaces'


export const router = createBrowserRouter ([
        {
        path: "/",
        element: <UserInterfaces />,
        children: user,
        },
        {
        path: "/auth",
        element: <AuthInterfaces />,
        children: auth,
        },
        {
        path: "/admin",
        element: <AdminInterfaces />,
        children: admin,
        },
])


/* <BrowserRouter>
<Switch>
  <Switch>
    <Route path="/index" render={(props) => <Index {...props} />} />
    <Route
      path="/nucleo-icons"
      render={(props) => <NucleoIcons {...props} />}
    />
    <Route
      path="/landing-page"
      render={(props) => <LandingPage {...props} />}
    />
    <Route
      path="/contacto"
      render={(props) => <Contact {...props} />}
    />
    <Route
      path="/profile-page"
      render={(props) => <ProfilePage {...props} />}
    />
    <Route
      path="/login-page"
      render={(props) => <LoginPage {...props} />}
    />
    <Route
      path="/mailing-page"
      render={(props) => <MailingPage {...props} />}
    />
    <Redirect to="/index" />
    <Redirect from="/" to="/index" />
  </Switch>
</Switch>
</BrowserRouter> */