import React, { Component } from 'react';
import { Icon } from '@react95/core';

import './FileIcon.css';

class CustomIcon extends Component {
  render() {
    const { image, title, onClick } = this.props;
    return (
      <button className="iconBtn" onClick={() => onClick()}>
        <img src={image} alt={title} />
        {title}
      </button>
    );
  }
}

export default CustomIcon;