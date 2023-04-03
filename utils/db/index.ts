import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "todolist",
  connectionLimit: 10,
  queueLimit: 0,
});
