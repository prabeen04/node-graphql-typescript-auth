import * as nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';

export function sendEmail(mailOption: MailOptions, cb: any): void {
    console.log(mailOption)
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    transport.sendMail(mailOption, cb)
}
