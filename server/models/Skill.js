import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true
    },
    level: {
      type: Number,
      required: [true, "Skill level is required"],
      min: 0,
      max: 100
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database", "Tools", "Design"],
      default: "Frontend"
    }
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
