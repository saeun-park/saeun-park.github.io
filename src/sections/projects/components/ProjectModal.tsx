import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import useModalState from '../../../hooks/useModalState';
import type { ProjectData } from '../../../data/ProjectData';
import TechStackItem from '../../techstack/TechStackItem';
import ProjectDetailRenderer from './ProjectDetailRenderer';

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-sm font-light text-gray-500 mb-1">{children}</h4>
);

const Content = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-800">{children}</p>
);

const ProjectModal = ({
  project,
  onClose,
  setIsModalOpen,
}: ProjectModalProps) => {
  const { isShowing, handleClose } = useModalState({ onClose, setIsModalOpen });

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

          {/* 프로젝트 개요 */}
          <div>
            <Label>프로젝트 개요</Label>
            <Content>{project.overview}</Content>
          </div>

          {/* 기술 스택 및 관련 링크 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>기술 스택</Label>
              <TechStackItem techs={project.tools} />
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

          {/* 프로젝트 정보 상세 (인원, 역할, 기간) */}
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

          {/* 상세 섹션 리스트 */}
          <div className="space-y-6">
            {project.details.map((detail, index) => (
              <ProjectDetailRenderer
                key={index}
                detail={detail}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
