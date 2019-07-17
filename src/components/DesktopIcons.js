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
            userIcon,
            userName,
            openUser
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
            title={userName}
            image={userIcon}
            onClick={openUser}
            colorValue="white"
          />
        </li>
      </ul>
    );
  }
}

export default DesktopIcons;