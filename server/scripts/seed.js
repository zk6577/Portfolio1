import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
import Admin from "../models/Admin.js";

dotenv.config();
await connectDB();

const projects = [
  {
    title: "MERN E-Commerce Platform",
    subtitle: "Full Stack Shopping Website",
    description: "Premium e-commerce website with product pages, cart UI, admin panel and MERN backend.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "Task Management App",
    subtitle: "Productivity Dashboard",
    description: "Clean dashboard with project cards, task flow, responsive layout and modern dark UI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Express", "JWT", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "Premium Portfolio Website",
    subtitle: "Animated Personal Brand",
    description: "Futuristic dark portfolio with animations, project CRUD, skills and contact messages.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Framer Motion", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  }
];

const skills = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "MongoDB", level: 84, category: "Database" },
  { name: "UI / UX Design", level: 90, category: "Design" }
];

try {
  await Project.deleteMany();
  await Skill.deleteMany();
  await Admin.deleteMany();

  await Project.insertMany(projects);
  await Skill.insertMany(skills);

  await Admin.create({
    name: "Portfolio Admin",
    email: process.env.ADMIN_EMAIL || "admin@portfolio.com",
    password: process.env.ADMIN_PASSWORD || "admin12345"
  });

  console.log("Seed data inserted successfully");
  await mongoose.connection.close();
  process.exit(0);
} catch (error) {
  console.error(error);
  await mongoose.connection.close();
  process.exit(1);
}
