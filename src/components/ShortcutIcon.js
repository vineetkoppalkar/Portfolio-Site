import React, { Component } from 'react';
import { Icon } from '@react95/core';

import './FileIcon.css';

class ShortcutIcon extends Component {
  render() {
    const { image, title, hrefValue } = this.props;
    return (
      <button className="iconBtn button" onClick={() => {
        window.open(hrefValue);
      }} type="button">
        <img src={image} alt={title} />
        <div 
          style={{
            position: "relative", 
            marginTop: "-32px"
          }}
        >
          <Icon className="icon" name="shortcut" />
          {title}
        </div>
      </button>
    );
  }
}

export default ShortcutIcon;