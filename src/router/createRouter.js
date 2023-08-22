import { createBrowserRouter } from 'react-router-dom'
import { user } from './childrenRoutes'
import Index from 'views/Index'
import NucleoIcons from "views/NucleoIcons"
import LoginPage from "views/examples/Contact"
import LandingPage from "views/examples/JardinLanding"
import MailingPage from "views/examples/MailingPage"
import ProfilePage from "views/examples/ProfilePage"

import UserInterfaces from 'views/layouts/UserInterfaces'


export const router = createBrowserRouter ([
        {
        path: "/",
        element: <UserInterfaces />,
        children: user,
        },
/*         {
        path: "/productos",
        element: <LandingPage />
        }, */
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