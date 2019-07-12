import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Button, AppBar, Toolbar, Avatar } from "react95";

import StartMenu from './components/StartMenu';
import DesktopIcons from './components/DesktopIcons';
import { Icon } from '@react95/core';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

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

  render() {
    const { showStartMenu, openWindows } = this.state;
    return (
      <div>
        <ResetStyles />
        <DesktopIcons 
          openWindowHandler={this.openWindowHandler}
          closeWindowHandler={this.closeWindowHandler}
        />
        
        <ul>
          {
            Object.keys(openWindows).map((key, index) => {
              return <li key={key}>{openWindows[key]}</li>
            })
          }
        </ul>
        
        {showStartMenu ? <StartMenu /> : null}
        
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
