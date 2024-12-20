import { defineStore } from 'pinia';
import EventBus from '../../common/EventBus';
import { useIpcRenderer } from '../../common/Utils';

const ipcRenderer = useIpcRenderer()

export const useSettingStore = defineStore('setting', {
    state: () => ({
        /* 菜单栏、Windows平台为系统托盘 */
        tray: {
            show: false, //是否在菜单栏显示
            showOnMinimized: false, //是否最小化到菜单栏
        },
    }),

    getters: {
    },
    actions: {
        isHideToTrayOnMinimized() {
            return this.tray.showOnMinimized
        },
    },


    persist: {
        enabled: true,
        strategies: [
            {
                //key: 'setting',
                storage: localStorage,
                paths: ['tray']
            },
        ],
    },
})
