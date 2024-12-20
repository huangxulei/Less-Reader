<script setup>
import AppRoute from './AppRoute.vue';

</script>
<template>
    <AppRoute>
        <div>
            AppMain/.........
        </div>
    </AppRoute>
</template>
<style>
html,
body,
#app {
    background: transparent;
    height: 100%;
    font-size: var(--content-text-size);
    color: var(--content-text-color);
    overflow: hidden;
    border-radius: var(--border-macstyle-border-radius);
}

#app {
    display: flex;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>