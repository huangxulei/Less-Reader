<script setup>
import WinTrafficLightBtn from '../components/WinTrafficLightBtn.vue';
import EventBus from '../../common/EventBus';
import { useUseCustomTrafficLight } from '../../common/Utils';

//是否使用自定义交通灯控件
const useCustomTrafficLight = useUseCustomTrafficLight()


</script>

<template>
    <div id="main-left" :class="{ mousewheelViewpoint: isUserMouseWheel }">
        <div class="header">
            <WinTrafficLightBtn v-show="useCustomTrafficLight"></WinTrafficLightBtn>
        </div>
    </div>
</template>

<style>
#main-left {
    width: 211px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*box-shadow: 0px 0px 3px var(--border-left-nav-border-color);*/
    border-right: 1px solid var(--border-left-nav-border-color);
    background: var(--content-left-nav-bg-color);
}

#main-left ::-webkit-scrollbar-thumb {
    background: transparent;
    border: 1px solid transparent;
}

.mousewheelViewpoint ::-webkit-scrollbar-thumb {
    background: var(--others-scrollbar-color) !important;
    border: 1px solid var(--others-scrollbar-color) !important;
}

#main-left .secondary-text {
    /*font-size: 13px;*/
    font-size: var(--content-text-tip-text-size);
    text-align: left;
    color: var(--content-secondary-text-color);
    padding-left: 22%;
    padding-left: 19.5%;
    margin-bottom: 10px;
    font-weight: 520;
}

#main-left .header,
#main-left .center,
#main-left .bottom {
    width: 100%;
}

#main-left .header {
    -webkit-app-region: drag;
    height: 72px;
    margin-bottom: 8px;
    display: flex;
}

#main-left .header .win-traffic-light-btn {
    margin-top: 17px;
    margin-left: 20px;
}

#main-left .header .logo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 16%;
    top: 60px;
    display: none;
}

#main-left .center {
    flex: 1;
    padding-bottom: 36px;
    overflow: scroll;
}

#explore-mode {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* color: var(--content-subtitle-text-color); */
}

#explore-mode svg,
#custom-playlist-list svg {
    fill: var(--content-subtitle-text-color);
    margin-right: 6px;
}

#explore-mode {
    position: relative;
}

#explore-mode .mode-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    padding: 3px 6px;
    font-size: var(--content-text-module-title2-size);
    font-weight: bold;
    color: var(--content-subtitle-text-color);
    margin-right: 23%;
}

#explore-mode .mode-item:hover span {
    background: var(--content-text-highlight-color);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

#explore-mode .mode-item:hover svg {
    fill: var(--content-highlight-color);
}

#explore-mode .exit-btn {
    position: absolute;
    top: 8px;
    right: 13px;
}

#explore-mode .exit-btn:hover svg {
    fill: var(--content-highlight-color);
    cursor: pointer;
}

#explore-mode .excluded-mode-item {
    cursor: default !important;
}

#explore-mode .excluded-mode-item:hover span {
    color: var(--content-subtitle-text-color) !important;
}

#explore-mode .excluded-mode-item:hover svg {
    fill: var(--content-subtitle-text-color) !important;
}

#custom-playlist-list,
#favorite-playlist-list,
#follow-artist-list {
    margin-top: 36px;
    position: relative;
}

#main-left .center .add-custom-btn,
#main-left .center .collapse-btn,
#main-left .center .expand-btn {
    fill: var(--content-subtitle-text-color);
    cursor: pointer;
    position: absolute;
    /* right: 15px; */
    right: 19px;
    top: 4px;
}

#main-left .center .collapse-btn,
#main-left .center .expand-btn {
    /* right: 22px; */
    right: 26px;
}

#main-left .center .add-custom-btn:hover {
    fill: var(--content-highlight-color);
}

#main-left ul {
    list-style: none;
    text-align: left;
    padding-left: 13%;
    padding-left: 10%;
    line-height: var(--content-left-nav-line-height);
}

#main-left li {
    text-decoration: none;
    width: 60%;
    width: 128px;
    margin-bottom: var(--content-left-nav-line-spacing);
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
    border-radius: 5px;
    text-align: left;
    overflow: hidden;
    word-wrap: break-all;
    white-space: pre-wrap;
    line-break: anywhere;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

#main-left li:hover {
    background: var(--content-list-item-hover-bg-color);
}

#custom-playlist-list li,
#favorite-playlist-list li {
    font-size: var(--content-text-subtitle-size);
}

#favorite-playlist-list li {
    padding-left: 15px;
    padding-right: 15px;
    /* width: 127px; */
    width: 138px;
}

#main-left .active {
    background: var(--button-icon-text-btn-bg-color) !important;
    color: var(--button-icon-text-btn-icon-color);
}

#main-left .bottom {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 23px;
}

#app-logo {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10rem 0 10rem 10rem;
    border: 0px solid;
    font-weight: bold;
    background: var(--app-logo-bg-color);
}

#app-logo span {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 13.5px;
    justify-content: center;
    border-radius: 10rem;
    background: var(--app-logo-inner-bg-color);
    color: var(--app-logo-inner-text-color);
}

#app-name {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    background: var(--app-logo-app-name-text-color);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>