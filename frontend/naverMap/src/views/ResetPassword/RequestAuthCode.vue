<template>
    <div class="card card-container">
        <label for="description">Email을 입력해주세요.</label>
        <el-input v-model="email" placeholder="email@address.com" validate-event=""></el-input>
        <el-button type="primary" @click="clickedNext">다음</el-button>
        <label for="message" class="warning-message">{{ message }}</label>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getResetPasswordByEmail } from '@/common/service/user.service';
import { ActionTypes } from '@/store/actions';
import { ElLoading } from 'element-plus';
import router from '@/router';
import store from '@/store';

export default defineComponent({
    name: 'RequestAuthCode',
    setup() {
        store.dispatch(ActionTypes.ActiveStep, 0);

        const getUserInfo = store.getters.getUserInfo;
        const email = ref(getUserInfo.email);
        const message = ref('');

        const clickedNext = () => {
            if (!email.value) {
                message.value = 'Email을 입력해주세요.';
                return;
            }

            message.value = '';

            const loadingInstance = ElLoading.service({ fullscreen: true });
            const tempEmail = 'ably@dummy.com';

            getResetPasswordByEmail(tempEmail)
                .then((res) => {
                    const { status, data } = res;
                    if (status === 200) {
                        // console.log(data);
                        store.dispatch(ActionTypes.RequestEmail, tempEmail);
                        store.dispatch(ActionTypes.AuthCodeToken, data);
                        // store.dispatch(ActionTypes.IncrementActive);
                        router.push('/verifyAuthCode');
                    } else {
                    }
                })
                .then(() => {
                    loadingInstance.close();
                });
        };

        return {
            email,
            message,
            clickedNext,
        };
    },
});
</script>
<style lang="scss" scoped>
.card-container {
    gap: 16px;
}
</style>
