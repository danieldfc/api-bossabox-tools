const production = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: 'public',
  entities: [
    'dist/modules/**/infra/typeorm/entities/*.js'
  ],
  migrations: [
    'dist/shared/infra/typeorm/migrations/*.js'
  ],
  migrationsRun: true,
  logging: false,
}

const development = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'tools',
  entities: [
    'src/modules/**/infra/typeorm/entities/*.ts'
  ],
  migrations: [
    'src/shared/infra/typeorm/migrations/*.ts'
  ],
}

const base = {
  production,
  development,
};

module.exports = {
  ...base[process.env.NODE_ENV || 'development'],
  cli: {
    migrationsDir: 'src/shared/infra/typeorm/migrations',
    entitiesDir: 'src/modules/**/infra/typeorm/entities'
  }
}
