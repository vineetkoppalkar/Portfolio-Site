import React, { Component } from 'react';

import './FileIcon.css';

class CustomIcon extends Component {
  render() {
    const { image, title, onClick } = this.props;
    return (
      <button className="iconBtn" onClick={() => onClick()}>
        <img 
          src={image} 
          alt={title} 
          style={{
            width: "32px",
            height: "32px"
          }}
        />
        {title}
      </button>
    );
  }
}

export default CustomIcon;