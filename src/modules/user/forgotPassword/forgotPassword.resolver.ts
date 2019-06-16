import { sendEmail } from "../../../utils/SendEmail";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import * as jwt from 'jsonwebtoken';

export const resolvers: any = {
    Mutation: {
        forgotPassword: async (_: any, args: GQL.IForgotPasswordOnMutationArguments, ctx: any, info: any) => {
            const { email } = args;
            const token = jwt.sign({ email }, process.env.CLIENT_SECRET)
            console.log(token)
            const template = `
                <p>Click on the link below to reset your password</p>
                <a target='_blank' href='http://localhost:3000/forgotPassword/${token}'>
                http://localhost:3000/forgotPassword/${token}</a>
                `
            const mailOption: MailOptions = {
                to: args.email,
                from: 'prabeen.strange@gmail.com',
                subject: 'Reset password',
                html: template
            }
            sendEmail(mailOption, (err, res) => {
                console.log(err, res)
            })
            return true
        }
    }
}