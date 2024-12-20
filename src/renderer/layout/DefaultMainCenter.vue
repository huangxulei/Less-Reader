<script setup>


</script>

<template>
    <div id="default-main-center">
        <DefaultMainContent id="default-main-content" :class="{ autopadding: isDefaultClassicLayout }">
        </DefaultMainContent>
    </div>
</template>

<style>
#default-main-center {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background: var(--content-bg-color);
}

#default-main-center,
#default-main-top,
#default-main-content,
#default-main-bottom {
    z-index: 0;
}

#default-main-center .autolayout {
    top: 60px;
}

/* TODO */
#default-main-center .autopadding .playlist-square-view,
#default-main-center .autopadding .artist-square-view,
#default-main-center .autopadding .radio-square-view,
#default-main-center .autopadding #local-music-view,
#default-main-center .autopadding #themes-view .title,
#default-main-center .autopadding #setting-view .title,
#default-main-center .autopadding #home-page-view .title,
#default-main-center .autopadding #modules-setting-view .title,
#default-main-center .autopadding #freefm-view,
#default-main-center .autopadding #search-view,
#default-main-center .autopadding #user-profile-view,
#default-main-center .autopadding #batch-action-view,
#default-main-center .autopadding #user-info-edit-view,
#default-main-center .autopadding #custom-playlist-edit-view,
#default-main-center .autopadding #local-playlist-edit-view,
#default-main-center .autopadding #freefm-edit-view,
#default-main-center .autopadding #data-backup-view,
#default-main-center .autopadding #data-restore-view {
    padding-top: 5px;
}

#default-main-center .autopadding #playlist-detail-view,
#default-main-center .autopadding #artist-detail-view,
#default-main-center .autopadding #album-detail-view,
#default-main-center .autopadding #custom-playlist-detail-view,
#default-main-center .autopadding #local-playlist-detail-view {
    padding-top: 13px;
}
</style>