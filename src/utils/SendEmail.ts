import * as nodemailer from 'nodemailer';

export function sendEmail(mailOption, cb) {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        }
    });

    transport.sendMail(mailOption, cb)
}
