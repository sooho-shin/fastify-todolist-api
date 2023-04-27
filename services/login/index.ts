import { db } from "@/utils/db";

export const postSignUp = async ({
  id,
  password,
}: {
  id: string;
  password: string;
}) => {
  const [user] = await db.execute("select * from user where id = ?", [id]);

  console.log(user);

  const result = "test Success";

  return result;
};
