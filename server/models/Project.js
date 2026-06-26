import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true
    },
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      required: [true, "Project description is required"]
    },
    image: {
      type: String,
      required: [true, "Project image is required"]
    },
    technologies: {
      type: [String],
      default: []
    },
    githubUrl: {
      type: String,
      default: ""
    },
    liveUrl: {
      type: String,
      default: ""
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
