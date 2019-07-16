import React, { Component } from 'react';

import { Modal, List } from '@react95/core';

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: this.props.showModal
    }
  }

  componentDidMount() {
    this.setState({
      showModal: true
    })
  }

  _openModal = () => this.setState({ showModal: true });
  _closeModal = () => {
    this.setState({ showModal: false });
    this.props.closeHandler(this.props.title);
  }

  render() {
    const { showModal } = this.state;
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
              <div style={{
                height: '100%',
                margin: "0 20px"
              }}>{content}</div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default CustomModal;
