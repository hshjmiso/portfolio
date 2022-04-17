export type AuthCodeToken = {
    issueToken: string; // 인증 코드 발급 요청 토큰
    remainMillisecond: number; // 인증 코드 확인 남은 시간
};
