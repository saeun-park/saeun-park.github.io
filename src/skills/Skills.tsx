import TechStack from '../components/TechStack';

const Skills = () => {
  return (
    <section id="skills" className=" flex px-6 py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12">SKILLS</h2>
        <div className="max-w-6xl mx-auto w-full">
          {/* TechStack */}
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Skills;
