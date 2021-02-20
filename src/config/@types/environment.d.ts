declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: int;
            NODE_ENV: 'development' | 'production';
        }
    }
}