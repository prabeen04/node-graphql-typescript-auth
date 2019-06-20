import * as bcrypt from 'bcryptjs'
import { User } from './../../../entity/User.entity';
export const resolvers: any = {
    Mutation: {
        changePassword: async (_: any, args: GQL.IChangePasswordOnMutationArguments, ctx: any, info: any) => {
            console.log(args)
            const { id, oldPassword, newPassword } = args;
            const user = await User.findOne({
                where: { id }
            })
            if (!user) return [{
                path: 'password',
                message: 'user doesn\'t exists'
            }]
            const password = user.password;
            if (password !== oldPassword) return [{
                path: 'password',
                message: 'current password doesn\'t match'
            }];
            const newHashedPassword = await bcrypt.hash(newPassword, 10)
            await User.update({ id }, {
                password: newHashedPassword
            })
            return null
        }
    }
}