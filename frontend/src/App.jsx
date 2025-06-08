import Public from "./pages/Public/Public";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Memorials from "./pages/Public/Memorials";
import { Routes, Route } from "react-router";
import ViewMemorial from "./pages/Public/ViewMemorial";
import Login from "./pages/Public/Login";
import Register from "./pages/Public/Register";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Protected/Home";
import CreateMemorial from "./pages/Protected/CreateMemorial";
import MyMemories from "./pages/Protected/MyMemories";
import Layout from "./components/Layout/Layout";
import MemorialProfile from "./pages/Protected/MemorialProfile";
const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC ROUTE */}
          <Route index element={<Public />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* PUBLIC MEMORIAL WITH DUMMY DATA */}
          <Route path="/memorials" element={<Memorials />} />
          <Route path="/memorials/:itemId" element={<ViewMemorial />} />
          {/* PROTECTED ROUTE */}

          <Route path="/home" element={<Home />} />
          <Route path="/create-memorial" element={<CreateMemorial />} />
          <Route path="/my-memories" element={<MyMemories />} />
          <Route path="/memorial-profile/:id" element={<MemorialProfile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
