<template>
    <header class="app-viewport__header">
        <div class="link-container">
            <el-link type="primary" href="/login">로그인 </el-link>
            <el-link type="warning" href="/requestAuthCode">비밀번호 재설정 </el-link>
        </div>
    </header>
</template>
<style lang="scss">
.app-viewport__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    height: 48px;
    background-color: #343a40;

    .link-container {
        display: flex;
        justify-content: space-between;
        width: 160px;
        margin-right: 16px;
    }
}
</style>
