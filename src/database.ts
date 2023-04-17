import { Client } from 'pg';

const client: Client = new Client({
    user: 'Suene Fuzzo',
    host: 'localhost',
    port: 5432,
    password: 'Su*7410,',
    database: 'movies_project'
})

const startDatabase = async (): Promise<void> => {
    await client.connect()
    console.log('Database connected')
}

export { client, startDatabase }