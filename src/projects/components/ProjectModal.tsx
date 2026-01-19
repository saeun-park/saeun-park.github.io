import { X, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ProjectData, ProjectDetail } from '../ProjectData';
import TechStack from '../../skills/components/TechStack';

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

const ProjectModal = ({
  project,
  onClose,
  setIsModalOpen,
}: ProjectModalProps) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
    return () => {
      document.body.style.overflow = 'unset';
      setIsModalOpen(false);
    };
  }, [setIsModalOpen]);

  const handleClose = () => {
    setIsShowing(false);
    setTimeout(onClose, 300);
  };

  const Label = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-sm font-light text-gray-500 mb-1">{children}</h4>
  );

  const Content = ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-800">{children}</p>
  );

  const renderDetail = (detail: ProjectDetail, index: number) => {
    switch (detail.type) {
      case 'text':
        return (
          <div key={index}>
            <h4 className="text-lg font-medium text-pink-500 mb-2">
              {detail.title}
            </h4>
            <p className="text-sm leading-loose text-gray-800 whitespace-pre-line">
              {detail.description}
            </p>
          </div>
        );
      case 'image':
        return (
          <img
            key={index}
            src={detail.src}
            alt={detail.alt || 'Project Image'}
            className="w-full rounded-lg my-4"
          />
        );
      case 'image-gallery':
        return (
          <div key={index} className="flex gap-4">
            {(detail.images || []).map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image.src}
                alt={image.alt || 'Project Image'}
                className="w-1/2 rounded-lg my-4"
              />
            ))}
          </div>
        );
      default:{
        return null;
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-[100] flex items-center justify-center transition-opacity duration-300 ${
        isShowing ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-lg p-8 max-w-4xl w-full relative transition-all duration-300 ${
          isShowing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        <div className="max-h-[80vh] overflow-y-auto pr-5 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {project.title}
          </h2>

          <div>
            <Label>프로젝트 개요</Label>
            <Content>{project.overview}</Content>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>기술 스택</Label>
              <TechStack techs={project.tools} />
            </div>
            {project.link && (
              <div>
                <Label>관련 링크</Label>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-500 hover:underline"
                >
                  <span>Link to Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <Label>참여인원</Label>
              <Content>{project.teamSize}</Content>
            </div>
            <div>
              <Label>역할</Label>
              <Content>{project.role}</Content>
            </div>
            <div>
              <Label>기간</Label>
              <Content>{project.period}</Content>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          <div className="space-y-6">
            {project.details.map((detail, index) =>
              renderDetail(detail, index)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
