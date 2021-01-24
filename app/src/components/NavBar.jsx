import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Intro from "./Intro";
import Image from "react-bootstrap/Image";
import Graph from "./Graph";
import Logo from "../Watered_Down_Logo.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Stats from "./Stats";
import QRForm from "./QRForm";

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
    return ( <Stats userId={window.user_id}/>); 
}
function Tab2() 
{
    return ( <QRForm/>);
}
function Tab3() 
{ 
    return ( <Graph/>);
}

export default function NavigationBar() {
  document.title = 'Watered Down';
  window.onload = () => {
    var user_id = prompt("What is your name?");
    window.user_id = user_id;
  };
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Navbar>
          <Navbar.Brand><Image src ={Logo} style ={style}/></Navbar.Brand>
          <Nav>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Stats">View Water Use</Link></Nav.Link>
            <Nav.Link><Link to="/AddNew">Add Appliance</Link></Nav.Link>
            <Nav.Link><Link to="/Graph">Graph</Link></Nav.Link>
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


