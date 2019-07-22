import React, { Component } from 'react';

import { Fieldset} from '@react95/core';

class WelcomeContentContainer extends Component {
  render() {
    return (
      <div>
        <Fieldset legend="Hi there!" style={{margin: "1px 8px"}}>
          <p style={{padding: "2px 8px"}}>
            My name is <span style={{fontWeight: "bold"}}>Vineet Koppalkar</span> and I'm a Software Engineer who is extremely passionate about software developement. I enjoy being challenged and I get excited at the opportunity to learn new things! Feel free to get in touch
          </p>
        </Fieldset>
        <Fieldset legend="Navigating the site" style={{margin: "10px 8px"}}>
          <ul style={{padding: "2px 25px"}}>
            <li style={{ listStyleType: "disc"}}><span style={{fontWeight: "bold"}}>Documents</span> folder contains my contact info and resume</li>
            <li style={{ listStyleType: "disc"}}><span style={{fontWeight: "bold"}}>Computer</span> folder contains my eductation and work experience</li>
            <li style={{ listStyleType: "disc"}}><span style={{fontWeight: "bold"}}>Projects</span> folder contains some of my completed projects</li>
          </ul>
        </Fieldset>
      </div>
    );
  }
}

export default WelcomeContentContainer;