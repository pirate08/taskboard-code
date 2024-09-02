import React from 'react';

const Data = [
  {
    id: 1,
    question: 'What is a Taskboard?',
    answer:
      'A Taskboard is a visual tool used to manage tasks and workflows, often represented by columns or lists that organize tasks into different stages such as "To Do," "In Progress," and "Completed." It helps teams and individuals track progress on various tasks and projects in a clear and organized manner.',
  },
  {
    id: 2,
    question: 'What is the purpose of a Taskboard?',
    answer:
      'The purpose of a Taskboard is to provide a clear and visual representation of tasks, helping users prioritize, manage workloads, and track the progress of different tasks or projects. It enhances productivity by making it easy to see what needs to be done and what has already been completed.',
  },
  {
    id: 3,
    question: 'How do you use a Taskboard?',
    answer:
      'To use a Taskboard, start by listing tasks in the appropriate column based on their current status (e.g., "To Do"). As you work on tasks, move them to the "In Progress" column, and once completed, shift them to the "Completed" column. You can also add the branch name where the code is pushed and you can also add that if the code is merged or not.This process allows you to visually track the progress of tasks from start to finish.',
  },
  {
    id: 4,
    question: 'What are the benefits of using a Taskboard?',
    answer:
      'Taskboards help in improving organization, providing a clear overview of ongoing work, and ensuring that nothing is overlooked. They also facilitate better communication within teams, as everyone can easily see the status of different tasks, promoting collaboration and accountability.',
  },
];

const HomePage = () => {
  return (
    <div>
      {/* -- First Questions and Answers-- */}
      <div className='mb-4'>
        <h1 className='text-2xl mb-2'>
          What is a{' '}
          <span className='text-violet-700 font-bold'> Taskboard?</span>
        </h1>
        <ul className='list-disc ml-5 text-lg'>
          <li className='marker:text-violet-700 mb-1'>
            A Taskboard is a visual tool used to{' '}
            <span className='text-violet-700 font-bold'>
              manage tasks and workflows.
            </span>
          </li>
          <li className='marker:text-violet-700 mb-1'>
            It is often represented by{' '}
            <span className='text-violet-700 font-bold'>columns or lists.</span>
          </li>
          <li className='marker:text-violet-700 mb-1'>
            Tasks are organized into different stages such as{' '}
            <span className='text-violet-700 font-bold'>
              "To Do," "In Progress," and "Completed."
            </span>
          </li>
          <li className='marker:text-violet-700 mb-1'>
            It helps teams and individuals track progres{' '}
            <span className='text-violet-700 font-bold'>
              on various tasks and projects.
            </span>
          </li>
          <li className='marker:text-violet-700 mb-1'>
            The tool ensures that tasks are managed{' '}
            <span className='text-violet-700 font-bold'>
              in a clear and organized manner.
            </span>
          </li>
        </ul>
      </div>
      {/* -- Second Questions and Answers-- */}
      <div className='mb-4'>
        <h1 className='text-2xl mb-2'>
          What is the{' '}
          <span className='text-violet-700 font-bold'>
            {' '}
            purpose of a Taskboard?
          </span>
        </h1>
        <ul className='list-disc ml-5 text-lg'>
          <li className='marker:text-violet-700 mb-1'>
            A Taskboard provides a{' '}
            <span className='text-violet-700 font-bold'>
              clear and visual way{' '}
            </span>
            to represent tasks.
          </li>
          <li className='marker:text-violet-700 mb-1'>
            It helps users{' '}
            <span className='text-violet-700 font-bold'>
              {' '}
              prioritize tasks and manage{' '}
            </span>
            workloads effectively.
          </li>
          <li className='marker:text-violet-700 mb-1'>
            Taskboards allow users to track the{' '}
            <span className='text-violet-700 font-bold'>
              progress of different tasks or projects.
            </span>
          </li>
          <li className='marker:text-violet-700 mb-1'>
            By clearly displaying tasks, it enhances productivity, making it
            easy to see{' '}
            <span className='text-violet-700 font-bold'>
              what needs to be done and what has been completed.
            </span>
          </li>
        </ul>
      </div>
      {/* -- Third Questions and Answers-- */}
      <div className='mb-4'>
        <h1 className='text-2xl mb-2'>
          How do you{' '}
          <span className='text-violet-700 font-bold'> use a Taskboard?</span>
        </h1>
        <ul className='list-disc ml-5 text-lg'>
          <li className='marker:text-violet-700 mb-1'>
            Begin by placing tasks in the appropriate columns{' '}
            <span className='text-violet-700 font-bold'>
              based on their current status, such as "To Do," "In Progress," or
              "Completed."{' '}
            </span>
          </li>
          <li className='marker:text-violet-700 mb-1'>
            Move tasks between columns as their status changes,{' '}
            <span className='text-violet-700 font-bold'>
              {' '}
              allowing for a visual representation of task progress from start
              to finish.{' '}
            </span>
          </li>
          <li className='marker:text-violet-700 mb-1'>
            Optionally, add the{' '}
            <span className='text-violet-700 font-bold'>
              branch name where the code is pushed and indicate{' '}
            </span>
            whether the code has been merged.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
