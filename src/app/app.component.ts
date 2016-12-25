import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  const electron = require('electron');

const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    globalShortcut.register('CmdOrCtrl+Shift+d', ()=>{
        mainWindow.webContents.togglrDevTools();
    });

    mainWindow.setTitle('ace of base electrified');
    mainWindow.loadURL('http://aceofbase.com/');

    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });

});

app.on('will-quit', ()=>{
    globalShortcut.unregisterAll();
});

app.on('window-all-closed', ()=>{
    app.qiut();
});

}
