import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component{

    constructor(){
        super(); 
        this.state = { displayBio: false };
        console.log('Component this', this);

        this.toggleBioDisplay = this.toggleBioDisplay.bind(this);
    }

    toggleBioDisplay = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render(){

        return (
            <div>
                <h1> The React JS portfolio </h1>
                <p> Game developer with a passion for AI, Security, and PII</p>
                <p> Looking forward to different projects being made here!</p>

                {
                    this.state.displayBio ? (<div>
                            <p>I live in Morrisville, North Carolina</p>
                            <p>My favorite language is Java, but learning ReactJS</p>
                            <p>Rhythm games were something I did!</p>
                            <div>
                                <button onClick = {this.toggleBioDisplay}> Show less!</button>
                            </div>
                        </div>
                        
                        ) : (
                        <div>
                            <button onClick = {this.toggleBioDisplay}> Read More!</button>
                        </div>
                  )

                }
                <hr />
                <Projects />   

            </div>
        )
    }
}

export default App;