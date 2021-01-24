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
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

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

const form ={
    width: "40em",
    'text-align':"center"
}
export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedin: false, user_id: "" };
  }

  render() {
    document.title = 'Watered Down';
    if (!this.state.loggedin) {
      return (
        <center>
          <Card className='align-items-center' style={{ width: '50-rem', margin: '0 auto', float: 'none', 'margin-bottom': '10px'}}>
            <Card.Header as="h3">Login</Card.Header>
            <Form as='form' id='login' onSubmit={() => this.setState({ loggedin: true })}>
              <Form.Group controlId="user_id">
                <Form.Label as="h4">Name</Form.Label>
                <Form.Control style={form} type="text" value={this.state.user_id} onChange={(event) => this.setState({ user_id: event.target.value })} required/>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label as="h4">Password</Form.Label>
                <Form.Control style={form} type="password"/>
              </Form.Group>
              <Button type="submit" onClick={() => window.user_id = this.state.user_id}>
                Login
              </Button>
            </Form>
          </Card>
        </center>
      );
    }

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
}


