import React from 'react';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className='bg-[#fcf0ff] h-screen w-full'>
      <Navbar />
      <div className='w-3/4 mx-auto border-b-[1px] border-slate-400 mt-10'></div>
    </div>
  );
};

export default Layout;
