import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './views/404';
import BlogDetails from './views/BlogDetails';
import Create from './views/Create';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
      <Routes>
        <Route path = "/">
        <Route index element={<Home />} />
        <Route path="createBlog" element={<Create />}/>
        <Route path="blogs/:id" element={<BlogDetails/>} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
