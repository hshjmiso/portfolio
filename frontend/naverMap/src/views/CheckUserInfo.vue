<template>
    <div class="card card-container">
        <img :src="userInfo.profileImage" class="profile-img-card" />
        <div class="label-container">
            <label for="Name">Name</label>
            <div class="user-info">{{ userInfo.name }}</div>
        </div>
        <div class="label-container">
            <label for="email">Email</label>
            <div class="user-info">{{ userInfo.email }}</div>
        </div>
        <div class="button-wrapper">
            <el-button type="primary" @click="clickedLogout">로그아웃</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { ElLoading } from 'element-plus';
import { defineComponent, reactive } from 'vue';
import { postLogout } from '@/common/service/auth.service';
import { getUser } from '@/common/service/user.service';
import { UserInfo } from '@/common/types';
import { ActionTypes } from '@/store/actions';
import router from '@/router';
import store from '@/store';

export default defineComponent({
    name: 'checkUserInfo',
    setup() {
        const loadingInstance = ElLoading.service({ fullscreen: true });
        const userInfo = reactive<UserInfo>({
            email: '',
            lastConnectedAt: 0,
            name: '',
            // password: '',
            profileImage: '//ssl.gstatic.com/accounts/ui/avatar_2x.png',
        });

        getUser()
            .then((res) => {
                const { status, data } = res;
                if (status === 200) {
                    userInfo.email = data.email;
                    userInfo.name = data.name;
                    userInfo.profileImage = data.profileImage;

                    store.dispatch(ActionTypes.UserInfo, data);
                } else {
                }
            })
            .then(() => {
                loadingInstance.close();
            });

        const clickedLogout = () => {
            postLogout().then((res) => {
                const { status } = res;
                if (status === 200) {
                    router.push('/login');
                } else {
                }
            });
        };

        return {
            userInfo,
            clickedLogout,
        };
    },
});
</script>
<style lang="scss" scoped>
.profile-img-card {
    width: 160px;
    height: 160px;
    border-radius: 50%;
}

.label-container {
    width: 240px;
    margin: 8px 0;
    .user-info {
        font-size: 16px;
        font-weight: bold;
    }
}

.button-wrapper {
    margin-top: 16px;
}
</style>
