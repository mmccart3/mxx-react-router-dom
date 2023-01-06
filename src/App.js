import {Link, Route, Routes, useNavigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log("Going home ...");
    navigate("/");
  };

  return (
    <div>
      <h1>App</h1>
      
        <nav>
          {/* Changing URL with a Link */}
          <Link to ="/">Home</Link>
          <Link to ="/about">About</Link>
          <Link to ="/contact">Contact</Link>
        </nav>
        <button onClick={clickHandler}>Send me Home</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
