import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "./SectionTitle.jsx";
import useFetch from "../hooks/useFetch.js";
import { fallbackProjects } from "../data/staticData.js";
import { actionLinkClass, glassCardClass, mutedTextClass, sectionClass, tagClass } from "../utils/styles.js";

function mergeProjects(localProjects, apiProjects) {
  const seen = new Set();

  return [...localProjects, ...apiProjects].filter((project) => {
    const key = project._id || project.title;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function Projects() {
  const { data: apiProjects } = useFetch("/projects", []);
  const projects = mergeProjects(fallbackProjects, apiProjects);

  return (
    <section id="projects" className={sectionClass}>
      <SectionTitle
        eyebrow="Projects"
        title="Featured work that proves your skills."
        description="Use this section to show your best projects with live link, GitHub link and technologies."
      />

      <div className="grid gap-[26px] lg:grid-cols-3">
        {projects.slice(0, 6).map((project, index) => (
          <motion.article
            className={`${glassCardClass} group overflow-hidden rounded-[28px]`}
            key={project._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            whileHover={{ y: -12, scale: 1.025 }}
          >
            <div className="h-[230px] overflow-hidden">
              <img className="size-full object-cover transition duration-[550ms] group-hover:scale-110" src={project.image} alt={project.title} />
            </div>
            <div className="p-6">
              <small className="font-extrabold text-brand-purple">{project.subtitle}</small>
              <h3 className="my-2.5 text-2xl font-bold">{project.title}</h3>
              <p className={mutedTextClass}>{project.description}</p>
              <div className="my-[18px] flex flex-wrap gap-2">
                {project.technologies?.map((tech) => <span className={tagClass} key={tech}>{tech}</span>)}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link className={actionLinkClass} to={`/projects/${project._id}`}>Details <FaArrowRight /></Link>
                {project.githubUrl && <a className={actionLinkClass} href={project.githubUrl} target="_blank" rel="noreferrer"><FaGithub /></a>}
                {project.liveUrl && <a className={actionLinkClass} href={project.liveUrl} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
