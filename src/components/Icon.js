import React, { Component } from 'react';
import { Icon } from '@react95/core';

import './FileIcon.css';

class ShortcutIcon extends Component {
  render() {
    const { image, title, onClick } = this.props;
    return (
      <button className="iconBtn" onClick={() => onClick()}>
        <img src={image} alt={title} />
        <div style={{position: "relative", marginTop: "-32px"}}>
          {title}
        </div>
      </button>
    );
  }
}

export default ShortcutIcon;