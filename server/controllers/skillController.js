import Skill from "../models/Skill.js";

export const getSkills = async (req, res) => {
  const skills = await Skill.find().sort({ level: -1 });
  res.json(skills);
};

export const createSkill = async (req, res) => {
  const skill = await Skill.create(req.body);
  res.status(201).json(skill);
};

export const updateSkill = async (req, res) => {
  const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!skill) {
    res.status(404);
    throw new Error("Skill not found");
  }

  res.json(skill);
};

export const deleteSkill = async (req, res) => {
  const skill = await Skill.findByIdAndDelete(req.params.id);

  if (!skill) {
    res.status(404);
    throw new Error("Skill not found");
  }

  res.json({ message: "Skill deleted successfully" });
};
