import dbConnect from "@/db/connect";
import Category from "@/db/models/Category";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const categories = await Category.find();
    response.status(200).json(categories);
    return;
  }

  if (request.method === "POST") {
    try {
      const categoryData = request.body;
      await Category.create(categoryData);
      response.status(201).json({ status: "Category created" });
      return;
    } catch (error) {
      console.log("There was an error ", error.message);
      response.status(400).json({ error: error.message });
      return;
    }
  }
  response.status(405).json({ message: "Method not allowed" });
}
