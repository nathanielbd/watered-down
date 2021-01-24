import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Intro from "./Intro";
import Image from "react-bootstrap/Image";
import Graph from "./Graph";
import Logo from "../Watered_Down_Logo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Stats from "./Stats";

const style ={
  height:"50px",
  width: "215px"
}
var routes = 
[
    {
      path: "/",
      exact: true,
      main: () => <Home />,
    },
    {
      path: "/Stats",
      main: () => <Tab1 />,
    },
    {
      path: "/AddNew",
      main: () => <Tab2 />,
    },
    {
      path: "/Graph",
      main: () => <Tab3 />,
    },
];

function Home() 
{
    return ( <Intro/>);
}
function Tab1() 
{
    return ( <Stats/>); 
}
function Tab2() 
{
    return ( <h2> second page </h2>);
}
function Tab3() 
{ 
    return ( <Graph/>);
}

export default function NavigationBar() {
  return (
    <Router>
      <div>
        <Navbar>
          <Navbar.Brand><Image src ={Logo} style ={style}/></Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Stats">View Water Use</Nav.Link>
            <Nav.Link href="/AddNew">Add Appliance</Nav.Link>
            <Nav.Link href="/Graph">Graph</Nav.Link>
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


