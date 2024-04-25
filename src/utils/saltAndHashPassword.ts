import bcrypt from "bcrypt";

/**
 * Salts and hashes a raw password so we can store it safely
 * @param rawPassword Raw password as plain text given by the user on sign up
 * @returns Hashed password that's safe for us to store in the DB
 */
export default function saltAndHashPassword(rawPassword: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(rawPassword, salt);
}
