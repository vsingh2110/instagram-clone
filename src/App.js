import React, { Suspense, lazy } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';

import * as ROUTES from "./constants/routes";

const Login = lazy(()=>import ('./pages/login'));
const SignUp = lazy(()=>import ('./pages/sign-up'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const NotFound = lazy(()=>import ('./pages/not-found'));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
    <Router>
       <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} Component={Login} />
          <Route path={ROUTES.SIGN_UP} Component={SignUp} />
          <Route path={ROUTES.DASHBOARD} Component={Dashboard} />
          <Route  Component={NotFound}/>
        </Routes>
       </Suspense>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
