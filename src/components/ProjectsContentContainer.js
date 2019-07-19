import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { projects } from '../projectData';

import { reset, themes, Table, TableBody, TableHead, TableRow, TableHeadCell, TableDataCell } from "react95";

import webIcon from '../assets/images/web.png';
import androidIcon from '../assets/images/android.png';
import desktopIcon from '../assets/images/mouse.png';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

const getIconFromType = (type) => {
  switch(type) {
    case "web":
      return webIcon;
    case "android":
      return androidIcon;
    case "desktop":
      return desktopIcon;
    default:
      return '';
  }
}

const onClickUrl = (url) => {
  window.ga('send', {
    hitType: 'event',
    eventCategory: "Clicked link",
    eventAction: url,
  });
  
  window.open(url);
};

class ProjectsContentContainer extends Component {
  render() {
    return (
      <div style={{width: "300px"}}>
        <ResetStyles />
        <ThemeProvider theme={themes.default}>
          <Table>
            <TableHead>
              <TableRow 
                head
                style={{ 
                  height: 0, 
                  lineHeight: "25px"
                }}
              >
                <TableHeadCell>Type</TableHeadCell>
                <TableHeadCell>Title</TableHeadCell>
                <TableHeadCell>Langauge</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                projects.map((project) => {
                  return (
                    <TableRow 
                      key={project.name}
                      style={{ textAlign: 'center' }}
                      onClick={() => onClickUrl(project.url)}
                    >
                      <TableDataCell>
                      <img 
                        src={getIconFromType(project.type)} 
                        alt={`Github - ${project.name}`}
                        style={{
                          width: "25px",
                          verticalAlign: "middle"
                        }}
                      />
                      </TableDataCell>
                      <TableDataCell>{project.name}</TableDataCell>
                      <TableDataCell>{project.language}</TableDataCell>
                    </TableRow>
                  );
                })
              }
            </TableBody>
          </Table>
        </ThemeProvider>
      </div>
    );
  }
}

export default ProjectsContentContainer;