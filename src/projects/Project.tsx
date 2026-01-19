import { projects } from './ProjectData';
import type { ProjectData } from './ProjectData';
import ProjectCard from './components/ProjectCard';

interface ProjectProps {
  setSelectedProject: (project: ProjectData | null) => void;
}

const Project = ({ setSelectedProject }: ProjectProps) => {
  return (
    <>
      <section id="projects" className="pb-8">
        <div>
          <h2 className="text-4xl text-gray-800 font-bold my-12">PROJECTS</h2>
          {/* <p className="text-sm text-gray-700">
            주요 프로젝트의 세부 사항을 확인해보세요.
          </p> */}
          <div className="mx-20">
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>
    </>
  );
};

export default Project;
