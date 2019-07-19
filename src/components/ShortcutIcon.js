import React, { Component } from 'react';
import { Icon } from '@react95/core';

import './FileIcon.css';

class ShortcutIcon extends Component {

  onClickIcon = (url) => {
    window.ga('send', {
      hitType: 'event',
      eventCategory: "Clicked link",
      eventAction: url,
    });

    window.open(url);
  }

  render() {
    const { image, title, hrefValue } = this.props;
    return (
      <button 
        className="iconBtn button"
        onClick={() => this.onClickIcon(hrefValue)} 
        type="button"
      >
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