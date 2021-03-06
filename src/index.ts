import { genSchema } from './schema';
import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga'
import * as dotenv from 'dotenv';
import { createTypeormConn } from './utils/createTypeormConn';
dotenv.config()

async function startServer() {
    try {
        await createTypeormConn()
        const server = new GraphQLServer({
            schema: genSchema() as any,
        })
        server.start({ endpoint: '/graphql', playground: '/graphql' }, () => console.log('Server is running on localhost:4000'))
    } catch (error) {
        console.log('Error occoured ', error)
    }
}
startServer();
