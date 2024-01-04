import React from 'react'
import Header from './Header';
import Footer from './Footer';

interface PublicLayoutProps {
  className ?: string;
  children : React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ className = '', children }) => {
  return (
   <div className=' flex flex-col bg-gray-100 h-full'>
    <Header />
    <div className={`${className} flex container mx-auto px-20 py-10`}>
      <section className=' flex-grow'>{children}</section>
      <aside className=' w-[450px] flex-none '></aside>
    </div>
    <Footer />
   </div>
  )
}

export default PublicLayout