import { ExternalLink } from 'lucide-react';
import { projects } from './ProjectData';

const Project = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12">PROJECTS</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-lg shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* 기본 정보 (호버 전) */}
              <div
                className={`absolute inset-0 ${project.bgColor} p-8 flex flex-col justify-between text-white`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{project.period}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink size={16} />
                  <span>GitHub</span>
                </div>
              </div>

              {/* 상세 정보 (호버 시) */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white px-8 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-300 mb-1">
                      역할
                    </h4>
                    <p className="text-lg">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-300 mb-1">
                      내용
                    </h4>
                    <p className="text-sm leading-relaxed">{project.content}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-300 mb-1">
                      성과
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {project.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
