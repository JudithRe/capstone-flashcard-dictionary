import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";

export default async function handler(request, response) {
  const { user } = await request.query;

  await dbConnect();

  if (user === "loading" || user === "default") {
    response.status(204);
    return;
  }

  if (request.method === "GET") {
    const entries = await Entry.find({ userId: user });
    response.status(200).json(entries);
    return;
  }

  if (request.method === "POST") {
    try {
      const entryData = request.body;
      await Entry.create(entryData);
      response.status(201).json({ status: "Entry created" });
      return;
    } catch (error) {
      console.log("There was an error ", error.message);
      response.status(400).json({ error: error.message });
      return;
    }
  }
  response.status(405).json({ message: "Method not allowed" });
}
