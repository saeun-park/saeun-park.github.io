import type { ProjectData } from '../ProjectData';
import TechStack from '../../skills/components/TechStack';

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      className="group cursor-pointer rounded-lg bg-gray-100 transition-all duration-300 relative pb-[100%] text-gray-800 hover:scale-105 hover:bg-pink-100"
      onClick={() => onClick(project)}
    >
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-xs opacity-90 mb-3">{project.period}</p>
          <TechStack
            techs={project.tools}
            iconSize="text-base"
            showNames={false}
            containerClassName="mt-2"
          />
          <p className="text-sm mt-4 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
