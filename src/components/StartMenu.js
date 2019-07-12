import React from 'react';
import { List } from '@react95/core';

function StartMenu() {
  return (
    <div>
      <List style={{
          position: 'absolute',
          bottom: '48px'
        }}>
          <List.Item icon="folder_exe2">
            <List>
              <List.Item icon="folder_exe">Accessories</List.Item>
              <List.Item icon="folder_exe">StartUp</List.Item>
              <List.Item icon="microsoft_exchange">Microsoft Exchange</List.Item>
              <List.Item icon="ms_dos">MS-DOS Prompt</List.Item>
              <List.Item icon="microsoft_network">The Microsoft Network</List.Item>
              <List.Item icon="windows_explorer">Windows Explorer</List.Item>
            </List>
            Programs
          </List.Item>
          <List.Item icon="folder_file">Documents</List.Item>
          <List.Item icon="settings">
            <List>
              <List.Item icon="folder_settings">Control Panel</List.Item>
              <List.Item icon="folder_print">Printers</List.Item>
            </List>
            Settings
          </List.Item>
          <List.Item icon="file_find">Find</List.Item>
          <List.Item icon="help_book">Help</List.Item>
          <List.Item icon="loader_bat">Run...</List.Item>
          <List.Divider />
          <List.Item icon="computer_3">Shut Down...</List.Item>
        </List>
    </div>
  );
}

export default StartMenu;