import { knex } from 'knex';
import { Model } from 'objection';

// initialize knex
export const db = knex({
  client: 'mysql',
  connection: {
    host: 'mysql-85164-0.cloudclusters.net',
    port: 10744,
    user: 'admin',
    password: 'y1Nip8sq',
    database: process.env.DATABASE,
  },
  migrations: {
    tableName: 'migrations',
  },
});

Model.knex(db);

export function connectDb(): void {
  db.raw('SELECT VERSION()');
  console.log('database connected successfully');
}

declare module 'knex/types/tables' {
  interface User {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
}
