  
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
                    Description.
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