import { fakePosts } from '@/config/data';
import React, { FC } from 'react'
import PostCard from './PostCard';

interface PostListProps {
  className?: string;
}

const PostList: FC<PostListProps> = ({ className = '' }) => {

  return (
    <div className={`${className} pt-10 space-y-10`}>
      {fakePosts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  )
}

export default PostList