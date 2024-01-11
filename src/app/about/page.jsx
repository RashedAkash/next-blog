
import { getPost, getPosts } from "@/lib/data";

const AboutPage = async () => {
  
   const posts = await getPosts()
 
  return (
    <div>
      AboutPage
    </div>
  );
};

export default AboutPage;