import { MailAdapter, SendMailData } from "../mail_adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0c137ae01ebc57",
    pass: "52390f6479251e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from:'Equipe Feedget <falacomnoisae@feedget.com>',
            to: 'Leonardo Esperança <leonardo.oliveira.esperanca@gmail.com>',
            subject: subject,
            html: body
        })
    };
}