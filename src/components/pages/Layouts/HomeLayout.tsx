import React from 'react'

interface HomeLayoutPros {
  children: React.ReactNode
}

const HomeLayout: React.FC<HomeLayoutPros> = ({ children }) => {
  return (
    <main className="flex overflow-hidden relative min-h-screen bg-image-bg bg-no-repeat bg-center bg-cover flex-col items-center justify-between p-24">
      {children}
    </main>
  )
}

export default HomeLayout
