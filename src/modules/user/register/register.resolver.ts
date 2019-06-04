import { User } from "../../../entity/User.entity";

export const resolvers: any = {
    Mutation: {
        register: async (_: any, args: any, ctx, info) => {
            try {
                const user = User.create(args)
                const newUser = await user.save()
                console.log(newUser)
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
}