import dbConnect from "@/db/connect";
import Category from "@/db/models/Category";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    const category = await Category.findById(id);

    if (!category) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(category);
    return;
  }

  if (request.method === "PUT") {
    const updatedCategory = request.body;

    await Category.findByIdAndUpdate(id, updatedCategory);

    response.status(200).json({ status: "Category updated." });
    return;
  }

  if (request.method === "DELETE") {
    await Category.findByIdAndDelete(id);

    response.status(200).json({ status: "Category deleted." });
  }
  response.status(405).json({ message: "Method not allowed" });
}
