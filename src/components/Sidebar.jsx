'use client';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import ProjectsForm from '@/ui/ProjectsForm';
import { useDisclosure } from '@chakra-ui/react';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(''); // State to track the active project

  const addProject = (projectName) => {
    setProjects([...projects, projectName]);
  };

  const handleProjectClick = (projectName) => {
    setActiveProject(projectName); // Set the clicked project as active
  };

  return (
    <div className='bg-[#d8eded] h-screen w-64 px-3 py-7 relative'>
      {/* --Label and the icon goes here-- */}
      <div className='flex items-center justify-between'>
        <h1 className='text-xl'>Projects</h1>
        <button className='cursor-pointer' onClick={onOpen}>
          <FaPlus />
        </button>
      </div>
      {/* --Projects list added here-- */}
      <div className='mt-7'>
        <ul>
          {projects.map((project, index) => {
            return (
              <li
                key={index}
                className={`text-md cursor-pointer py-2 px-2 rounded-md mb-2 ${
                  activeProject === project ? 'bg-white' : 'hover:bg-white'
                }`}
                onClick={() => handleProjectClick(project)}
              >
                {project}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Project form modal */}
      <ProjectsForm isOpen={isOpen} onClose={onClose} addProject={addProject} />
    </div>
  );
};

export default Sidebar;
