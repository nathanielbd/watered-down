import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class QRPrint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.src}/>
                <Card.Body>
                    <Card.Title>{this.props.app}</Card.Title>
                    <Card.Text>
        Each time you use <b>{this.props.app}</b>, you consume <b>{this.props.gallons}</b> gallons of water.
                    </Card.Text>
                    <Button onClick={() => window.print()}>
                        Print me
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}
export default QRPrint;