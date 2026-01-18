import { useState } from 'react';
import { projects } from './ProjectData';
import type { ProjectData } from './ProjectData';
import ProjectModal from './components/ProjectModal';
import ProjectCard from './components/ProjectCard';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  return (
    <>
      <section id="projects" className="pb-8">
        <div>
          <h2 className="text-4xl text-gray-800 font-bold my-12">PROJECTS</h2>
          <div className="mx-20">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Project;
