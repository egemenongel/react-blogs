import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import Navbar from './components/Navbar';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
        <Route path = "/">
        <Route index element={<Home />} />
        <Route path="createBlog" element={<Create />} />
        <Route path="blogs/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
