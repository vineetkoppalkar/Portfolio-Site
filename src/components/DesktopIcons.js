import React, { Component } from 'react';

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
            welcomeIcon,
            welcomeName,
            openWelcome
          } = this.props;

    return (
      <ul>
        <li>
          <FileIcon 
            title={documentsName}
            image={documentsIcon}
            onClick={openDocuments}
            colorValue="white"
          />
        </li>
        <li>
          <FileIcon 
            title={computerName}
            image={computerIcon}
            onClick={openComputer}
            colorValue="white"
          />
        </li>
        <li>
          <FileIcon 
            title={projectsName}
            image={projectsIcon}
            onClick={openProjects}
            colorValue="white"
          />
        </li>
        <li>
          <FileIcon 
            title={welcomeName}
            image={welcomeIcon}
            onClick={openWelcome}
            colorValue="white"
          />
        </li>
      </ul>
    );
  }
}

export default DesktopIcons;