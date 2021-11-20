import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Add from "./components/Add";
import Display from "./components/Display";
import Mentor from "./components/Mentor";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add/:id" element={<Add />}/>
          <Route path="display/:id" element={<Display/>}/>
          <Route path="mentor/:id" element={<Mentor/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
