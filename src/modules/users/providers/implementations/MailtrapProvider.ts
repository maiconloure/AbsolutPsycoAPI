import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import env from '../../../../config/index'

export default class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: env.MAIL_HOST,
            port: env.MAIL_PORT,
            auth: {
                user: env.MAIL_AUTH_USER,
                pass: env.MAIL_AUTH_PASS
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}