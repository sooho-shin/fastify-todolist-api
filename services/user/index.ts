import { db } from "@/utils/db";

export const getUserInfo = async (id: string) => {
  const [result] = await db.execute("select * from user where id = ?", [id]);

  return result;
};
