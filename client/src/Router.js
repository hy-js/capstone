import React, { useContext } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext';
import ProtectedRoute from './partials/ProtectedRoute';
import BlockedRoute from './partials/BlockedRoute';

import Landing from './pages/Landing/Landing';
import Help from './pages/Help/Help';
import Home from './pages/Home/Home';
import Community from './pages/Community/Community';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Contact from './pages/Contact/Contact';


// import Header from './partials/Header';
// import Footer from './partials/Footer';


function Router() {
  const { signedin } = useContext(AuthContext);

  return (
    <BrowserRouter>
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
        <ProtectedRoute path='/explore' component={Explore} isAuth={signedin} exact  />
        <ProtectedRoute path='/community' component={Community} isAuth={signedin} exact  />
        <ProtectedRoute path='/profile' component={Profile} isAuth={signedin} exact  />
    </BrowserRouter>
  );
}

export default Router;
