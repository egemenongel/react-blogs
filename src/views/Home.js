import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
       {error && <div className="error">ERROR HAPPENED</div>}
       {isLoading && <div className="loading">Loading...</div>}
       {blogs && <BlogList blogs = {blogs} title = "My Blogs"/>}
    </div>
    )
  
}
 
export default Home;