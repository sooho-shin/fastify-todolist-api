import { db } from "@/utils/db";

export const getTodolist = async () => {
  const [result] = await db.execute("select * from todo");

  return result;
};
