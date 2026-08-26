import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null;

export function getO2switchPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.O2SWITCH_DB_HOST,
      user: process.env.O2SWITCH_DB_USER,
      password: process.env.O2SWITCH_DB_PASSWORD,
      database: process.env.O2SWITCH_DB_NAME,
      port: Number(process.env.O2SWITCH_DB_PORT || 3306),
      waitForConnections: true,
      connectionLimit: 3,
      connectTimeout: 8000,
    });
  }
  return pool;
}
