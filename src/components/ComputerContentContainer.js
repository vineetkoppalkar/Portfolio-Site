import React, { Component } from 'react';

import * as windowType from '../constants';

import FileIcon from './FileIcon';
import CustomIcon from './CustomIcon';
import WorkExperienceContainer from './WorkExperienceContainer';

import bhvr from '../assets/images/bhvr-logo.png';
import immersion from '../assets/images/immersion.png';
import ballistiq from '../assets/images/ballistiq.ico';

const EDUCATION_TITLE = "Education";
const EDUCATION_ICON = "bat_exec";

const WORK_ICON = "bat_exec_2";

const BHVR_NAME = "Behaviour Interactive";
const BHVR_JOB = "Game Programmer";
const BHVR_TITLE = `${BHVR_JOB} - ${BHVR_NAME}`;
const BHVR_URL = "https://www.bhvr.com/";
const BHVR_DESCRIPTION = "Behaviour Interactive Inc. is a Canadian video game development studio specializing in the production of 2D and 3D action/adventure games for home video game consoles, handheld game consoles and personal computers.";

const IMMR_NAME = "Immersion";
const IMMR_JOB = "Software Engineer";
const IMMR_TITLE = `${IMMR_JOB} - ${IMMR_NAME}`;
const IMMR_URL = "https://www.immersion.com/";
const IMMR_DESCRIPTION = "Immersion Corporation of San Jose, California, is a developer and licensor of touch feedback technology, also known as haptic technology. Immersion's technology is used in digital technology in mobile devices, automotive touchscreen and touchpads, medical training equipment, gaming consoles and other consumer electronics.";

const BALLISTIQ_NAME = "Ballistiq Digial";
const BALLISTIQ_JOB = "Front-end Developer";
const BALLISTIQ_TITLE = `${BALLISTIQ_JOB} - ${BALLISTIQ_NAME}`;
const BALLISTIQ_URL = "https://ballistiq.com/";
const BALLISTIQ_DESCRIPTION = "Ballistiq is a digital design and development agency that builds engaging online communities, next-gen branded learning platforms and cutting edge marketplaces. We work with media, technology, gaming and entertainment companies across the globe. Our sister company is ArtStation.com";

class ComputerContentContainer extends Component {

  openEducation = () => {
    this.props.openWindowHandler(EDUCATION_TITLE, EDUCATION_ICON, windowType.TABBED_WINDOW, "Education");
  }

  openBhvr = () => {
    this.props.openWindowHandler(BHVR_TITLE, WORK_ICON, windowType.TABBED_WINDOW, 
      <WorkExperienceContainer 
        logo={bhvr}
        companyName={BHVR_NAME}
        companyUrl={BHVR_URL}
        companyDescription={BHVR_DESCRIPTION}
        jobTitle={BHVR_JOB}
      />
    );
  }

  openImmr = () => {
    this.props.openWindowHandler(IMMR_TITLE, WORK_ICON, windowType.TABBED_WINDOW,
      <WorkExperienceContainer 
        logo={immersion}
        companyName={IMMR_NAME}
        companyUrl={IMMR_URL}
        companyDescription={IMMR_DESCRIPTION}
        jobTitle={IMMR_JOB}
      />  
    );
  }

  openBallistiq = () => {
    this.props.openWindowHandler(BALLISTIQ_TITLE, WORK_ICON, windowType.TABBED_WINDOW,
      <WorkExperienceContainer 
        logo={ballistiq}
        companyName={BALLISTIQ_NAME}
        companyUrl={BALLISTIQ_URL}
        companyDescription={BALLISTIQ_DESCRIPTION}
        jobTitle={BALLISTIQ_JOB}
      />
    );
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