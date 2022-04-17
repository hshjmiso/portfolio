<template>
    <div class="app-viewport__contents">
        <main class="app-viewport__contents-view">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'content-frame',
});
</script>
<style lang="scss">
.app-viewport__contents {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .app-viewport__contents-view {
        flex: 1;
        position: relative;
        overflow-y: auto;
    }
}
</style>
