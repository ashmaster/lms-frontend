import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/Login/login";
import MHome from "./pages/Home/mhome"
import DHome from "./pages/Home/dhome"
import IssueBook from "./pages/IssueBook/issueBook"
import ReturnBook from "./pages/ReturnBook/returnBook";
import TopBar from "./components/TopBar/topBar"
import PendingReturn from "./pages/PendingReturn/pending";
import AllTransactions from "./pages/AllTransactions/allTransactions";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SnackbarProvider from 'react-simple-snackbar'
import AddBook from "./pages/AddBook/AddBook";
import AddStudent from "./pages/AddStudent/AddStudent";



export default function App() {
  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  return (
    <Router>
      <SnackbarProvider>
        <div>
          <TopBar />
          <Switch>
          <Route path="/login">
              <Login />
            </Route>
            <Route exact = {isMobile} path={["/","/home"]}>
              {isMobile ? <MHome /> : <DHome />}
            </Route>
            
            <Route path={["/issue-book/:id", "/issue-book"]}>
              <IssueBook />
            </Route>
            <Route path={["/return-book/:id", "/return-book"]}>
              <ReturnBook />
            </Route>
            <Route path={["/pending-return"]}>
              <PendingReturn />
            </Route>
            <Route path={["/all-transactions"]}>
              <AllTransactions />
            </Route>
            <Route path={["/add-book"]}>
              <AddBook />
            </Route>
            <Route path={["/add-student"]}>
              <AddStudent />
            </Route>
          </Switch>
        </div>
      </SnackbarProvider>
    </Router>
  );
}

