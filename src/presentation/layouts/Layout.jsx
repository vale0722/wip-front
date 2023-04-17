import React from 'react';
import Sidebar from 'presentation/components/organisms/Sidebar';
import Navbar from 'presentation/components/organisms/Navbar';

export default function Layout({ children, setIsLoading }) {
  return (
    <div className='drawer drawer-mobile text-gray-700'>
      <input id='sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content w-full overflow-x-hidden'>
        <Navbar setIsLoading={setIsLoading} />
        {children}
      </div>
      <Sidebar setIsLoading={setIsLoading} />
    </div>
  );
}
