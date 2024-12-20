import { defineStore } from "pinia";
import EventBus from '../../common/EventBus';
import { useIpcRenderer } from "../../common/Utils";

const ipcRenderer = useIpcRenderer()
let toastTimer = null

export const useAppCommonStore = defineStore('appCommon', {
    state: () => ({}),

    getters: {
    },
    actions: {
        quit() {
            if (ipcRenderer) ipcRenderer.send('app-quit')
        },
        minimize(isToTray) {
            if (ipcRenderer) ipcRenderer.send('app-min', isToTray)
        },
        maximize() {
            if (ipcRenderer) ipcRenderer.send('app-max')
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                //key: 'appCommon',
                storage: localStorage,
                paths: []
            },
        ],
    },
})