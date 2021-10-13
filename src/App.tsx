import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { About, API, Home, Redux, Services, ServicesDetails, Login, SignUp } from './Screens';
import { PrivateRoute, PublicRoute } from './Router';

 
export const App = () => {

  const [user, setUser] = useState<any | null>("");

    useEffect(() =>{
        onAuthStateChanged(auth, user => {
          if(user) setUser(user);
          else setUser(null);
      })
    },[])

  return (
    <>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" user={user}component={Home}/>
            <PrivateRoute exact path="/home" user={user}component={Home}/>
            <PrivateRoute exact path="/services" user={user}component={Services}/>
            <PrivateRoute exact path="/services/:serviceId" user={user}component={ServicesDetails}/>
            <PrivateRoute exact path="/api" user={user}component={API}/>
            <PrivateRoute exact path="/redux" user={user}component={Redux}/>
            <PrivateRoute exact path="/about" user={user}component={About}/>
            <PublicRoute exact path="/login" user={user}component={Login}/>
            <PublicRoute exact path="/signup" user={user}component={SignUp}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;
