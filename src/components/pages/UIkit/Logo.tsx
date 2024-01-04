import React from 'react'
import { FaFeatherPointed } from "react-icons/fa6";

interface LogoProps {
  className ?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`${className} font-bold uppercase flex items-center space-x-2`}>
      <FaFeatherPointed className='text-3xl' />
      <span>Curious</span>
    </div>
  )
}

export default Logo