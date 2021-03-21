import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_AUTH_USER: process.env.MAIL_AUTH_USER,
    MAIL_AUTH_PASS: process.env.MAIL_AUTH_PASS
}