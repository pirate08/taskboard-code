import React from 'react';
import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';
import DropdownMenu from '@/ui/DropdownMenu';

const NavItems = [
  {
    id: 1,
    name: 'Home',
    link: '',
  },
  {
    id: 2,
    name: 'About Us',
    link: '/about',
  },
  {
    id: 3,
    name: 'Contact Us',
    link: '/contact',
  },
];

const Navbar = () => {
  return (
    <div className='px-36 pt-2'>
      <div className='flex justify-between items-center'>
        {/* --Logo Image-- */}
        <div>
          <Image
            src='/images/taskboard-logo.png'
            width={50}
            height={50}
            alt='Logo..'
          />
        </div>
        {/* --Nav Items-- */}
        <div className='flex items-center gap-8'>
          {NavItems.map((items) => (
            <ul key={items.id}>
              <li className='text-[#2373c2] hover:text-[#4da4fa] text-[15px]'>
                <a href={items.link}>{items.name}</a>
              </li>
            </ul>
          ))}
        </div>
        {/* --Dropdown Menu-- */}
        <div>
          <DropdownMenu
            mainSlot={<CgProfile />}
            item1={'Profile'}
            item2={'Settings'}
            item3={'Logout'}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
