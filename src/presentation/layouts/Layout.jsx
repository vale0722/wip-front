import React from 'react';
import Sidebar from 'presentation/components/organisms/Sidebar';
import Navbar from 'presentation/components/organisms/Navbar';

export default function Layout({ children }) {
  return (
    <div className='drawer drawer-mobile text-gray-700'>
      <input id='sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center min-h-screen'>
        <Navbar />
        {children}
      </div>
      <Sidebar />
    </div>
  );
}
