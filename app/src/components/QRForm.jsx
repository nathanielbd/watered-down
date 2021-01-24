import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class QR extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: "http://google.com",
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
            <Form as='form' id='rs' onSubmit={this.handleSubmit}>
                <Form.Group controlId="appliance_id">
                    <Form.Label>Choose a name for your appliance</Form.Label>
                    <Form.Control type="text" value={this.state.facility} onChange={this.handleFacilityChange} required/>
                </Form.Group>
                <Form.Group controlId="gallons_total">
                    <Form.Label>How many gallons in a single use?</Form.Label>
                    <Form.Control type="text" value={this.state.gallons} onChange={this.handleGallonsChange} required/>
                </Form.Group>
                <Button type="submit">
                    <Link href={`http://www.api.qrserver.com/v1/create-qr-code/?data=${this.state.url}?UserID=${this.state.id}%26FacilityID=${this.state.facility}%26Gallons=${this.state.gallons}&size=200x200`}>
                        Get QR Code
                    </Link>
                </Button>
            </Form>
        );
    }
}
export default QR;