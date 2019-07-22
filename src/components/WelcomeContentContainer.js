import React, { Component } from 'react';

import { Fieldset, Icon } from '@react95/core';

class WelcomeContentContainer extends Component {
  render() {
    const {
            doucmentsName,
            documentsIcon,
            computerName,
            computerIcon, 
            projectsName,
            projectsIcon
          } = this.props;
    return (
      <div>
        <Fieldset legend="Hi there!" style={{margin: "1px 8px"}}>
          <p style={{padding: "2px 8px"}}>
            My name is <span style={{fontWeight: "bold"}}>Vineet Koppalkar</span> and I'm a Software Engineer who is extremely passionate about software developement. I enjoy being challenged and I get excited at the opportunity to learn new things! Feel free to get in touch
          </p>
        </Fieldset>
        <Fieldset legend="Navigating the site" style={{margin: "10px 8px 0px"}}>
          <ul style={{padding: "2px 15px"}}>
            <li>
              <Icon 
                style={{
                  width:"28px",
                  float: "left",
                  marginRight: "8.5px"
                }}
                name={documentsIcon}
              />
              <span style={{fontWeight: "bold"}}>{doucmentsName}</span> folder  contains my contact info and resume
            </li>
            <li>
              <Icon 
                style={{
                  width:"25px",
                  float: "left",
                  marginRight: "10px"
                }}
                name={computerIcon}
              />
              <span style={{fontWeight: "bold"}}>{computerName}</span> folder contains my eductation and work experience
            </li>
            <li>
              <Icon 
                style={{
                  width:"25px",
                  float: "left",
                  marginRight: "10px"
                }}
                name={projectsIcon}
              />
              <span style={{fontWeight: "bold"}}>{projectsName}</span> folder contains some of my completed projects
            </li>
          </ul>
        </Fieldset>
      </div>
    );
  }
}

export default WelcomeContentContainer;