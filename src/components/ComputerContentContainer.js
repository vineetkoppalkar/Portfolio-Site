import React, { Component } from 'react';

import * as windowType from '../constants';

import FileIcon from './FileIcon';
import CustomIcon from './CustomIcon';

import bhvr from '../assets/images/bhvr-logo.png';
import immersion from '../assets/images/immersion.png';
import ballistiq from '../assets/images/ballistiq.ico';

const EDUCATION_TITLE = "Education";
const EDUCATION_ICON = "bat_exec";

const WORK_ICON = "bat_exec_2";

const BHVR_NAME = "Behaviour Interactive";
const BHVR_JOB = "Game Programmer";
const BHVR_TITLE = `${BHVR_JOB} - ${BHVR_NAME}`;

const IMMR_NAME = "Immersion";
const IMMR_JOB = "Software Engineer";
const IMMR_TITLE = `${IMMR_JOB} - ${IMMR_NAME}`;

const BALLISTIQ_NAME = "Ballistiq Digial";
const BALLISTIQ_JOB = "Front-end Developer";
const BALLISTIQ_TITLE = `${BALLISTIQ_JOB} - ${BALLISTIQ_NAME}`;

class ComputerContentContainer extends Component {

  openEducation = () => {
    this.props.openWindowHandler(EDUCATION_TITLE, EDUCATION_ICON, windowType.TABBED_WINDOW, "Education");
  }

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
              title={EDUCATION_TITLE}
              image={EDUCATION_ICON}
              onClick={() => this.openEducation()}
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