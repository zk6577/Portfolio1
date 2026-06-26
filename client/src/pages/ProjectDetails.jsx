import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import API from "../api.js";
import { fallbackProjects } from "../data/staticData.js";
import { actionLinkClass, glassCardClass, mutedTextClass, pageBgClass, sectionKickerClass, tagClass } from "../utils/styles.js";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const localProject = fallbackProjects.find((item) => item._id === id);

    API.get(`/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch(() => setProject(localProject || fallbackProjects[0]));
  }, [id]);

  if (!project) {
    return <div className={`${pageBgClass} grid place-items-center text-brand-cyan`}>Loading project...</div>;
  }

  return (
    <main className={`${pageBgClass} px-[7%] py-[82px]`}>
      <motion.div
        className="mx-auto max-w-[1100px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-brand-cyan">
          <FaArrowLeft /> Back to Portfolio
        </Link>

        <article className={`${glassCardClass} overflow-hidden rounded-[32px]`}>
          <img className="h-[280px] w-full object-cover md:h-[460px]" src={project.image} alt={project.title} />

          <div className="p-6 md:p-[38px]">
            <p className={sectionKickerClass}>Project Details</p>
            <h1 className="my-3 text-[clamp(34px,5vw,54px)] font-extrabold leading-tight">{project.title}</h1>
            <h3 className="mb-4 text-brand-cyan">{project.subtitle}</h3>
            <p className={mutedTextClass}>{project.description}</p>

            <div className="my-[18px] flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span className={tagClass} key={tech}>{tech}</span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.githubUrl && (
                <a className={actionLinkClass} href={project.githubUrl} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a className={actionLinkClass} href={project.liveUrl} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Preview
                </a>
              )}
            </div>
          </div>
        </article>
      </motion.div>
    </main>
  );
}

export default ProjectDetails;
