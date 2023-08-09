import dbConnect from "@/db/connect";
import Entry from "@/db/models/Entry";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  // In preparation for future US
  if (request.method === "GET") {
    const entry = await Entry.findById(id);

    if (!entry) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(entry);
    return;
  }

  if (request.method === "PUT") {
    const updatedEntry = request.body;

    await Entry.findByIdAndUpdate(id, updatedEntry);

    response.status(200).json({ status: "Entry updated." });
    return;
  }

  // In preparation for future US
  if (request.method === "DELETE") {
    await Entry.findByIdAndDelete(id);

    response.status(200).json({ status: "Entry deleted." });
  }
}
