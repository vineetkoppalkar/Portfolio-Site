import React, { Component } from 'react';

import * as windowType from '../constants';

import FileIcon from './FileIcon';
import CustomIcon from './CustomIcon';

import bhvr from '../assets/images/bhvr-logo.png';
import immersion from '../assets/images/immersion.png';
import ballistiq from '../assets/images/ballistiq.ico';

const WORK_ICON = "bat_exec_2";
const BHVR_TITLE = "Game Programmer - Behaviour Interactive";
const IMMR_TITLE = "Software Engineer - Immersion";
const BALLISTIQ_TITLE = "Front-end Developer - Ballistiq Digial";

class ComputerContentContainer extends Component {

  openBhvr = () => {
    this.props.openWindowHandler(BHVR_TITLE, WORK_ICON, windowType.TABBED_WINDOW, "Content");
  }

  openImmr = () => {
    this.props.openWindowHandler(IMMR_TITLE, WORK_ICON, windowType.TABBED_WINDOW, "Content");
  }

  openBallistiq = () => {
    this.props.openWindowHandler(BALLISTIQ_TITLE, WORK_ICON, windowType.TABBED_WINDOW, "Content");
  }

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
              title="Game Programmer"
              image={bhvr}
              onClick={() => this.openBhvr()}
            />
          </li>
          <li>
            <CustomIcon 
              title="Software Engineer"
              image={immersion}
              onClick={() => this.openImmr()}
            />
          </li>
          <li>
            <CustomIcon 
              title="Front-end Developer"
              image={ballistiq}
              onClick={() => this.openBallistiq()}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ComputerContentContainer;