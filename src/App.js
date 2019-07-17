import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Button, AppBar, Toolbar, Avatar, Divider } from "react95";
import { Tooltip, Icon } from '@react95/core';

import StartMenu from './components/StartMenu';
import Window from './components/Window';
import DesktopIcons from './components/DesktopIcons';
import DocumentContentContainer from './components/DocumentContentContainer'
import EmailAlert from './components/EmailAlert';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const WINDOW = 0;
const ALERT = 1;

const DOCUMENTS_NAME = "Documents"
const DOCUMENTS_ICON = "folder_file"

const COMPUTER_NAME = "Computer"
const COMPUTER_ICON = "computer"

const PROJECTS_NAME = "Projects"
const PROJECTS_ICON = "folder"

const USER_NAME = "Vineet"
const USER_ICON = "user"

const EMAIL_TITLE = "E-mail";
const EMAIL_ICON = "mail";
const EMAIL_CONTENT = "koppalkarvineet@gmail.com"

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curTime: formatAMPM(new Date()),
      showStartMenu: false,
      windows: {}
    }
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : formatAMPM(new Date())
      })
    },1000)
  }

  toggleStartMenu = (value = null) => {
    if (value != null) {
      this.setState({
        showStartMenu: value
      });
    } else {
      this.setState({
        showStartMenu: !this.state.showStartMenu
      });
    }
  }

  updatedSelectedWindows = (name, windows) => {
    Object.keys(windows).forEach((key) => {
      if (key === name) { 
        windows[key].isFocused = true;
        console.log("Show " + key + " in front");
      } else {
        console.log("Setting focus of " + key + " to false");
        windows[key].isFocused = false;
      }
    });
    return windows
  }

  setWindowFocus = (name) => {
    let updatedWindows = this.updatedSelectedWindows(name, this.state.windows);
    this.setState({
      windows: updatedWindows,
      showStartMenu: false
    });
  }

  openWindowHandler = (name, icon, content, type) => {
    let { windows } = this.state;
    if (!(name in windows)) {
      windows[name] = {
        icon,
        title: name,
        content,
        type,
        isFocused: true,
      };

      let updatedWindows = this.updatedSelectedWindows(name, windows);
      this.setState({
        windows: updatedWindows,
        showStartMenu: false      
      });
      console.log("Opened " + name);
    } else {
      this.setWindowFocus(name);
      console.log("Cannot open " + name + " because it is already open");
    }
  }

  closeWindowHandler = (name, window) => {
    let { windows } = this.state;
    if (name in windows) {
      let updatedwindows = windows;
      delete updatedwindows[name]; 
      this.setState({
        windows: updatedwindows,
        showStartMenu: false
      });
      console.log("Closed " + name);
    } else {
      console.log("Cannot close " + name + " because it is not open");
    }
  }

  openDocuments = () => {
    this.openWindowHandler(DOCUMENTS_NAME, DOCUMENTS_ICON, <DocumentContentContainer openEmailAlert={this.openEmailAlert} />, WINDOW);
  };

  openComputer = () => {
    this.openWindowHandler(COMPUTER_NAME, COMPUTER_ICON, <DocumentContentContainer openEmailAlert={this.openEmailAlert} />, WINDOW);
  }

  openProjects = () => {
    this.openWindowHandler(PROJECTS_NAME, PROJECTS_ICON, <DocumentContentContainer openEmailAlert={this.openEmailAlert} />, WINDOW);
  }

  openUser = () => {
    this.openWindowHandler(USER_NAME, USER_ICON, <DocumentContentContainer openEmailAlert={this.openEmailAlert} />, WINDOW);
  }

  openEmailAlert = () => {
    this.openWindowHandler(EMAIL_TITLE, EMAIL_ICON, EMAIL_CONTENT, ALERT);
  }

  render() {
    const { showStartMenu, windows, curTime } = this.state;
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
          userIcon={USER_ICON}
          userName={USER_NAME}
          openUser={this.openUser}
        />
        
        {
          Object.keys(windows).map((key, index) => {
            let { windows } = this.state;
            let currentWindow = windows[key];

            switch(currentWindow.type) {
              case WINDOW:
                return (
                  <Window
                    key={key}
                    icon={currentWindow.icon}
                    title={currentWindow.title}
                    content={currentWindow.content}
                    isFocused={currentWindow.isFocused}
                    closeHandler={this.closeWindowHandler}
                    topValue={(7 * (index + 1)) + "%"}
                    leftValue={(7 * (index + 1)) + "%"}
                    setWindowFocus={this.setWindowFocus}
                  />
                );
              case ALERT:
                  return (
                    <EmailAlert
                      key={key}
                      icon={currentWindow.icon}
                      title={currentWindow.title}
                      content={currentWindow.content}
                      isFocused={currentWindow.isFocused}
                      closeHandler={this.closeWindowHandler}
                      topValue={(7 * (index + 1)) + "%"}
                      leftValue={(7 * (index + 1)) + "%"}
                      setWindowFocus={this.setWindowFocus}
                    />
                  );
              default:
                return null;
            }
          })
        }

        {showStartMenu ? (
          <StartMenu
            toggleStartMenu={this.toggleStartMenu}
            userIcon={USER_ICON}
            userName={USER_NAME}
            openUser={this.openUser}
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
              <div style={{display: "inline-flex"}}>
                {showStartMenu ? (
                  <Button active onClick={() => this.toggleStartMenu()}>
                    <Icon name="logo" /> Start
                  </Button>
                ) : (
                  <Button onClick={() => this.toggleStartMenu()}>
                    <Icon name="logo" /> Start
                  </Button>
                )}
                <Divider vertical size="md" style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}/>
                {
                  Object.keys(windows).map((key) => {
                    let window = windows[key];
                    if (window.isFocused) {
                      return (
                        <Button 
                          active
                          key={key} 
                          style={{width: "8em"}}
                          onClick={() => {
                            this.updatedSelectedWindows(key, windows);
                            this.toggleStartMenu(false)
                          }}
                        >
                          <Icon 
                            name={window.icon} 
                            style={{
                              width: "20%",
                              marginRight: "5px"
                            }}
                          />
                          {key}
                        </Button>
                      );
                    } else { 
                      return (
                        <Button 
                          key={key} 
                          style={{width: "8em"}}
                          onClick={() => {
                            this.updatedSelectedWindows(key, windows);
                            this.toggleStartMenu(false)
                          }}
                        >
                          <Icon 
                            name={window.icon} 
                            style={{
                              width: "20%",
                              marginRight: "5px"
                            }}
                          />
                          {key}
                        </Button>
                      );
                    }
                  })
                }
              </div>
              <Tooltip text={curTime} delay={100}>
                <Avatar square style={{width: 'auto', padding: "10px"}}>{curTime}</Avatar>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
