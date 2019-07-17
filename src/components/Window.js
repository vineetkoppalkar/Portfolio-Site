import React, { Component } from 'react';
import { Modal, List } from '@react95/core';

import './Window.css';

class Window extends Component {

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
    const { icon, title, content, isFocused, topValue, leftValue, setWindowFocus } = this.props;
    return (
      <div class="window-class" style={{
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
              style={{top: "35%"}}
              menu={[
                {
                  name: 'Filxe',
                  list: (
                    <List>
                      <List.Item onClick={this._closeModal}>Exit</List.Item>
                    </List>
                  ),
                },
                {
                  name: 'Edit',
                  list: (
                    <List>
                      <List.Item
                        // onClick={() => {
                        //   this._copySelectedText();
                        //   this._closeModalMenu();
                        // }}
                      >
                        Copy
                      </List.Item>
                      <List.Divider />
                      <List.Item
                        // onClick={() => {
                        //   this._selectAllText();
                        //   this._closeModalMenu();
                        // }}
                      >
                        Select All
                      </List.Item>
                    </List>
                  ),
                },
              ]}>
              <div style={{
                height: '100%',
                background: 'white'
              }}>{content}</div>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default Window;