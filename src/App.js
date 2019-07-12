import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Button, AppBar, Toolbar, Avatar } from "react95";

import StartMenu from './components/StartMenu';
import Window from './components/Window';
import DesktopIcons from './components/DesktopIcons';
import { Icon } from '@react95/core';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const DOCUMENTS_NAME = "Documents"
const DOCUMENTS_ICON = "folder_file"

const COMPUTER_NAME = "Computer"
const COMPUTER_ICON = "computer"

const PROJECTS_NAME = "Projects"
const PROJECTS_ICON = "folder"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curTime: this.formatAMPM(new Date()),
      showStartMenu: false,
      openWindows: {}
    }
  }

  formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : this.formatAMPM(new Date())
      })
    },1000)
  }

  toggleStartMenu = () => {
    this.setState({
      showStartMenu: !this.state.showStartMenu
    });
  }

  openWindowHandler = (name, windowObj) => {
    let { openWindows } = this.state;
    if (!(name in openWindows)) {
      let updatedOpenWindows = openWindows;
      updatedOpenWindows[name] = windowObj; 
      this.setState({
        openWindows: updatedOpenWindows
      });
      console.log("Opened " + name);
    } else {
      console.log("Cannot open " + name + " because it is already open");
    }
  }

  closeWindowHandler = (name, window) => {
    let { openWindows } = this.state;
    if (name in openWindows) {
      let updatedOpenWindows = openWindows;
      delete updatedOpenWindows[name]; 
      this.setState({
        openWindows: updatedOpenWindows
      });
      console.log("Closed " + name);
    } else {
      console.log("Cannot close " + name + " because it is not open");
    }
  }

  openDocuments = () => {
    this.openWindowHandler(DOCUMENTS_NAME, 
      <Window 
        icon={DOCUMENTS_ICON}
        title={DOCUMENTS_NAME}
        content={DOCUMENTS_NAME}
        closeHandler={this.closeWindowHandler}
      />);
  };

  openComputer = () => {
    this.openWindowHandler(COMPUTER_NAME,
      <Window
        icon={COMPUTER_ICON}
        title={COMPUTER_NAME}
        content={COMPUTER_NAME}
        closeHandler={this.closeWindowHandler}
      />
    );
  }

  openProjects = () => {
    this.openWindowHandler(PROJECTS_NAME,
      <Window
        icon={PROJECTS_ICON}
        title={PROJECTS_NAME}
        content={PROJECTS_NAME}
        closeHandler={this.closeWindowHandler}
      />
    );
  }

  render() {
    const { showStartMenu, openWindows } = this.state;
    return (
      <div>
        <ResetStyles />
        <DesktopIcons
          documentsIcon={DOCUMENTS_ICON}
          documentsName={DOCUMENTS_NAME}
          openDocuments={this.openDocuments}
          computerIcon={COMPUTER_ICON}
          computerName={COMPUTER_NAME}
          openComputer={this.openComputer}
          projectsIcon={PROJECTS_ICON}
          projectsName={PROJECTS_NAME}
          openProjects={this.openProjects}
        />
        
        <ul>
          {
            Object.keys(openWindows).map((key) => {
              return <li key={key}>{openWindows[key]}</li>
            })
          }
        </ul>

        {showStartMenu ? (
          <StartMenu
            toggleStartMenu={this.toggleStartMenu}
            documentsIcon={DOCUMENTS_ICON}
            documentsName={DOCUMENTS_NAME}
            openDocuments={this.openDocuments}
            computerIcon={COMPUTER_ICON}
            computerName={COMPUTER_NAME}
            openComputer={this.openComputer}
            projectsIcon={PROJECTS_ICON}
            projectsName={PROJECTS_NAME}
            openProjects={this.openProjects}
          />
        ) : null}
        
        <ThemeProvider theme={themes.default}>
          <AppBar style={{
            bottom: 0,
            top: 'auto',
          }}>
            <Toolbar style={{ justifyContent: 'space-between', paddingRight: '1rem' }}>
              {showStartMenu ? (
                <Button active onClick={() => this.toggleStartMenu()}>
                  <Icon name="logo" /> Start
                </Button>
              ) : (
                <Button onClick={() => this.toggleStartMenu()}>
                  <Icon name="logo" /> Start
                </Button>
              )}
              <Avatar square style={{width: 'auto', padding: "10px"}}>{this.state.curTime}</Avatar>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
