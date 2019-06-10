import { formatYupError } from './../../../utils/formatYupErrors';
import { User } from "../../../entity/User.entity";
import * as yup from 'yup'
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
                console.log(err)
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
            return null
        }
    }
}