import React, { Component } from 'react';
import { Icon } from '@react95/core';

import './FileIcon.css';

class FileIcon extends Component {
  render() {
    const { image, title, onClick } = this.props;
    return (
      <button className="iconBtn" onClick={() => onClick()}>
        <Icon className="icon" name={image} />
        {title}
      </button>
    );
  }
}

export default FileIcon;