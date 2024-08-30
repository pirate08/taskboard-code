'use client';
import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = ({ mainSlot, item1, item2, item3 }) => {
  const [clicked, setClicked] = useState(false);
  const dropdownRef = useRef(null);

  //   --function to check the click of the button--
  const handleClick = () => {
    setClicked(!clicked);
    console.log('The button is working...');
  };

  //   --function to check the handle the outside click of the box--
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <div>
        <span
          className='text-[24px] text-[#2373c2] cursor-pointer'
          onClick={handleClick}>
          {mainSlot}
        </span>
      </div>
      {clicked && (
        <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
          <div className='py-1'>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
              {item1}
            </a>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
              {item2}
            </a>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
              {item3}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
