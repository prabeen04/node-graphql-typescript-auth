import { formatYupError } from './../../../utils/formatYupErrors';
import { User } from "../../../entity/User.entity";
import * as yup from 'yup'
import * as jwt from 'jsonwebtoken'
import { sendEmail } from '../../../utils/SendEmail';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
const registerSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, 'Email not long enough')
        .max(255)
        .email('Must provide a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password should have min 6 char long')
        .max(255)
        .required('Password is required')
})
export const resolvers: any = {
    Mutation: {
        register: async (_: any, args: GQL.IRegisterOnMutationArguments, ctx: any, info: any) => {
            try {
                await registerSchema.validate(args, { abortEarly: false })
            } catch (err) {
                return formatYupError(err)
            }
            const userAlreadyExists = await User.findOne({
                where: { email: args.email },
                select: ['id']
            })
            if (userAlreadyExists) return [{
                path: 'email',
                message: 'Email aleady exists'
            }]
            const user = User.create(args)
            await user.save()

            //generate token 
            const { id, email } = user
            const token = jwt.sign({ id, email }, process.env.CLIENT_SECRET)
            const template = `
                <p>Click on the link below to authenticate your email</p>
                <a target='_blank' href='http://localhost:3000/emailValidation/${token}'>
                http://localhost:3000/emailValidation/${token}</a>
                `
            const mailOption: MailOptions = {
                to: args.email,
                from: 'prabeen.strange@gmail.com',
                subject: 'Confirm your mail',
                html: template
            }
            sendEmail(mailOption, (err, res) => {
                console.log(err, res)
            })
            return null
        }
    }
}