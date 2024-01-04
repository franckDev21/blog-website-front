import React from 'react'
import Logo from '../UIkit/Logo';
import SeachBar from '../UIkit/SeachBar';

interface HeaderProps {
  className ?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`${className} bg-white flex border-b justify-between items-center py-6 container mx-auto px-4`}>
      <div className='space-x-4 flex items-center'>
        <Logo />
        <SeachBar />
      </div>

      <div className=' space-x-3'>
        <a href="/" className=' px-4 py-2 rounded-full bg-gray-800 text-white'>Sign in</a>
        <a href="/" className=' px-4 py-2 rounded-full bg-gray-200 text-gray-800'>Sign in</a>
      </div>
    </header>
  )
}

export default Header