import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import gallon from '../gallon.png';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const styles = {
  background: "#B6DCFE",
}
const title = {
  'font-size': "2em",
}
const size = {
  width: "150px",
  height: "150px"
}

const gallons = 3;
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallons: 3,
      appliances: ["Shower", "Sink", "Toilet",],
      shower: 1,
      sink: 1,
      toilet: 4
    };
  }
    render() { 
        return ( 
          <div>
            {[...Array(gallons),].map((e,i) =>{ 
              return <Image src= {gallon} fluid width = "200" height ="300"/>})}

            <div style ={title}> Total Water Usage is {this.state.gallons} Gallons </div>
            <h5> Select option below to view water usage for specific appliance: </h5>
            <div>
        <Accordion>
            {this.state.appliances.map(i => {
                return (
                    <Card>
                    <Card.Header>
                        <Accordion.Toggle as ={Card.Header} eventKey={i}> 
                            {i}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={i}>
                        <Card.Body>
                            {[...Array(this.state.i),].map((e, i) =>{ 
                                return <Image src= {gallon} fluid width = "200" height ="300"/>})}
                        </Card.Body>
                    </Accordion.Collapse>
                    </Card>
            )})}
        </Accordion>
        </div>
            <Button href="/2" style ={styles}>Add Appliance</Button>
          </div> );
    }
}
export default Stats;