<template>
    <header-frame />
    <content-frame />
</template>
<script>
import { defineComponent } from 'vue';
import HeaderFrame from '@/components/frame/header-frame.vue';
import ContentFrame from '@/components/frame/content-frame.vue';

export default defineComponent({
    name: 'main-frame',
    components: { HeaderFrame, ContentFrame },
});
</script>
