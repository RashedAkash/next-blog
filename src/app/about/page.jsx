

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const AboutPage = async () => {
  
  const data = await getData()
  console.log(data);
 
  return (
    <div>
      AboutPage
    </div>
  );
};

export default AboutPage;