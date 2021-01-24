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
            Facility: "Kitchen",
            Gallons: "2"
        };
    }

    render() {
        return (
            <Form as='form' id='rs'>
                <Form.Group controlId="appliance_id">
                    <Form.Label>Choose a name for your appliance</Form.Label>
                    <Form.Control type="text" placeholder="Kitchen Faucet" required/>
                </Form.Group>
                <Form.Group controlId="gallons_total">
                    <Form.Label>How many gallons in a single use?</Form.Label>
                    <Form.Control type="text" placeholder="2" required/>
                </Form.Group>
                <Button type="submit">
                    <Link to={'http://www.api.qrserver.com/v1/create-qr-code/?data=${this.state.url}?UserID=${this.state.id}%26FacilityID=${this.state.facility}%26Gallons=${this.state.gallons}&size=200x200'}>
                        Get QR Code
                    </Link>
                </Button>
            </Form>
        );
    }
}
export default QR;