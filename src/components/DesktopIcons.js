import React, { Component } from 'react';
import Window from './Window';

import FileIcon from './FileIcon';

const DOCUMENTS_NAME = "Documents"
const DOCUMENTS_ICON = "folder_file"

const COMPUTER_NAME = "Computer"
const COMPUTER_ICON = "computer"

const PROJECTS_NAME = "Projects"
const PROJECTS_ICON = "folder"

class DesktopIcons extends Component {
  
  render() {
    const { openWindowHandler, closeWindowHandler } = this.props;

    const openDocuments = () => {
      openWindowHandler(DOCUMENTS_NAME, 
        <Window 
          icon={DOCUMENTS_ICON}
          title={DOCUMENTS_NAME}
          content={DOCUMENTS_NAME}
          closeHandler={closeWindowHandler}
        />);
    };

    const openComputer = () => {
      openWindowHandler(COMPUTER_NAME,
        <Window
          icon={COMPUTER_ICON}
          title={COMPUTER_NAME}
          content={COMPUTER_NAME}
          closeHandler={closeWindowHandler}
        />
      );
    }

    const openProjects = () => {
      openWindowHandler(PROJECTS_NAME,
        <Window
          icon={PROJECTS_ICON}
          title={PROJECTS_NAME}
          content={PROJECTS_NAME}
          closeHandler={closeWindowHandler}
        />
      );
    }

    return (
      <ul>
        <li>
          <FileIcon 
            title={DOCUMENTS_NAME}
            image={DOCUMENTS_ICON}
            onClick={openDocuments}
          />
        </li>
        <li>
          <FileIcon 
            title={COMPUTER_NAME}
            image={COMPUTER_ICON}
            onClick={openComputer}
          />
        </li>
        <li>
          <FileIcon 
            title={PROJECTS_NAME}
            image={PROJECTS_ICON}
            onClick={openProjects}
          />
        </li>
      </ul>
    );
  }
}

export default DesktopIcons;