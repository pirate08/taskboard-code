'use client';

import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const ProjectsForm = ({ isOpen, onClose, addProject }) => {
  const [projectName, setProjectName] = useState('');

  //   --Function to handle new added project name--
  const handleAddProject = () => {
    if (projectName.trim()) {
      addProject(projectName);
      setProjectName('');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-sm font-bold mb-2'
                htmlFor='projectName'>
                Project Name
              </label>
              <input
                id='projectName'
                type='text'
                placeholder='Enter project name'
                className='w-full px-6 py-2 border rounded'
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleAddProject}>
            Add Project
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectsForm;
