import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [author,setAuthor] = useState('Author1')
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const blog = {title, body, author}

    setLoading(true)
    fetch('http://localhost:8000/blogs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(blog)
    }).then(()=>{
      setLoading(false)
      navigate('/')
    })
  }

  

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
        type="text"
        required
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <label>Blog:</label>
        <textarea 
        required
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
        <label>Author:</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Author1"> Author1</option>
          <option value="Author2"> Author2</option>
          <option value="Author3"> Author3</option>
        </select> 
        {isLoading && <button>Adding the blog...</button>}
        {!isLoading && <button>Add Blog</button>}
      </form>
    </div>
   );
}
 
export default Create;