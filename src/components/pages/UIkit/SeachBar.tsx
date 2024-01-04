import React from 'react'
import { IoSearch } from "react-icons/io5";

interface SeachBarProps {
  className?: string;
}

const SeachBar: React.FC<SeachBarProps> = ({ className = '' }) => {
  return (
    <form className={`${className} relative`}>
      <IoSearch className=' absolute left-4 top-1/2 -translate-y-1/2 text-gray-600' />
      <input type="search" className='pl-10 pr-4 py-2 bg-gray-200 rounded-full' placeholder='Search' />
    </form>
  )
}

export default SeachBar