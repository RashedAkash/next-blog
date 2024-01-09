"use client"

import Link from "next/link";

const BlogCard = ({ post }) => {
  console.log(post);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {post?.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
          <p>{ post?.body.slice(0,50)}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
            <Link href={`/blog/${post?.id}`}>
             <div className="badge badge-outline">Read more ...</div>
            </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default BlogCard;