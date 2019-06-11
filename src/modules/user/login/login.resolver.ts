import { formatYupError } from './../../../utils/formatYupErrors';
import { User } from './../../../entity/User.entity';
import * as bcrypt from 'bcryptjs';
import * as yup from 'yup';

const errorResponse = [
    {
        path: "email",
        message: 'invalid credentials'
    }
];
const loginSchema = yup.object().shape({
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
        login: async (_: any, args: any, ctx: any, info: any) => {
            try {
                await loginSchema.validate(args, { abortEarly: false })
            } catch (err) {
                return formatYupError(err)
            }

            const { email, password } = args;
            const user = await User.findOne({ where: { email } })
            //if user not exist
            if (!user) return errorResponse;

            //if email not confirmed
            if (!user.confirmed) {
                return [
                    {
                        path: "email",
                        message: 'confirm your email'
                    }
                ];
            }

            //check for password validation
            const valid = await bcrypt.compare(password, user.password)
            if (!valid) {
                return [
                    {
                        path: "email",
                        message: 'Incorrect password'
                    }
                ]
            }
            //login successfull
            return null
        }
    }
}