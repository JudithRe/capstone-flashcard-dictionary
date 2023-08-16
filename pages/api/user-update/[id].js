import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

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
  }
}
