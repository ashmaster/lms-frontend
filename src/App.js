import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home"
import TopBar from "./components/TopBar/topBar"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
    <Router>
      <div>
        <TopBar/>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

