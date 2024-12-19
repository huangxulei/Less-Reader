const { app, BrowserWindow, ipcMain, dialog } = require('electron/main')
const { isMacOS, isWinOS, useCustomTrafficLight, isDevEnv,
    USER_AGENTS, AUDIO_EXTS, IMAGE_EXTS, APP_ICON,
    AUDIO_PLAYLIST_EXTS, BACKUP_FILE_EXTS
} = require('./env')
const path = require('node:path')

const DEFAULT_LAYOUT = 'default', SIMPLE_LAYOUT = 'simple'
const appLayoutConfig = {
    'default': {
        appWidth: 1080,
        appHeight: 720
    },
    'simple': {
        appWidth: 500,
        appHeight: 588
    }
}

let mainWin = null, appLayout = DEFAULT_LAYOUT

/* 自定义函数 */
const startup = () => {
    init()
}

const init = () => {
    app.whenReady().then(async () => {
        mainWin = createMainWindow()
    })
    app.on('activate', (event) => {
        if (BrowserWindow.getAllWindows().length === 0 || mainWin.isDestroyed()) {
            mainWin = createMainWindow()
        }
    })

    app.on('window-all-closed', (event) => {
        if (!isDevEnv || !isMacOS) app.quit()
    })
}

//创建浏览窗口
const createMainWindow = () => {
    const { appWidth: width, appHeight: height } = appLayoutConfig[appLayout]
    const mainWindow = new BrowserWindow({
        width,
        height,
        minWidth: width,
        minHeight: height,
        title: '越读',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            //nodeIntegrationInWorker: true,
            contextIsolation: false, //Electron太坑，不得不关闭，毕竟没找到什么好的方式
            webSecurity: false  //TODO 有风险，暂时保留此方案，留待后期调整
        }
    })
    if (isDevEnv) {
        mainWindow.loadURL("http://localhost:5173/")
        //打开DevTools
        openDevTools(mainWindow)
    } else {
        mainWindow.loadFile('dist/index.html')
    }

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    return mainWindow
}

const openDevTools = (win) => {
    if (win && win.webContents) win.webContents.openDevTools()
}

//启动应用
startup()