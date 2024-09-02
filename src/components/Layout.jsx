import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <div className='w-full border-b-[1px] border-slate-400 mt-2'></div>
      <div className='flex flex-1'>
        {/* Sidebar with fixed width */}
        <Sidebar />
        {/* Content Area */}
        <div className='flex-grow pt-8 pl-8'>hello</div>
      </div>
    </div>
  );
};

export default Layout;
