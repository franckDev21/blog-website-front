import React from 'react'

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <div className={`${className}  mt-auto`}>Footer</div>
  )
}

export default Footer