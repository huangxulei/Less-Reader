<script setup>
import { isWinOS } from '../common/Utils';
import { onMounted, shallowRef, inject, provide, computed } from 'vue';

const currentAppLayout = shallowRef(null)

const setupLayout = (isInit) => {

}
</script>
<template>
    <div id="app-content">
        <keep-alive :max="2">
            <component :is="currentAppLayout" :class="{ 'winos-style': isWinOS() }">
            </component>
        </keep-alive>
        <slot></slot>
    </div>
</template>
<style>
#app-content {
    display: flex;
    flex: 1;
    background-image: var(--app-bg-image);
    background-color: var(--app-bg-color);
    background-position: center;
    background-size: cover;
}
</style>