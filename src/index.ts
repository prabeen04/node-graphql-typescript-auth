import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from 'graphql-yoga'
import * as dotenv from 'dotenv';
import { resolvers } from './modules/user/userResolver';
dotenv.config()

async function startServer() {
    try {
        const connection = await createConnection()
        const server = new GraphQLServer({ typeDefs, resolvers })
        server.start(() => console.log('Server is running on localhost:4000'))
    } catch (error) {
        console.log('Error occoured ', error)
    }
}
startServer();
