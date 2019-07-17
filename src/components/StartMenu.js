import React, { Component } from 'react';
import { List } from '@react95/core';

class StartMenu extends Component {
  render() {
    const { toggleStartMenu,
            documentsIcon, 
            documentsName,
            openDocuments,
            computerIcon,
            computerName,
            openComputer,
            projectsIcon, 
            projectsName,
            openProjects,
            userIcon,
            userName,
            openUser
          } = this.props;
        
    return (
    <div>
      <List style={{
          zIndex: 2,
          position: 'absolute',
          bottom: '50px'
        }}>

        <List.Item icon={userIcon} onClick={() => {
            toggleStartMenu();
            openUser();
          }}
        >
          {userName}
        </List.Item>

        <List.Item icon={documentsIcon} onClick={() => {
            toggleStartMenu();
            openDocuments();
          }}
        >
          {documentsName}
        </List.Item>
        <List.Item icon={computerIcon} onClick={() => {
            toggleStartMenu();
            openComputer();
          }}
        >
          {computerName}
        </List.Item>
        <List.Item icon={projectsIcon} onClick={() => {
            toggleStartMenu();
            openProjects();
          }}
        >
          {projectsName}
        </List.Item>
        <List.Divider />
        <List.Item icon="computer_3" onClick={() => {
          window.open("about:blank", "_self");
          window.close();
        }}>
        Shut Down...</List.Item>
      </List>
    </div>
    );
  }
  
}

export default StartMenu;