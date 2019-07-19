import React, { Component } from 'react';
import { Fieldset, Tabs, Tab } from '@react95/core';

import './WorkExperienceContainer.css';

class WorkExperienceContainer extends Component {
  render() {
    const { logo, companyName, companyUrl, companyDescription, jobTitle } = this.props;
    return (
      <Tabs>
        <Tab 
          activeTab="Company"
          title="Company"
          onClick={() => console.log("Selected Company tab")}
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
              <a href={companyUrl} target="_blank">{companyUrl}</a>
            </p>
            <p style={{float: "left", padding: "10px"}}>
              {companyDescription}
            </p>
          </Fieldset>
        </Tab>
        <Tab 
          activeTab="Contribution"
          title="Contribution"
          onClick={() => console.log("Selected Contribution tab")}
        >
          <Fieldset legend={jobTitle}>
            <p style={{padding: "10px"}}>
              Ex veniam cillum anim enim veniam. Quis qui incididunt exercitation aliquip ea id ad sint. Pariatur fugiat officia reprehenderit aliquip commodo adipisicing est exercitation aliqua aliqua consequat cillum proident incididunt. Ullamco Lorem consectetur aliqua cillum enim voluptate sint.
            </p>
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