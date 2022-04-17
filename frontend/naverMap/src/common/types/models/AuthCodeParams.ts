export type AuthCodeParams = {
    email: string;
    authCode: string; // 비밀번호 재설정 인증 코드
    issueToken: string; // 인증 코드 발급 요청 토큰
};
