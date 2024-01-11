 async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.


   

 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export const generateMetadata = async ({params}) => {
  const post = await getData(params.id)
  return {
    title: post.title,
  description: post.body,
  }
}

const BlogDetailsPage = async({params}) => {
  const post = await getData(params.id)
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
          <p>{ post?.body}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
           
            
    </div>
  </div>
</div>
    </div>
  );
};

export default BlogDetailsPage;