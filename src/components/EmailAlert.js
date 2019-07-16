import React, { Component } from 'react';

import { Alert } from '@react95/core';

class EmailAlert extends Component {
  render() {
    const { title, type, message, isFocused, setWindowFocus, closeHandler } = this.props;
    return (
      <div
        onMouseDown={() => setWindowFocus(title)}
        style={isFocused ? {position: "relative", zIndex: 1} : {position: "relative", zIndex: 0}}
      >
        <Alert
          title={title}
          type={type}
          message={message}
          closeAlert={() => console.log("Clicked email")}
        />
      </div>
    );
  }
}

export default EmailAlert;
