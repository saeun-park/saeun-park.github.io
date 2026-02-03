import type { ProjectData } from '../../../data/50-ProjectData';
import TechStackItem from '../../30-techstack/TechStackItem';
import { FaStar } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

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
      {imageUrl && (
        <div className="w-full rounded-t-lg overflow-hidden relative">
          {' '}
          {/* 이미지 영역 */}
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* 별 아이콘 영역 */}
          {project.isImportant && (
            <div
              className="absolute top-2 right-2 bg-yellow-400 rounded-full shadow-md z-20 flex items-center justify-center"
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaStar className="text-white" style={{ fontSize: '16px' }} />
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
          <TechStackItem
            techs={project.tools}
            iconSize="text-base"
            showNames={false}
          />
          {isGitHubLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
