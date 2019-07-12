import React, { Component } from 'react';
import { Modal, List } from '@react95/core';

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
    const { title, content } = this.props;
    return (
      <div>
        {showModal && (
          <Modal
            icon="folder"
            title={title}
            closeModal={this._closeModal}
            menu={[
              {
                name: 'File',
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
                      onClick={() => {
                        this._copySelectedText();
                        this._closeModalMenu();
                      }}
                    >
                      Copy
                    </List.Item>
                    <List.Divider />
                    <List.Item
                      onClick={() => {
                        this._selectAllText();
                        this._closeModalMenu();
                      }}
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
    );
  }
}

export default Window;