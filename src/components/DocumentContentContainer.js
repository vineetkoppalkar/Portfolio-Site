import React, { Component } from 'react';

import * as windowType from '../constants';

import FileIcon from './FileIcon';
import ShortcutIcon from './ShortcutIcon';
import CustomIcon from './CustomIcon';

import github from '../assets/images/github.ico';
import linkedin from '../assets/images/linkedin.png';
import pdficon from '../assets/images/pdficon.png';

const EMAIL_TITLE = "E-mail";
const EMAIL_ICON = "mail";
const EMAIL_CONTENT = "koppalkarvineet@gmail.com"

class DocumentContentContainer extends Component {

  openEmailAlert = () => {
    this.props.openWindowHandler(EMAIL_TITLE, EMAIL_ICON, windowType.ALERT, EMAIL_CONTENT);
  }

  render() {
    const { openEmailAlert } = this.props;
    return ( 
      <div>
        <ul style={{display: "inline-flex"}}>
          <li>
            <ShortcutIcon 
              title="Github"
              image={github}
              hrefValue="https://github.com/vineetkoppalkar"
            />
          </li>
          <li>
            <ShortcutIcon 
              title="LinkedIn"
              image={linkedin}
              hrefValue="https://www.linkedin.com/in/vineetkoppalkar/"
            />
          </li>
          <li>
            <CustomIcon 
              title="Resume"
              image={pdficon}
              onClick={() => alert("Resume to be added!")}
            />
          </li>
          <li>
            <FileIcon 
              title="E-mail"
              image="mail"
              onClick={() => this.openEmailAlert()}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default DocumentContentContainer;