<template>
    <div class="card card-container">
        <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card" />
        <div class="input-container">
            <label for="email">Email</label>
            <el-input v-model="email" placeholder="email@address.com" validate-event=""></el-input>
        </div>
        <div class="input-container">
            <label for="password">Password</label>
            <el-input v-model="password" placeholder="비밀번호를 입력해주세요." type="password"></el-input>
        </div>
        <div class="button-container">
            <el-button type="primary" @click="clickedLogin">로그인</el-button>
            <el-button type="primary" @click="clickedChangePW">비밀번호 재설정</el-button>
        </div>
        <label for="message" class="warning-message">{{ message }}</label>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { postLogin } from '@/common/service/auth.service';
import { LoginInfo } from '@/common/types';
import router from '@/router';
import TokenService from '@/common/service/token.service';
import { ElMessageBox } from 'element-plus';

export default defineComponent({
    name: 'LoginPage',
    setup() {
        const email = ref('');
        const password = ref('');
        const message = ref('');

        const failLogin = (errorMsg?: string) => {
            const msg = errorMsg || '일시적인 오류로 로그인을 할 수 없습니다. 잠시 후 다시 이용해 주세요.';

            ElMessageBox.alert(msg, '로그인 실패', {
                type: 'warning',
            });
        };

        const clickedLogin = () => {
            if (!email.value) {
                message.value = 'Email을 입력해주세요.';
                return;
            }
            if (!password.value) {
                message.value = 'Password을 입력해주세요.';
                return;
            }

            message.value = '';

            const loginInfo: LoginInfo = {
                // email: email.value,
                email: 'ably@dummy.com',
                // password: password.value,
                password: '!abc321#$',
            };

            postLogin(loginInfo)
                .then((res) => {
                    const { status, data } = res;
                    if (status === 200) {
                        TokenService.setAccessToken(data.accessToken);
                        router.push('/checkUserInfo');
                    } else {
                        failLogin(data?.error?.message || '');
                    }
                })
                .catch((e) => {
                    failLogin();
                    console.error(e);
                });
        };

        const clickedChangePW = () => {
            router.push('requestAuthCode');
        };

        return {
            email,
            password,
            message,
            clickedLogin,
            clickedChangePW,
        };
    },
});
</script>
<style lang="scss" scoped>
.profile-img-card {
    width: 96px;
    height: 96px;
    border-radius: 50%;
}

.input-container {
    width: 240px;
    margin: 8px 0;
}

.button-container {
    margin: 16px;
}
</style>
