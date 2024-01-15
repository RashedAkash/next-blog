"use client"
import { getPost } from '@/lib/data';
import React from 'react';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const SingleAbout = async ({ params }) => {
  const { id } = params;
 const data = await getData(id)
  console.log(data,id, params);
    <div>
      156
    </div>
 
};

export default SingleAbout;