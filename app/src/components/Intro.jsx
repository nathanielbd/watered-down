  
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gallon from '../gallon.png';
import Image from 'react-bootstrap/Image';

const white = {
    background: "#fff",
    width: '50rem',
    margin: '0 auto', 
    float: 'none',
    'margin-bottom': '10px', 
    border: '3px solid #B6DCFE'
}
class Intro extends Component 
{
    state = {  }
    render() 
    { 
        return ( 
        <div className = 'align-items-center'>
            <Card style={white}>
            <Card.Body>
                <Card.Title as ="h1">Welcome to Watered Down</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">A Minnehack 2021 project by William Chan, Evan Tredal, Lynh Tran, and Nathaniel Budijono</Card.Subtitle>
                <Card.Text>
                                Watered Down helps households meter their water usage. According to the EPA, the act of metering alone can reduce consumption by 20-40%.
                                Our web-app allows users to easily print stickers to put on their water-consuming facilities like toilets, faucets, showers, and dishwashers. 
                                These stickers have a QR code which interfaces with our API to track the user's water usage whenever they are scanned. Users can then come here see how much water they've used by the gallon as well as over time on a graph. 
                                We hope that by visualizing water consumption users will be mindful of their water usage.
                </Card.Text>
                    <Image src={gallon} width ="100em"/>
                        <Image src={gallon} width ="100em"/>
                        <Image src={gallon} width ="100em"/>
                        <Image src={gallon} width ="100em"/>
                        <Image src={gallon} width ="100em"/>
                        <Image src={gallon} width ="100em"/>
                        <Image src={gallon} width ="100em"/>
            </Card.Body>
            </Card>
        </div>
         );
    }
}
export default Intro;