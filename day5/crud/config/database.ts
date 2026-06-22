import env from '#start/env'
import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  // Default connection — MySQL use karenge
  connection: 'mysql',

  connections: {
    // MySQL connection config
    mysql: {
      // MySQL2 driver
      client: 'mysql2',

      connection: {
        host: env.get('MYSQL_HOST'),

        port: Number(env.get('MYSQL_PORT')),

        user: env.get('MYSQL_USER'),

        password: env.get('MYSQL_PASSWORD'),

        database: String(env.get('MYSQL_DB_NAME')),
      },

      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      // Development
      debug: app.inDev,
    },
  },
})

export default dbConfig
