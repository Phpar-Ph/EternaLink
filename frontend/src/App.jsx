import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Memorials from "./pages/Memorials";
import { Routes, Route } from "react-router";
import ViewMemorial from "./pages/ViewMemorial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import HomeLogin from "./pages/HomeLogin";
import CreateMemorial from "./pages/CreateMemorial";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memorials" element={<Memorials />} />
        <Route path="/memorialsPerson/:id" element={<ViewMemorial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<HomeLogin />} />
        <Route path="/create-memorial" element={<CreateMemorial />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
