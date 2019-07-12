import React, { Component } from 'react';
import Window from './Window';

import FileIcon from './FileIcon';

const DOCUMENTS_NAME = "Documents"
const PROJECTS_NAME = "Projects"

class DesktopIcons extends Component {
  
  render() {
    const { openWindowHandler, closeWindowHandler } = this.props;

    const openDocuments = () => {
      openWindowHandler(DOCUMENTS_NAME, 
        <Window 
          title={DOCUMENTS_NAME}
          content={DOCUMENTS_NAME}
          closeHandler={closeWindowHandler}
        />);
    };

    const openProjects = () => {
      openWindowHandler(PROJECTS_NAME,
        <Window
          title={PROJECTS_NAME}
          content={PROJECTS_NAME}
          closeHandler={closeWindowHandler}
        />
      );
    }

    return (
      <div>
        <FileIcon 
          title={DOCUMENTS_NAME}
          image="folder"
          onClick={openDocuments}
        />
        <FileIcon 
          title={PROJECTS_NAME}
          image="folder"
          onClick={openProjects}
        />
      </div>
    );
  }
}

export default DesktopIcons;