import PostList from '@/components/pages/Blog/PostList'
import PublicLayout from '@/components/pages/Layouts/PublicLayout'
import { NextPage } from 'next'
import React from 'react'

const HomePage: NextPage = () => {
  return (
    <PublicLayout>
      <div>HomePage</div>
      <PostList />
    </PublicLayout>
  )
}

export default HomePage