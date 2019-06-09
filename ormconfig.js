module.exports = [
    {
        "name": "default"
        "type": "postgres",
        "host": process.env.POSTGRES_HOST,
        "port": 5432,
        "username": process.env.POSTGRES_USERNAME,
        "password": process.env.POSTGRES_PASSWORD,
        "database": process.env.POSTGRES_DATABASE,
        "synchronize": true,
        "logging": false,
        "entities": [
            "src/entity/**/*.ts"
        ],
        "migrations": [
            "src/migration/**/*.ts"
        ],
        "subscribers": [
            "src/subscriber/**/*.ts"
        ],
        "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
        }
    },
    {
        "name": "test"
        "type": "postgres",
        "host": process.env.POSTGRES_HOST_TEST,
        "port": 5432,
        "username": process.env.POSTGRES_USERNAME_TEST,
        "password": process.env.POSTGRES_PASSWORD_TEST,
        "database": process.env.POSTGRES_DATABASE_TEST,
        "synchronize": true,
        "logging": false,
        "dropSchema": true,
        "entities": [
            "src/entity/**/*.ts"
        ],
        "migrations": [
            "src/migration/**/*.ts"
        ],
        "subscribers": [
            "src/subscriber/**/*.ts"
        ],
        "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
        }
    },

]