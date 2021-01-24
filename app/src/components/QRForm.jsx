import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
            id: "Evan",
            facility: "",
            gallons: ""
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
        return (
            <Card className = 'align-items-center'>
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
                <Button type="submit" href={`http://api.qrserver.com/v1/create-qr-code/?data=${this.state.url}?user_id=${this.state.id}%26application_id=${this.state.facility}%26gallons=${this.state.gallons}&size=200x200`}>
                        Get QR Code
                </Button>
            </Form>
            </Card>
        );
    }
}
export default QR;