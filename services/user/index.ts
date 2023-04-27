import { db } from "@/utils/db";

export const getUserInfo = async (idx: string) => {
  const [result] = await db.execute("select * from user where idx = ?", [idx]);

  return result;
};
