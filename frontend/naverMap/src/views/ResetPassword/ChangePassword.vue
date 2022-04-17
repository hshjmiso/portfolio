<template>
    <div class="card card-container">
        <label for="description">변경하실 비밀번호를 입력해주세요.</label>
        <el-input v-model="newPW" placeholder="새로운 비밀번호를 입력해주세요." type="password" />
        <el-input v-model="confirmNewPw" placeholder="새로운 비밀번호를 확인해주세요." type="password" />
        <el-button type="primary" @click="clickedChangePW">비밀번호 변경</el-button>
        <label for="message" class="warning-message">{{ message }}</label>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { patchResetPassword } from '@/common/service/user.service';
import { ResetPassword } from '@/common/types';
import router from '@/router';
import store from '@/store';
import { ActionTypes } from '@/store/actions';
import { ElMessageBox } from 'element-plus';
import type { Action } from 'element-plus';

export default defineComponent({
    name: 'ChangePassword',
    setup() {
        store.dispatch(ActionTypes.ActiveStep, 2);

        const getRequestEmail = store.getters.getRequestEmail;
        const getConfirmToken = store.getters.getConfirmToken;

        if (!getRequestEmail || !getConfirmToken) {
            // 새로고침시 인증 코드 발급 요청 페이지로 이동
            router.push('/requestAuthCode');
        }

        const newPW = ref('');
        const confirmNewPw = ref('');
        const message = ref('');

        const successChangePW = (msg: string) => {
            ElMessageBox.alert(msg, '비밀번호 변경 성공', {
                type: 'success',
                callback: () => {
                    // console.log(action);
                    router.push('/login');
                },
            });
        };

        const failChangePW = (msg: string) => {
            ElMessageBox.alert(msg, '비밀번호 변경 실패', {
                type: 'error',
            });
        };

        const clickedChangePW = () => {
            if (!newPW.value) {
                message.value = '새로운 비밀번호를 입력해주세요.';
                return;
            }
            if (!confirmNewPw.value) {
                message.value = '새로운 비밀번호를 확인해주세요.';
                return;
            }
            if (newPW.value !== confirmNewPw.value) {
                message.value = '비밀번호가 다릅니다.';
                return;
            }

            message.value = '';

            const resetPassword: ResetPassword = {
                email: getRequestEmail,
                confirmToken: getConfirmToken,
                newPassword: newPW.value,
                newPasswordConfirm: confirmNewPw.value,
            };
            patchResetPassword(resetPassword)
                .then((res) => {
                    const { status } = res;
                    if (status === 200) {
                        store.dispatch(ActionTypes.IncrementActive);
                        successChangePW('비밀번호 변경에 성공했습니다.');
                    }
                })
                .catch((e) => {
                    failChangePW(e?.response?.data?.error?.message || '비밀번호 변경에 실패했습니다.');
                });
        };

        return {
            newPW,
            confirmNewPw,
            message,
            clickedChangePW,
        };
    },
});
</script>
<style lang="scss" scoped>
.card-container {
    gap: 16px;
}
</style>
