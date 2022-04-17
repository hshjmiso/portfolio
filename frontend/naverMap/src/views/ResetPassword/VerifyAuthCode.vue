<template>
    <div class="card card-container">
        <div class="time-label">{{ time }}</div>
        <label for="description">시간 안에 인증코드를 입력해주세요.</label>
        <div class="auth-code-input-wrapper">
            <el-input v-model="authCode" placeholder="000000" validate-event=""></el-input>
        </div>
        <el-button type="primary" @click="clickedNext">다음</el-button>
        <label for="message" class="warning-message">{{ message }}</label>
    </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref, watch } from 'vue';
import { postResetPassword } from '@/common/service/user.service';
import { AuthCodeParams } from '@/common/types';
import router from '@/router';
import store from '@/store';
import { ElMessageBox } from 'element-plus';
import { ActionTypes } from '@/store/actions';

export default defineComponent({
    name: 'VerifyAuthCode',
    setup() {
        store.dispatch(ActionTypes.ActiveStep, 1);

        const getRequestEmail = store.getters.getRequestEmail;
        const getAuthCodeToken = store.getters.getAuthCodeToken;
        const authCode = ref<string>('171009');
        const remainMillisecond = ref<number>(getAuthCodeToken.remainMillisecond);
        const message = ref('');

        if (!getRequestEmail || remainMillisecond.value <= 0) {
            // 새로고침시 인증 코드 발급 요청 페이지로 이동
            router.push('/requestAuthCode');
        }

        const getTime = () => {
            const h = String((remainMillisecond.value / 3600) | 0);
            const m = String(((remainMillisecond.value % 3600) / 60) | 0).padStart(2, '0');
            const s = String(remainMillisecond.value % 60).padStart(2, '0');

            return `${h}:${m}:${s}`;
        };

        const time = ref(getTime());

        const interval = setInterval(() => {
            remainMillisecond.value--;
            time.value = getTime();
        }, 1000);

        watch(remainMillisecond, (val) => {
            if (val <= 0) {
                clearInterval(interval);
                ElMessageBox.alert('인증 시간을 초과했습니다.', '인증 시간 초과', {
                    type: 'warning',
                })
                    .then(() => {
                        router.push('/requestAuthCode');
                    })
                    .catch(() => {
                        router.push('/requestAuthCode');
                    });
            }
        });

        const clickedNext = () => {
            if (!authCode.value) {
                message.value = '인증코드를 입력해주세요.';
                return;
            }

            message.value = '';

            const authCodeParams: AuthCodeParams = {
                email: getRequestEmail,
                authCode: '171009',
                issueToken: getAuthCodeToken.issueToken,
            };

            postResetPassword(authCodeParams).then((res) => {
                const { status, data } = res;
                if (status === 200) {
                    store.dispatch(ActionTypes.ConfirmToken, data?.confirmToken ?? '');
                    // store.dispatch(ActionTypes.IncrementActive);
                    router.push('/changePassword');
                } else {
                }
            });
        };

        onUnmounted(() => clearInterval(interval));

        return {
            authCode,
            time,
            message,
            interval,
            clickedNext,
        };
    },
});
</script>
<style lang="scss" scoped>
.card-container {
    gap: 16px;
    .auth-code-input-wrapper {
        width: 70px;
        text-align: center;
    }
    .time-label {
        font-size: 16px;
        font-weight: bold;
    }
}
</style>
