class TokenService {
    private accessToken = ''; // JWT 인증 토큰

    setAccessToken(accessToken: string) {
        this.accessToken = accessToken;
        localStorage.setItem('accessToken', accessToken);
    }

    getAccessToken(): string | null {
        return this.accessToken || localStorage.getItem('accessToken');
    }
}

export default new TokenService();
