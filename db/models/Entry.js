import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema(
  {
    userId: { type: [Schema.Types.ObjectId], ref: "User" },
    category: { type: [Schema.Types.ObjectId], ref: "Category" },
    categoryName: { type: String },
    showAddButton: { type: Boolean, required: true },
    isDictionaryEntry: { type: Boolean, required: true },
    slug: { type: String, required: true },
    isCommon: { type: Boolean },
    jlpt: { type: String },
    wanikani: { type: String },
    japanese: {
      type: Object,
      required: true,
      properties: {
        word: { type: String },
        reading: { type: String },
      },
    },
    english: { type: Array, required: true },

    study: {
      type: Object,
      required: true,
      properties: {
        lastReview: { type: String },
        stage: { type: Number },
        lastWasWrongAnswer: { type: Boolean },
        wrongAnswerCount: { type: Number },
        rightAnswerCount: { type: Number },
        streak: { type: Number },
      },
    },
  },
  { collection: "word-list" }
);

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
