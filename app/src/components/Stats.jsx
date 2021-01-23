import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import bucket from './bucket.png';
const styles = {
  background: "#B6DCFE"
}
const size = {
  width: "150px",
  height: "150px"
}
class Stats extends Component {
    state = { 
      water: 3
     }
    render() { 
        return ( 
          <div>
            <Image src= {bucket} fluid width = "200" height ="300"/>
            <h1> Total Water Usage is {this.state.water}  Gallons </h1>
            <h5> Select option below to view water usage for specific appliance: </h5>
            <Button style ={styles} variant="primary" size="lg" block>
              Toilet
            </Button>
            <Button variant="primary" size="lg" block>
              dishwasher
            </Button>
            <Button style ={styles} variant="primary" size="lg" block>
              Shower
            </Button>
            <Button variant="primary" size="lg" block>
              Sink
            </Button>
          </div> );
    }
}
export default Stats;