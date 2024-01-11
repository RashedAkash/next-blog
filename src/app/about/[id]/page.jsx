import { getPost } from '@/lib/data';
import React from 'react';


const SingleAbout = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id)
  console.log(post);
  return (
    <div>
      
    </div>
  );
};

export default SingleAbout;