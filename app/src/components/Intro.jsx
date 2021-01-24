  
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
                    Have you ever wondered how much water you're using? Watered Down has got you covered! 
                    Place QR codes near every water appliance and scan them every time you use them. We track your usage for you and display it here at Watered Down! 
                    Hopefully, being able to see just how much water you use will inspire you to Water Down your usage.
                </p>

                <p>
                    <Button >Learn More</Button>
                </p>
            </Jumbotron>
        </div>
         );
    }
}
export default Intro;