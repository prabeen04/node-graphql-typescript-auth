
export const registerResolver: any = {
    Mutation: {
        register: async (_: any, args: any, ctx, info) => {
            console.log(args)
            return false
        }
    }
}