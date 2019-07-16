import React, { Component } from 'react';
import { List, Icon } from '@react95/core';

import FileIcon from './FileIcon';

// import './FileIcon.css';

class DocumentContentContainer extends Component {
  render() {
    return ( 
      <ul style={{display: "inline-flex"}}>
        <li>
          <FileIcon 
            title="Folder"
            image="folder"
            onClick={() => alert("Clicked")}
          />
        </li>
        <li>
        <FileIcon 
            title="Folder"
            image="folder"
            onClick={() => alert("Clicked")}
          />
        </li>
        <li>
          <FileIcon 
            title="Folder"
            image="folder"
            onClick={() => alert("Clicked")}
          />
        </li>
        <li>
          <FileIcon 
            title="Folder"
            image="folder"
            onClick={() => alert("Clicked")}
          />
        </li>
      </ul>
    );
  }
}

export default DocumentContentContainer;