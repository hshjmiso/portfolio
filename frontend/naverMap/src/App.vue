<template>
    <div id="app">
        <main-frame></main-frame>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MainFrame from '@/components/frame/main-frame.vue';

export default defineComponent({
    components: { MainFrame },
    name: 'App',
    setup() {
        console.log('App vue setup');
    },
});
</script>
<style lang="scss">
html {
    overflow: hidden;
    font-size: 14px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 350px;
    padding: 40px 40px;
    &.card {
        background-color: #f7f7f7;
        padding: 40px 25px 40px;
        margin: 0 auto 25px;
        margin-top: 50px;
        border-radius: 2px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }
}

.warning-message {
    color: orangered;
}
</style>
