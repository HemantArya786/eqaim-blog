import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/HomeScreen/Home";
import BlogPost from "./Pages/BlogPost/BlogPost";
import NewBlog from "./Pages/NewBlog/NewBlog";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <Navbar />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/newblog" element={<NewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
