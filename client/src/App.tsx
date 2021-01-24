import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  RouteComponentProps
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Auth from './hoc/auth';

function App() {
  return (
   <Router>
     <Switch>
        <Route exact path="/" component={Auth(LandingPage,null,null)}/>
        <Route exact path="/login" component={Auth(LoginPage,false,null)}/>
        <Route exact path="/register" component={Auth(RegisterPage,false,null)}/>
     </Switch>
   </Router>
  );
}

export default App;
