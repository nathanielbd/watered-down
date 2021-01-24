import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Intro from "./Intro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Stats from "./Stats";

var routes = 
[
    {
      path: "/",
      exact: true,
      main: () => <Home />,
    },
    {
      path: "/1",
      main: () => <Tab1 />,
    },
    {
      path: "/2",
      main: () => <Tab2 />,
    },
    {
      path: "/3",
      main: () => <Tab3 />,
    },
];

function Home() 
{
    return ( <Intro/>);
}
function Tab1() 
{
    return ( <Stats userId="bob"/>); 
}
function Tab2() 
{
    return ( <h2> second page </h2>);
}
function Tab3() 
{ 
    return ( <h2> third page </h2>);
}

export default function NavigationBar() {
  document.title = 'Watered Down'
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Navbar>
          <Navbar.Brand>Watered Down</Navbar.Brand>
          <Nav>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/1">View Water Use</Link></Nav.Link>
            <Nav.Link><Link to="/2">Add Appliance</Link></Nav.Link>
            <Nav.Link><Link to="/3">Meet the Creators</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <div style={{ paddingTop: 20 }}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </div>
        </Switch>
      </div>
    </Router>
  );
}


