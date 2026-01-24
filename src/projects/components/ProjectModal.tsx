import { X, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ProjectData, ProjectDetail } from '../ProjectData';
import TechStack from '../../skills/components/TechStack';

const ImageCarousel = ({
  images,
}: {
  images: { src: string; alt?: string }[];
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-full mx-auto my-4">
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt || 'Project Image'}
        className="w-full object-contain"
        style={{ maxHeight: '500px' }}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ml-2 hover:bg-opacity-75 transition-all"
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full mr-2 hover:bg-opacity-75 transition-all"
            aria-label="Next image"
          >
            &#10095;
          </button>
        </>
      )}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`block w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

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
            <p className="text-sm leading-loose text-gray-800 whitespace-pre-wrap">
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
            className="w-full my-4"
          />
        );
      case 'image-gallery':
        return (
          <div key={index}>
            <ImageCarousel images={detail.images || []} />
          </div>
        );
      case 'image-grid':
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-2 my-4 justify-center items-center"
          >
            {(detail.images || []).map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="flex justify-center w-full md:w-auto"
              >
                <img
                  src={image.src}
                  alt={image.alt || 'Project Image'}
                  className="w-auto max-w-full md:max-w-[400px] max-h-80 object-contain"
                />
              </div>
            ))}
          </div>
        );
      default: {
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
