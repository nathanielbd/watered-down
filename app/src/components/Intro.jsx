  
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const styles = {
    background: "#B6DCFE"
}
class Intro extends Component 
{
    state = {  }
    render() 
    { 
        return ( 
        <div>
            <Jumbotron style = {styles}>
                <h1 >Welcome to Watered Down!</h1>
                <p>
                Watered Down helps households meter their water usage. According to the EPA, the act of metering alone can reduce consumption by 20-40%.

Our web-app allows users to easily print stickers to put on their water-consuming facilities like toilets, faucets, showers, and dishwashers. These stickers have a QR code which interfaces with our API to track the user's water usage whenever they are scanned. The web-app also comes with a dashboard to monitor the user's water usage visually.

                </p>

                <p>
                     A Minnehack 2021 project by William Chan, Evan Tredal, Lynh Tran, and Nathaniel Budijuno
                </p>
            </Jumbotron>
        </div>
         );
    }
}
export default Intro;