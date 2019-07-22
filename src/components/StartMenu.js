import React, { Component } from 'react';
import { List } from '@react95/core';

class StartMenu extends Component {

  shutDown = () => {

    window.ga('send', {
      hitType: 'event',
      eventCategory: "Shutdown",
      eventAction: "Pressed Shutdown from start menu",
    });

    window.open("about:blank", "_self");
    window.close();
  }

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
            welcomeIcon,
            welcomeName,
            openWelcome
          } = this.props;
        
    return (
    <div>
      <List style={{
          zIndex: 2,
          position: 'absolute',
          bottom: '50px'
        }}>

        <List.Item icon={welcomeIcon} onClick={() => {
            toggleStartMenu();
            openWelcome();
          }}
        >
          {welcomeName}
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
        <List.Item 
          icon="computer_3"
          onClick={() => this.shutDown()}
        >
          Shut Down...
        </List.Item>
      </List>
    </div>
    );
  }
  
}

export default StartMenu;