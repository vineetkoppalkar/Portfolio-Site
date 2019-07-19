import React, { Component } from 'react';
import { Fieldset, Tabs, Tab } from '@react95/core';

import concordia from '../assets/images/concordia-logo.png';
import vanier from '../assets/images/vanier-logo.png';

import './WorkExperienceContainer.css';

class EducationContainer extends Component {

  onClickTab = (tabName) => {
    window.ga('send', {
      hitType: 'event',
      eventCategory: "Selected tab",
      eventAction: tabName,
    });
  }

  render() {
    return (
      <Tabs>
        <Tab 
          activeTab="University"
          title="University"
          onClick={() => this.onClickTab("University")}
        >
          <Fieldset legend="Concordia University">
            <img 
              src={concordia} 
              alt="Concordia University" 
              style={{
                margin: "0 10px",
                width: "50%"
              }}
            />
            <p style={{padding: "0 10px"}}>
              Ex veniam cillum anim enim veniam. Quis qui incididunt exercitation aliquip ea id ad sint. Pariatur fugiat officia reprehenderit aliquip commodo adipisicing est exercitation aliqua aliqua consequat cillum proident incididunt. Ullamco Lorem consectetur aliqua cillum enim voluptate sint.
            </p>
          </Fieldset>
        </Tab>
        <Tab 
          activeTab="Cegep"
          title="Cegep"
          onClick={() => this.onClickTab("Cegep")}
        >
          <Fieldset legend="Vanier College">
            <img 
              src={vanier} 
              alt="Vanier College" 
              style={{
                margin: "0 10px",
                width: "40%"
              }}
            />
            <p style={{padding: "0 10px"}}>
              Ex veniam cillum anim enim veniam. Quis qui incididunt exercitation aliquip ea id ad sint. Pariatur fugiat officia reprehenderit aliquip commodo adipisicing est exercitation aliqua aliqua consequat cillum proident incididunt. Ullamco Lorem consectetur aliqua cillum enim voluptate sint.
            </p>
          </Fieldset>
        </Tab>
      </Tabs>
    );
  }
}

export default EducationContainer;