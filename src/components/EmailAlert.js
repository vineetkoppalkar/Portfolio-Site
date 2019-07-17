import React, { Component } from 'react';

import { Modal, Button } from '@react95/core';

class EmailAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal
    }
  }

  componentDidMount() {
    this.setState({
      showModal: true,
      copySuccess: ''
    })
  }

  _openModal = () => this.setState({ showModal: true });
  _closeModal = () => {
    this.setState({ showModal: false });
    this.props.closeHandler(this.props.title);
  }

  copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = this.props.content;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.setState({copySuccess: "Copied!"});
  }

  render() {
    const { showModal, copySuccess } = this.state;
    const { icon, title, content, isFocused, setWindowFocus, topValue, leftValue } = this.props;
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
                      display: "grid",
                      textAlign: "center"
                    }}
                  >
                    <Button onClick={() => this.copyToClipboard()}>Copy</Button>
                    {copySuccess}
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
