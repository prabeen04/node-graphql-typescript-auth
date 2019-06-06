export const resolvers: any = {
    Mutation: {
        login: async (_: any, args: any, ctx: any, info: any) => {
            console.log('login resolver')
        }
    }
}