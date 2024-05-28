import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const {id} = useParams()
  const detailUrl = 'http://localhost:8000/blogs/' + id
  const { data: blog, error, isLoading} = useFetch(detailUrl)
  const navigate = useNavigate()

  const handleClick = () => {
    fetch(detailUrl, {
      method: 'DELETE'
    })
    .then(()=>{
      navigate('/')
    })
  }
  return (  
    <div className="blog-details">
      {isLoading && <div>"loading"...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={handleClick}>delete</button>
    </div>
  );
}
 
export default BlogDetails;