import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    userId: { type: [Schema.Types.ObjectId], ref: "User" },
    isPublic: { type: Boolean },
    name: { type: String, required: true },
  },
  { collection: "categories" }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
