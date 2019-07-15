import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Button, AppBar, Toolbar, Avatar, Divider } from "react95";

import StartMenu from './components/StartMenu';
import Window from './components/Window';
import DesktopIcons from './components/DesktopIcons';
import { Tooltip, Icon } from '@react95/core';

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
      windows: {}
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

  openWindowHandler = (name, icon, content, topValue, leftValue) => {
    let { windows } = this.state;
    if (!(name in windows)) {
      windows[name] = {
        icon,
        title: name,
        content,
        top: topValue,
        left: leftValue, 
        isFocused: true
      };

      let updatedWindows = this.updatedSelectedWindows(name, windows);
      this.setState({windows: updatedWindows});
      console.log("Opened " + name);
    } else {
      console.log("Cannot open " + name + " because it is already open");
    }
  }

  // openWindowHandler = (name, icon, windowComponent) => {
  //   let { windows } = this.state;
  //   if (!(name in windows)) {
  //     let updatedwindows = windows;

  //     Object.keys(updatedwindows).forEach((key) => {
  //       updatedwindows[key].window.props.isSelected = false;
  //     });

  //     let windowData = {};
  //     windowData.windowComponent = windowComponent;
  //     windowData.icon = icon;
  //     windowData.isFocused = true;

  //     updatedwindows[name] = windowData;

  //     this.setState({
  //       windows: updatedwindows
  //     });
  //     console.log("Opened " + name);
  //   } else {
  //     console.log("Cannot open " + name + " because it is already open");
  //   }
  // }

  closeWindowHandler = (name, window) => {
    let { windows } = this.state;
    if (name in windows) {
      let updatedwindows = windows;
      delete updatedwindows[name]; 
      this.setState({
        windows: updatedwindows
      });
      console.log("Closed " + name);
    } else {
      console.log("Cannot close " + name + " because it is not open");
    }
  }

  openDocuments = () => {
    this.openWindowHandler(DOCUMENTS_NAME, DOCUMENTS_ICON, DOCUMENTS_NAME, "50px", "50px");
    // this.openWindowHandler(DOCUMENTS_NAME, DOCUMENTS_ICON,
    //   <Window 
    //     icon={DOCUMENTS_ICON}
    //     title={DOCUMENTS_NAME}
    //     content={DOCUMENTS_NAME}
    //     closeHandler={this.closeWindowHandler}
    //     isSelected={true}
    //     topValue="50px"
    //     leftValue="50px"
    //   />);
  };

  openComputer = () => {
    this.openWindowHandler(COMPUTER_NAME, COMPUTER_ICON, COMPUTER_NAME, "50px", "50px");
    
    // this.openWindowHandler(COMPUTER_NAME, COMPUTER_ICON,
    //   <Window
    //     icon={COMPUTER_ICON}
    //     title={COMPUTER_NAME}
    //     content={COMPUTER_NAME}
    //     closeHandler={this.closeWindowHandler}
    //     isSelected={true}
    //     topValue="100px"
    //     leftValue="100px"
    //   />
    // );
  }

  openProjects = () => {
    this.openWindowHandler(PROJECTS_NAME, PROJECTS_ICON, PROJECTS_NAME, "50px", "50px");

    // this.openWindowHandler(PROJECTS_NAME, PROJECTS_ICON,
    //   <Window
    //     icon={PROJECTS_ICON}
    //     title={PROJECTS_NAME}
    //     content={PROJECTS_NAME}
    //     closeHandler={this.closeWindowHandler}
    //     isSelected={true}
    //     topValue="150px"
    //     leftValue="150px"
    //   />
    // );
  }

  render() {
    const { showStartMenu, windows } = this.state;
    // console.table(windows);
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
        
        {
          Object.keys(windows).map((key) => {
            // return <li key={key}>{windows[key].windowComponent}</li>;
            let { windows } = this.state;
            let currentWindow = windows[key];
            return(
              <Window
                key={key}
                icon={currentWindow.icon}
                title={currentWindow.title}
                content={currentWindow.content}
                isFocused={currentWindow.isFocused}
                closeHandler={this.closeWindowHandler}
                top={currentWindow.top}
                left={currentWindow.left}
              />
            );
          })
        }

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
                          key={window} 
                          style={{width: "8em"}}
                          onClick={() => this.updatedSelectedWindows(key, windows)}
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
                          key={window} 
                          style={{width: "8em"}}
                          onClick={() => this.updatedSelectedWindows(key, windows)}
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
              <Tooltip text={this.state.curTime} delay={100}>
                <Avatar square style={{width: 'auto', padding: "10px"}}>{this.state.curTime}</Avatar>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
