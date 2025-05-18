import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Memorials from "./pages/Memorials";
import { Routes, Route } from "react-router";
import ViewMemorial from "./pages/ViewMemorial";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorials" element={<Memorials />} />
        <Route path="/memorialsPerson" element={<ViewMemorial />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
