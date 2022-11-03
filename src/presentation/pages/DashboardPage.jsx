import React from 'react';
import Header from 'presentation/components/atoms/Header';
import WIP from 'presentation/components/atoms/icons/WIP';

export default function DashboardPage() {
  return (
    <div className='flex flex-col h-full w-full'>
      <Header />
      <WIP />
    </div>
  );
}
