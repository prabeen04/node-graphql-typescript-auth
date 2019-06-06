import { User } from './../../../entity/User.entity';

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
            if (!user) return errorResponse;
            if (!user.confirmed) {
                return [
                    {
                        path: "email",
                        message: 'confirm your email'
                    }
                ];
            }
        }
    }
}