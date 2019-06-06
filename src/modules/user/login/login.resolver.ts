import { User } from './../../../entity/User.entity';
import * as bcrypt from 'bcryptjs';

const errorResponse = [
    {
        path: "email",
        message: 'invalid credentials'
    }
];

export const resolvers: any = {
    Mutation: {
        login: async (_: any, args: any, ctx: any, info: any) => {
            console.log('login resolver')
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