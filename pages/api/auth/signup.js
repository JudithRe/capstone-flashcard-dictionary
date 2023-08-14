import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { username } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res
        .status(418)
        .json({ message: "This username is already taken!" });
    }

    try {
      await User.create(req.body);
      return res.status(201).json({ message: "User successfully created!" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
