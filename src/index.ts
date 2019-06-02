import { genSchema } from './schema';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from 'graphql-yoga'
import * as dotenv from 'dotenv';
dotenv.config()

async function startServer() {
    try {
        const connection = await createConnection()
        const server = new GraphQLServer({
            schema: genSchema() as any
        })
        server.start(() => console.log('Server is running on localhost:4000'))
    } catch (error) {
        console.log('Error occoured ', error)
    }
}
startServer();
