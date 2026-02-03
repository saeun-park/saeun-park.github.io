import React from 'react';
import type { ProjectDetail } from '../../../data/50-ProjectData';
import ImageCarousel from './ImageCarousel';
interface ProjectDetailRendererProps {
  detail: ProjectDetail;
  index: number;
}

const ProjectDetailRenderer: React.FC<ProjectDetailRendererProps> = ({
  detail,
  index,
}) => {
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
          loading="lazy"
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
                loading="lazy"
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

export default ProjectDetailRenderer;
