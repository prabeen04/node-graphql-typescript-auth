import { User } from "../../../entity/User.entity";

export const resolvers: any = {
    Mutation: {
        register: async (_: any, args: GQL.IRegisterOnMutationArguments, ctx: any, info: any) => {
            try {
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