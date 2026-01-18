import { X } from 'lucide-react';
import type { ProjectData } from '../ProjectData';

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h2>

        <div className="space-y-6 text-gray-800">
          <div>
            <h4 className="text-sm font-bold text-gray-600 mb-1">역할</h4>
            <p className="text-lg">{project.role}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-600 mb-1">내용</h4>
            <p className="text-sm leading-relaxed">{project.content}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-600 mb-1">성과</h4>
            <p className="text-sm leading-relaxed">{project.achievement}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
