import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "wallabee.ceuqfqu6bbhu.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  user: "wallabeer2ondb",
  password: "LqRUn9PAcBKZU6q",
  database: "sooho",
  connectionLimit: 10,
  queueLimit: 0,
});
