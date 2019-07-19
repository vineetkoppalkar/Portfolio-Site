import React, { Component } from 'react';
import { Modal } from '@react95/core';

import * as windowType from '../constants';

class TabbedWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topValue: '',
      leftValue: '',
      showModal: this.props.showModal,
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
    this.props.closeHandler(this.props.title, windowType.TABBED_WINDOW);
  }

  render() {
    const { showModal, topValue, leftValue } = this.state;
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
              width="400"
              height="auto"
            >
              <div 
                style={{
                  height: '100%',
                  margin: "0",
                  lineHeight: "25px"
                }}
              >
                {content} 
              </div>
            </Modal>)}
        </div>
      </div>
    );
  }
}

export default TabbedWindow;
