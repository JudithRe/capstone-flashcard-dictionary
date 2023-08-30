import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  // const session = await getServerSession(request, response, authOptions);
  await dbConnect();

  const { id } = request.query;
  if (id === "default") {
    response.status(204);
    return;
  }

  if (request.method === "GET") {
    const user = await User.findById(id);

    if (!user) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(user);
    return;
  }

  if (request.method === "PUT") {
    const updatedUser = request.body;
    const id = updatedUser._id;

    await User.findByIdAndUpdate(id, updatedUser);

    response.status(200).json({ status: "User updated." });
    return;
  }

  if (request.method === "DELETE") {
    await User.findByIdAndDelete(id);

    response.status(200).json({ status: "User deleted." });
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
