import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import gallon from '../gallon.png';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

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

async function getData(url) {
	const response = await fetch(url);
	return response.json()
}

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
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    const userData = await getData(`https://watered-down.zeet.app/api/user/${this.props.userId}`);
    const gallons = userData.reduce((sum, rec) => sum + rec.gallons, 0);
    const appliances = userData.reduce((apps, rec) => apps.includes(rec['application_id']) ? apps : apps.concat([rec['application_id']]), []);
    const galPerApp = appliances.map((app) => userData.reduce((tot, rec) => rec['application_id']==app ? tot+rec['gallons'] : tot, 0));
    this.setState({
      gallons: gallons,
      appliances: appliances,
      galPerApp: galPerApp,
      isLoading: false
    });
  }

    render() { 
      if (this.state.isLoading) {
        return <Spinner/>;
      }
        return ( 
          <div>
            {[...Array(this.state.gallons),].map((e,i) =>{ 
              return <Image src= {gallon} fluid width = "200" height ="300"/>})}

            <div style ={title}> Total Water Usage is {this.state.gallons} Gallons </div>
            <h5> Select option below to view water usage for specific appliance: </h5>
            <div>
        <Accordion>
            {this.state.appliances.map((val, idx) => {
                return (
                    <Card>
                    <Card.Header>
                        <Accordion.Toggle as ={Card.Header} eventKey={val}> 
                            {val}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={val}>
                        <Card.Body>
                            {[...Array(this.state.galPerApp[idx]),].map((e, i) =>{ 
                                return <Image src= {gallon} fluid width = "200" height ="300"/>})}
                        </Card.Body>
                    </Accordion.Collapse>
                    </Card>
            )})}
        </Accordion>
        </div>
          </div> );
    }
}
export default Stats;