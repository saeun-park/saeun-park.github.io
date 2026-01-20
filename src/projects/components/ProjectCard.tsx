import type { ProjectData } from '../ProjectData';
import TechStack from '../../skills/components/TechStack';
import { FaStar } from 'react-icons/fa'; // Import FaStar
import { SiGithub } from 'react-icons/si'; // Import SiGithub for GitHub logo

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
  layout?: 'default' | 'wide';
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const imageUrl: string | undefined = project.thumbnail;
  const isGitHubLink = project.link && project.link.includes('github.com');

  return (
    <div
      className="group cursor-pointer rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col overflow-hidden h-full"
      onClick={() => onClick(project)}
    >
      {/* Image */}
      {imageUrl && (
        <div className="w-full aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden relative">
          <img
            src={imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.isImportant && (
            <div className="absolute top-2 right-2 bg-yellow-400 p-2 rounded-full shadow-md">
              <FaStar className="text-white text-lg" />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">{project.period}</p>
        <p className="text-xs text-gray-700 leading-relaxed mb-3 flex-1">
          {project.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <TechStack
            techs={project.tools}
            iconSize="text-base"
            showNames={false}
          />
          {isGitHubLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card onClick from firing
              className="flex items-center gap-1.5 text-github hover:text-gray-700 transition-colors text-sm font-medium"
            >
              <SiGithub className="text-lg" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
