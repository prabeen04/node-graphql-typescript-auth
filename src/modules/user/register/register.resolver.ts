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
                const errors = await registerSchema.validate(args)
                console.clear()
                console.log(errors)
                const user = User.create(args)
                await user.save()
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
}