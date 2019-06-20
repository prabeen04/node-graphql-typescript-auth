export const resolvers: any = {
    Mutation: {
        changePassword: async (_: any, args: GQL.IChangePasswordOnMutataionArguments, ctx: any, info: any) => {
            console.log(args)
        }
    }
}