import BlogCard from "@/components/BlogCard/BlogCard";


 async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const BlogPage = async() => {
  const posts = await getData()
  
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        posts?.map(post=> <BlogCard post={post} key={post.id} />)
    }
    </div>
  );
};

export default BlogPage;