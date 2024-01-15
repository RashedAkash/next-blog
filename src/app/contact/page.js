import React from 'react';
async function getData() {
  const res = await fetch('http://localhost:3000//api/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const ContactPage = async() => {
  const data = await getData()
  console.log(data);
  return (
    <div>
      ContactPage
    </div>
  );
};

export default ContactPage;