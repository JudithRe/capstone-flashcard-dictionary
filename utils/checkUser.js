import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

// Checking functions
export async function hasToken(req) {
  const token = await getToken({ req, secret });
  if (!token) {
    return false;
  }
  return true;
}

export async function isAdmin(req) {
  const token = await getToken({ req, secret });
  if (!token || token.user.role !== "admin") {
    return false;
  }
  return true;
}
