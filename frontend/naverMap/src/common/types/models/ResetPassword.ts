export type ResetPassword = {
    email: string;
    confirmToken: string; // 인증 코드 검증 토큰
    newPassword: string; // 새로운 비밀번호
    newPasswordConfirm: string; // 새로운 비밀번호 확인
};
