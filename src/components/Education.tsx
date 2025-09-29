import React from 'react';

// You can use an icon library like react-icons if you have it installed
// For example: import { FaGraduationCap, FaBrain, FaServer, FaTools } from 'react-icons/fa';

// Defining a type for the icon props to fix TypeScript error
type IconProps = {
    className?: string;
};

// Mock icons for demonstration purposes if you don't have an icon library
const FaGraduationCap: React.FC<IconProps> = ({ className }) => <span className={`text-xl ${className || ''}`}>🎓</span>;
const FaBrain: React.FC<IconProps> = ({ className }) => <span className={`text-xl ${className || ''}`}>🧠</span>;
const FaServer: React.FC<IconProps> = ({ className }) => <span className={`text-xl ${className || ''}`}>⚙️</span>;
const FaTools: React.FC<IconProps> = ({ className }) => <span className={`text-xl ${className || ''}`}>🛠️</span>;

const educationData = [
  {
    institution: 'Motilal Nehru National Institute of Technology Allahabad',
    degree: 'Bachelor of Technology in Chemical Engineering',
    years: '2023 - 2027',
    details: 'CPI: 8.43 (till 4th Sem.)',
  },
  {
    institution: 'Adarsh Vikas Vidyalaya',
    degree: 'CBSE Board, Bihar (Intermediate)',
    years: '2022',
    details: 'Percentage: 92.2%',
  },
  {
    institution: 'Adarsh Vikas Vidyalaya',
    degree: 'CBSE Board, Bihar (10th)',
    years: '2020',
    details: 'Percentage: 92.2%',
  },
];

const skillsData = {
  languages: ['C++', 'JavaScript', 'Python'],
  softwareEngineering: ['Data Structures and Algorithms', 'OOPS', 'OS', 'DBMS'],
  webTechnologies: ['Node.js', 'React.js', 'Express', 'Socket.io', 'HTML/CSS', 'Shaden UI'],
  databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  cloudAndDevOps: ['Docker', 'Git', 'GitHub'],
  developerTools: ['VS Code', 'Postman'],
  machineLearning: ['NumPy', 'Pandas', 'OpenCV', 'Mediapipe'],
};

// Defining the type for the props of SkillCategory component
type SkillCategoryProps = {
  title: string;
  skills: string[];
};

const Page = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-cyan-400">
              <FaGraduationCap className="mr-3" /> Education
            </h2>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
                    {index < educationData.length - 1 && <div className="w-0.5 flex-grow bg-slate-600"></div>}
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-white">{edu.institution}</p>
                    <p className="text-gray-400">{edu.degree}</p>
                    <p className="text-gray-500 text-sm">{edu.years}</p>
                    <p className="text-gray-400 mt-1">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Core Concepts Card */}
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-cyan-400">
              <FaBrain className="mr-3" /> Languages & Core Concepts
            </h2>
            <div className="space-y-6">
              <SkillCategory title="Languages" skills={skillsData.languages} />
              <SkillCategory title="Software Engineering" skills={skillsData.softwareEngineering} />
            </div>
          </div>

          {/* Web Development Card */}
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-cyan-400">
              <FaServer className="mr-3" /> Web Development
            </h2>
            <div className="space-y-6">
              <SkillCategory title="Web Technologies" skills={skillsData.webTechnologies} />
              <SkillCategory title="Databases" skills={skillsData.databases} />
            </div>
          </div>

          {/* Tools & Technologies Card */}
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-cyan-400">
              <FaTools className="mr-3" /> Tools & Technologies
            </h2>
            <div className="space-y-6">
              <SkillCategory title="Cloud & DevOps" skills={skillsData.cloudAndDevOps} />
              <SkillCategory title="Developer Tools" skills={skillsData.developerTools} />
              <SkillCategory title="Machine Learning" skills={skillsData.machineLearning} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3 text-gray-300">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-slate-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Page;