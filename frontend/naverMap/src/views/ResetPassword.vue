<template>
    <div class="steps-container">
        <el-steps :active="active" finish-status="success">
            <el-step title="1단계" description="인증 코드 발급 요청" />
            <el-step title="2단계" description="인증 코드 검증" />
            <el-step title="3단계" description="비밀번호 변경 " />
        </el-steps>
    </div>
    <router-view></router-view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
    name: 'ResetPassword',
    setup() {
        const active = computed(() => store.getters.getActiveStep);

        return {
            active,
        };
        // console.log('ResetPassword');
    },
});
</script>
<style lang="scss" scoped>
.steps-container {
    padding: 8px;
}
</style>
