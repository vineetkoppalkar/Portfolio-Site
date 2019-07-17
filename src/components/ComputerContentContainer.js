import React, { Component } from 'react';

import FileIcon from './FileIcon';
import CustomIcon from './CustomIcon';

import bhvr from '../assets/images/bhvr-logo.png';
import immersion from '../assets/images/immersion.png';
import ballistiq from '../assets/images/ballistiq.ico';

class ComputerContentContainer extends Component {
  render() {
    return ( 
      <div>
        <ul style={{display: "inline-flex"}}>
          <li>
            <FileIcon 
              title="Education"
              image="bat_exec"
              onClick={() => alert("Education!")}
            />
          </li>
          <li>
            <CustomIcon 
              title="Game
              Programmer"
              image={bhvr}
              onClick={() => alert("Bhvr")}
            />
          </li>
          <li>
            <CustomIcon 
              title="Software
              Engineer"
              image={immersion}
              onClick={() => alert("Immersion")}
            />
          </li>
          <li>
            <CustomIcon 
              title="Front-end
              Developer"
              image={ballistiq}
              onClick={() => alert("Ballistiq")}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ComputerContentContainer;