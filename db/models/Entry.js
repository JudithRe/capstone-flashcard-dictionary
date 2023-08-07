import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema(
  {
    showAddButton: { type: Boolean, required: true },
    isDictionaryEntry: { type: Boolean, required: true },
    slug: { type: String, required: true },
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
        interval: { type: Number },
        wrongAnswerCount: { type: Number },
        rightAnswerCount: { type: Number },
        ease: { type: Number },
        streak: { type: Number },
      },
    },
  },
  { collection: "word-list" }
);

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
