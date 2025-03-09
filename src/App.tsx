import Navbar from "./components/Navbar";

import About_US from "./components/About_US";
import JoinUs from "./pages/JoinUs";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/JoinUs" element={<JoinUs />} />
      </Routes>
    </div>
  );
};

export default App;
