import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/Home";
import MinHeader from "./components/MinHeader";

function App() {
  return (
    <>
      <Router>
        <MinHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="Home" element={<FeatureComponent />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
