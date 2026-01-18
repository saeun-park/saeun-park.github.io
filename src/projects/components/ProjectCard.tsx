import type { ProjectData } from '../ProjectData';

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      className="cursor-pointer rounded-lg border border-gray-300 transition-all duration-300 h-64 p-8 flex flex-col justify-between text-gray-800 hover:scale-105"
      onClick={() => onClick(project)}
    >
      <div>
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-sm opacity-90 mb-4">{project.period}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-800"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
