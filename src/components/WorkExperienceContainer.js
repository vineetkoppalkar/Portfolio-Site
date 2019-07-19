import React, { Component } from 'react';
import { Fieldset, Tabs, Tab } from '@react95/core';

import './WorkExperienceContainer.css';

class WorkExperienceContainer extends Component {

  onClickTab = (tabName, companyName) => {
    window.ga('send', {
      hitType: 'event',
      eventCategory: "Selected tab",
      eventAction: `${tabName} ${companyName}`,
    });
  }

  onClickCompanyUrl = (url) => {
    window.ga('send', {
      hitType: 'event',
      eventCategory: "Clicked link",
      eventAction: url,
    });
  };

  render() {
    const { logo, companyName, companyUrl, companyDescription, jobTitle } = this.props;
    return (
      <Tabs>
        <Tab 
          activeTab="Company"
          title="Company"
          onClick={() => this.onClickTab("Company", companyName)}
        >
          <Fieldset legend={companyName}>
            <img 
              src={logo} 
              alt={companyName} 
              style={{
                float: "left",
                margin: "10px",
                width: "64px",
                height: "64px"
              }}
            />

            <p style={{padding: "10px"}}>
              <a 
                href={companyUrl}
                target="_blank"
                onClick={() => this.onClickCompanyUrl(companyUrl)}
              >
                {companyUrl}
              </a>
            </p>
            <p style={{float: "left", padding: "1px 10px"}}>
              {companyDescription}
            </p>
          </Fieldset>
        </Tab>
        <Tab 
          activeTab="Contribution"
          title="Contribution"
          onClick={() => this.onClickTab("Contribution", companyName)}
        >
          <Fieldset legend={jobTitle}>
            <p style={{padding: "10px"}}>
              Ex veniam cillum anim enim veniam. Quis qui incididunt exercitation aliquip ea id ad sint. Pariatur fugiat officia reprehenderit aliquip commodo adipisicing est exercitation aliqua aliqua consequat cillum proident incididunt. Ullamco Lorem consectetur aliqua cillum enim voluptate sint.
            </p>
          </Fieldset>
        </Tab>
      </Tabs>
    );
  }
}

export default WorkExperienceContainer;