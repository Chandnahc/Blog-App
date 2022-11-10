import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import About from "./components/About";


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/post" element={<Post />} />
        <Route  path="/about" element={<About />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
