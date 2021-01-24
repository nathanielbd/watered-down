import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import QRPrint from './QRPrint';
import Card from 'react-bootstrap/Card';

const form ={
    width: "40em",
    'text-align':"center"
}
class QR extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: "https://watered-down.zeet.app/api/record/",
            id: window.user_id,
            facility: "",
            gallons: "",
            submitted: false
        };

        this.handleFacilityChange = this.handleFacilityChange.bind(this);
        this.handleGallonsChange = this.handleGallonsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleFacilityChange(event) {
        this.setState({facility: event.target.value});
    }

    handleGallonsChange(event) {
        this.setState({gallons: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.facility);
        event.preventDefault();
    }

    render() {
        if (this.state.submitted) {
            return <QRPrint app={this.state.facility} gallons={this.state.gallons} src={`http://api.qrserver.com/v1/create-qr-code/?data=${this.state.url}?user_id=${this.state.id}%26application_id=${this.state.facility}%26gallons=${this.state.gallons}&size=200x200`}/>
        }
        return (
            <Card className = 'align-items-center'style ={{ width: '50rem', margin: '0 auto', float: 'none', 'margin-bottom': '10px',}}>
                <Card.Header as="h3">   Add an Appliance!   </Card.Header>
            <Form as='form' id='rs' onSubmit={this.handleSubmit}>
                <Form.Group  controlId="appliance_id">
                    <Form.Label  as ="h4" >Choose a name for your appliance</Form.Label>
                    <Form.Control style ={form} type="text" value={this.state.facility} onChange={this.handleFacilityChange} required placeholder="appliance name"/>
                </Form.Group>
                <Form.Group controlId="gallons_total">
                    <Form.Label as ="h4" >How many gallons in a single use?</Form.Label>
                    <Form.Control style ={form} type="text" value={this.state.gallons} onChange={this.handleGallonsChange} required placeholder="# of gallons"/>
                </Form.Group>
                <Button onClick={() => this.setState({ submitted: true })}>
                    Get QR code
                </Button>
            </Form>
            </Card>
        );
    }
}
export default QR;