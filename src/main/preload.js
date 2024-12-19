const { contextBridge, ipcRenderer } = require('electron')
const { isMacOS, isWinOS, useCustomTrafficLight, isDevEnv } = require('./env')

window.electronAPI = {
    ipcRenderer: {
        ...ipcRenderer,
        on: ipcRenderer.on.bind(ipcRenderer)
    },
    isMacOS,
    isWinOS,
    isDevEnv,
    useCustomTrafficLight
}