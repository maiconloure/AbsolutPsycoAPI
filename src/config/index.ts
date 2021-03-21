import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT
export default {
    PORT: process.env.PORT,
    HOST: process.env.HOST
}