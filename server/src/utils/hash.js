import bcrypt from "bcryptjs";
export const hashPassword = (pwd) => bcrypt.hashSync(pwd, 10);
export const comparePassword = (pwd, hash) => bcrypt.compareSync(pwd, hash);
