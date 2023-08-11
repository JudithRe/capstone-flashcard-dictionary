import dbConnect from "@/db/connect";
import User from "@/db/models/User";
// import handler from "@/utils/loginHandler";

// handler.post(createUser);

// async function createUser(req, res) {
//   const data = req.body;

//   const { email, password } = data;

//   await dbConnect();

//   const user = await User.create(req.body);

//   res.status(201).json({ message: "Created user!" });
// }

// export default handler;

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { data } = req.body;
    // const { email, password } = data;

    console.log("data", data);

    const existingUser = await User.findOne({ data });
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
