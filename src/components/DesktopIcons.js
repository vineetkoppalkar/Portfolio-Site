import React, { Component } from 'react';
import Window from './Window';

import FileIcon from './FileIcon';

class DesktopIcons extends Component {
  
  render() {
    const { documentsIcon, 
            documentsName,
            openDocuments,
            computerIcon,
            computerName,
            openComputer,
            projectsIcon, 
            projectsName,
            openProjects,
          } = this.props;

    return (
      <ul>
        <li>
          <FileIcon 
            title={documentsName}
            image={documentsIcon}
            onClick={openDocuments}
          />
        </li>
        <li>
          <FileIcon 
            title={computerName}
            image={computerIcon}
            onClick={openComputer}
          />
        </li>
        <li>
          <FileIcon 
            title={projectsName}
            image={projectsIcon}
            onClick={openProjects}
          />
        </li>
      </ul>
    );
  }
}

export default DesktopIcons;