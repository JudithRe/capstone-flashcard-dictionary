import dbConnect from "@/db/connect";
import Category from "@/db/models/Category";

export default async function handler(request, response) {
  const { categoryName, userId } = await request.query;

  await dbConnect();

  if (categoryName !== "loading") {
    if (request.method === "GET") {
      const category = await Category.findOne({
        userId: userId,
        name: categoryName,
      });
      response.status(200).json(category);
      return;
    }

    response.status(405).json({ message: "Method not allowed" });
  }
}
