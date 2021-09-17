import React, { useContext, useState, useMemo } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext';

import ProtectedRoute from './partials/ProtectedRoute';
import Unauthorised from './pages/Unauthorised';


import Landing from './pages/Landing/Landing';
import Help from './pages/Help/Help';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import User from './pages/Community/User';
import Card from './pages/Explore/Card'
import Article from './pages/Explore/Article'
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import ProfileForm from './pages/Profile/ProfileForm';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Contact from './pages/Contact/Contact';

// import Header from './partials/Header';
// import Footer from './partials/Footer';

function Router() {
  const { signedin } = useContext(AuthContext);
  const [user, setUser] = useState('Hello From Context')
  // prevents value from chagnign unlet setvalue cahnges
  const value = useMemo (() => ({user, setUser}), [user, setUser])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/help' exact>
          <Help />
        </Route>
        <Route path='/signin' exact>
          <Signin />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
        <Route path='/about' exact>
          <Contact />
        </Route>
        <ProtectedRoute path='/home' component={Home} isAuth={signedin} exact />
        <ProtectedRoute
          path='/explore'
          component={Explore}
          isAuth={signedin}
          exact
        />
        <ProtectedRoute
          path='/community'
          component={Community}
          isAuth={signedin}
          exact
        />
        <Route
          path='/explore/card/:id'
          component={Card}
          exact
        />
        <Route
          path='/explore/article/:id'
          component={Article}
          exact
        />
        <Route
          path='/community/user/:id'
          component={User}
          exact
        />
        <ProtectedRoute
          path='/profile/'
          component={Profile}
          isAuth={signedin}
          exact
        />
        <ProtectedRoute
          path='/profile/edit'
          component={ProfileForm}
          isAuth={signedin}
          exact
        />
        {/* <Route component={Unauthorised} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
