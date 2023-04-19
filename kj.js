import React from 'react';
import Post from './Postt';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostList;