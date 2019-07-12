import React, { Component } from 'react';
import { Button } from "react95";
import { Icon } from '@react95/core';

import './FileIcon.css';

class FileIcon extends Component {
  render() {
    const { image, title, onClick } = this.props;
    return (
      <button onClick={() => onClick()}>
        <Icon className="icon" name={image} />
        {title}
      </button>
    );
  }
}

export default FileIcon;