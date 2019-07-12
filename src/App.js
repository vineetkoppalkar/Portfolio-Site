import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, Button, AppBar, Toolbar, Avatar } from "react95";

import StartMenu from './components/StartMenu';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curTime: this.formatAMPM(new Date()),
      showStartMenu: false
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

  render() {
    const { showStartMenu } = this.state;
    return (
      <div>
        <ResetStyles />
        {showStartMenu ? <StartMenu /> : null}
        <ThemeProvider theme={themes.default}>
          <AppBar style={{
            bottom: 0,
            top: 'auto',
          }}>
            <Toolbar style={{ justifyContent: 'space-between', paddingRight: '1rem' }}>
              {showStartMenu ? (
                <Button active onClick={() => this.toggleStartMenu()}>
                  <span role="img" aria-label="laptop">💻</span> Start
                </Button>
              ) : (
                <Button onClick={() => this.toggleStartMenu()}>
                  <span role="img" aria-label="laptop">💻</span> Start
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
