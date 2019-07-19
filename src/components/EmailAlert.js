import React, { Component } from 'react';
import { Modal, Button } from '@react95/core';

import * as windowType from '../constants';

class EmailAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topValue: '',
      leftValue: '',
      showModal: this.props.showModal,
      copySuccess: ''
    }
  }

  componentDidMount() {
    let { topValue, leftValue } = this.props;

    this.setState({
      topValue,
      leftValue,
      showModal: true
    })
  }

  _openModal = () => this.setState({ showModal: true });
  _closeModal = () => {
    this.setState({ showModal: false });
    this.props.closeHandler(this.props.title, windowType.ALERT);
  }

  copyToClipboard = () => {
    let email = this.props.content;
    const textField = document.createElement('textarea');
    textField.innerText = email;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.setState({copySuccess: "Copied!"});

    window.ga('send', {
      hitType: 'event',
      eventCategory: "Copied email",
      eventAction: email,
    });
  }

  render() {
    const { showModal, copySuccess, topValue, leftValue } = this.state;
    const { icon, title, content, isFocused, setWindowFocus } = this.props;
    return (
      <div style={{
        position: "absolute",
        top: topValue,
        left: leftValue
      }}>
        <div
          onMouseDown={() => setWindowFocus(title)}
          style={isFocused ? {position: "relative", zIndex: 1} : {position: "relative", zIndex: 0}}
        >
          {showModal && (
            <Modal
              icon={icon}
              title={title}
              closeModal={this._closeModal}
              width="auto"
              height="auto"
            >
              <div 
                style={{
                  height: '100%',
                  margin: "0 20px",
                  lineHeight: "40px"
                }}
              >
                {content}
                <br />
                {
                document.queryCommandSupported('copy') &&
                  <div 
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <Button
                      style={{
                        width: "50%",
                        float: "left"
                      }}
                      onClick={() => this.copyToClipboard()}
                    >
                      Copy
                    </Button>
                    <Button 
                      style={{
                        width: "50%",
                        float: "right"
                      }}
                      onClick={this._closeModal}
                    >
                      Close
                    </Button>
                    <p style={{width: "100%"}}>
                      {copySuccess}
                    </p>
                  </div>
                }

              </div>
            </Modal>)}
        </div>
      </div>
    );
  }
}

export default EmailAlert;
