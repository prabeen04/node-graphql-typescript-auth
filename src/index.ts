import "reflect-metadata";
import { createConnection } from "typeorm";
import * as dotenv from 'dotenv';
dotenv.config()
async function startServer() {
    try {
        const connection = await createConnection()
        console.log('server started again ...')

    } catch (error) {
        console.log('Error occoured ', error)
    }
}
startServer();
