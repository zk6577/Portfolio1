import { useEffect, useState } from "react";
import API from "../api.js";
import {
  adminCardClass,
  glassCardClass,
  inputClass,
  mutedTextClass,
  pageBgClass,
  sectionKickerClass,
  submitButtonClass
} from "../utils/styles.js";

const emptyProject = {
  title: "",
  subtitle: "",
  description: "",
  image: "",
  technologies: "",
  githubUrl: "",
  liveUrl: "",
  featured: true
};

const emptySkill = {
  name: "",
  level: 80,
  category: "Frontend"
};

const statusClass = "my-3.5 block font-extrabold text-brand-cyan";
const listItemClass = "rounded-[18px] border border-white/10 bg-white/[0.045] p-4";
const deleteButtonClass = "rounded-xl border-0 bg-brand-red px-3.5 py-2.5 font-black text-white";

function AdminDashboard() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [skillForm, setSkillForm] = useState(emptySkill);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem("portfolioAdminToken")));

  const fetchAdminData = async () => {
    try {
      const [projectRes, skillRes, messageRes] = await Promise.all([
        API.get("/projects"),
        API.get("/skills"),
        API.get("/contact")
      ]);

      setProjects(projectRes.data);
      setSkills(skillRes.data);
      setMessages(messageRes.data);
    } catch (error) {
      setStatus("Admin data fetch failed. Login again or check backend.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchAdminData();
    }
  }, [isLoggedIn]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setStatus("");

    try {
      const res = await API.post("/admin/login", loginForm);
      localStorage.setItem("portfolioAdminToken", res.data.token);
      setIsLoggedIn(true);
      setStatus("Login successful.");
    } catch (error) {
      setStatus(error.response?.data?.message || "Login failed.");
    }
  };

  const createProject = async (event) => {
    event.preventDefault();
    setStatus("");

    try {
      const payload = {
        ...projectForm,
        technologies: projectForm.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      };

      await API.post("/projects", payload);
      setProjectForm(emptyProject);
      setStatus("Project added successfully.");
      fetchAdminData();
    } catch (error) {
      setStatus(error.response?.data?.message || "Project creation failed.");
    }
  };

  const createSkill = async (event) => {
    event.preventDefault();
    setStatus("");

    try {
      await API.post("/skills", { ...skillForm, level: Number(skillForm.level) });
      setSkillForm(emptySkill);
      setStatus("Skill added successfully.");
      fetchAdminData();
    } catch (error) {
      setStatus(error.response?.data?.message || "Skill creation failed.");
    }
  };

  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      setStatus("Project deleted.");
      fetchAdminData();
    } catch (error) {
      setStatus("Project delete failed.");
    }
  };

  const deleteSkill = async (id) => {
    try {
      await API.delete(`/skills/${id}`);
      setStatus("Skill deleted.");
      fetchAdminData();
    } catch (error) {
      setStatus("Skill delete failed.");
    }
  };

  const deleteMessage = async (id) => {
    try {
      await API.delete(`/contact/${id}`);
      setStatus("Message deleted.");
      fetchAdminData();
    } catch (error) {
      setStatus("Message delete failed.");
    }
  };

  const logout = () => {
    localStorage.removeItem("portfolioAdminToken");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <main className={`${pageBgClass} px-[7%] py-20`}>
        <form className={`${glassCardClass} mx-auto mt-[70px] grid max-w-[460px] gap-4 rounded-[28px] p-8`} onSubmit={handleLogin}>
          <p className={sectionKickerClass}>Secure Panel</p>
          <h1 className="text-[44px] font-bold leading-tight">Admin Login</h1>
          <p className={mutedTextClass}>Manage projects, skills and contact messages.</p>

          <input
            className={inputClass}
            type="email"
            placeholder="Admin Email"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            required
          />

          <input
            className={inputClass}
            type="password"
            placeholder="Admin Password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            required
          />

          <button className={submitButtonClass} type="submit">Login</button>


         
        </form>
      </main>
    );
  }

  return (
    <main className={`${pageBgClass} px-[7%] py-20`}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-[30px] flex flex-col items-start justify-between gap-[18px] lg:flex-row lg:items-center">
          <div>
            <p className={sectionKickerClass}>Dashboard</p>
            <h1 className="text-[44px] font-bold leading-tight">Portfolio Admin</h1>
          </div>
          <button className={submitButtonClass} type="button" onClick={logout}>Logout</button>
        </div>

        {status && <span className={statusClass}>{status}</span>}

        <section className="grid gap-6 lg:grid-cols-2">
          <form className={adminCardClass} onSubmit={createProject}>
            <h2 className="mb-1.5 text-2xl font-bold">Add Project</h2>
            <input className={inputClass} name="title" placeholder="Project Title" value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} required />
            <input className={inputClass} name="subtitle" placeholder="Subtitle" value={projectForm.subtitle} onChange={(e) => setProjectForm({ ...projectForm, subtitle: e.target.value })} />
            <input className={inputClass} name="image" placeholder="Image URL" value={projectForm.image} onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })} required />
            <textarea className={inputClass} name="description" placeholder="Description" value={projectForm.description} onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} required />
            <input className={inputClass} name="technologies" placeholder="React, Node, MongoDB" value={projectForm.technologies} onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })} />
            <input className={inputClass} name="githubUrl" placeholder="GitHub URL" value={projectForm.githubUrl} onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })} />
            <input className={inputClass} name="liveUrl" placeholder="Live URL" value={projectForm.liveUrl} onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })} />
            <label className="flex items-center gap-2.5 text-brand-muted">
              <input type="checkbox" checked={projectForm.featured} onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })} />
              Featured Project
            </label>
            <button className={submitButtonClass} type="submit">Add Project</button>
          </form>

          <form className={adminCardClass} onSubmit={createSkill}>
            <h2 className="mb-1.5 text-2xl font-bold">Add Skill</h2>
            <input className={inputClass} placeholder="Skill Name" value={skillForm.name} onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })} required />
            <input className={inputClass} type="number" min="0" max="100" placeholder="Level" value={skillForm.level} onChange={(e) => setSkillForm({ ...skillForm, level: e.target.value })} required />
            <select className={inputClass} value={skillForm.category} onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Database</option>
              <option>Tools</option>
              <option>Design</option>
            </select>
            <button className={submitButtonClass} type="submit">Add Skill</button>
          </form>

          <div className={adminCardClass}>
            <h2 className="mb-1.5 text-2xl font-bold">Projects</h2>
            <div className="grid max-h-[520px] gap-3.5 overflow-y-auto">
              {projects.map((project) => (
                <div className={`${listItemClass} flex items-center justify-between gap-3.5`} key={project._id}>
                  <div>
                    <strong>{project.title}</strong>
                    <small className="mt-1 block text-brand-muted">{project.subtitle}</small>
                  </div>
                  <button className={deleteButtonClass} type="button" onClick={() => deleteProject(project._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>

          <div className={adminCardClass}>
            <h2 className="mb-1.5 text-2xl font-bold">Skills</h2>
            <div className="grid max-h-[520px] gap-3.5 overflow-y-auto">
              {skills.map((skill) => (
                <div className={`${listItemClass} flex items-center justify-between gap-3.5`} key={skill._id}>
                  <div>
                    <strong>{skill.name}</strong>
                    <small className="mt-1 block text-brand-muted">{skill.level}% - {skill.category}</small>
                  </div>
                  <button className={deleteButtonClass} type="button" onClick={() => deleteSkill(skill._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>

          <div className={`${adminCardClass} lg:col-span-2`}>
            <h2 className="mb-1.5 text-2xl font-bold">Contact Messages</h2>
            <div className="grid max-h-[520px] gap-3.5 overflow-y-auto">
              {messages.map((message) => (
                <div className={listItemClass} key={message._id}>
                  <strong>{message.name}</strong>
                  <small className="mt-1 block text-brand-muted">{message.email}</small>
                  <p className="my-2.5 leading-[1.7] text-brand-muted">{message.message}</p>
                  <button className={deleteButtonClass} type="button" onClick={() => deleteMessage(message._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminDashboard;
