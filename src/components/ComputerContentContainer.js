import React, { Component } from 'react';

import FileIcon from './FileIcon';
import ShortcutIcon from './ShortcutIcon';
import CustomIcon from './CustomIcon';

import github from '../assets/images/github.ico';
import linkedin from '../assets/images/linkedin.png';
import pdficon from '../assets/images/pdficon.png';

class ComputerContentContainer extends Component {
  render() {
    return ( 
      <div>
        <ul style={{display: "inline-flex"}}>
          <li>
            <FileIcon 
              title="Education.exe"
              image="bat_exec"
              onClick={() => alert("Education!")}
            />
          </li>
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
              onClick={() => alert("Resume")}
              isShortcut={false}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ComputerContentContainer;