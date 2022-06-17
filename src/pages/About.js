import React, { Component } from 'react';
import picture from "../assets/champ.png";
export default class About extends Component {
    render() {
        return (
            <div>
            <div class="split left">
              <div className="centered">
                <img 
                  className = "profile_image"
                  src={picture}
                  width={250} height={250}
                  alt="Profile Pic"
                  
                  ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title"> Nishi Kantamneni</div>
                <div className="brief description">
                  Hi! My name is Nishi Kantamneni and I am from California! I'm a rising junior majoring in Computer Science at Cornell University. 
                </div>
                <div className="brief description">
                  I like playing baketball and watching Formula 1. I love going on hikes with my dog, reading and watching movies!
                </div>
              </div>
            </div>
          </div>
        )
    }
}