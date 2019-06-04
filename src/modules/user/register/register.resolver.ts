import { User } from "../../../entity/User.entity";

export const resolvers: any = {
    Mutation: {
        register: async (_: any, args: any, ctx, info) => {
            console.log(args)
            const user = User.create(args)
            const newUser = await user.save()
            console.log(newUser)
            return false
        }
    }
}