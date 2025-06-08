import Public from "./pages/Public/Public";
import Memorials from "./pages/Public/Memorials";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import ViewMemorial from "./pages/Public/ViewMemorial";
import Login from "./pages/Public/Login";
import Register from "./pages/Public/Register";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Protected/Home";
import CreateMemorial from "./pages/Protected/CreateMemorial";
import MyMemories from "./pages/Protected/MyMemories";
import MemorialProfile from "./pages/Protected/MemorialProfile";
import NotFound from "./components/NotFound";
import RootLayout from "./Layout/RootLayout";
import MemorialProfileLayout from "./Layout/MemorialProfileLayout";
import About from "./components/memorials/About";
import Gallery from "./components/memorials/Gallery";
import Memories from "./components/memorials/Memories";
import QrCode from "./components/memorials/QrCode";
import Timeline from "./components/memorials/Timeline";
import Error from "./components/Error";
import { Navigate } from "react-router";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <ToastContainer position="bottom-right" autoClose={3000} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* PUBLIC MEMORIAL WITH DUMMY DATA */}
        <Route path="memorials" element={<Memorials />} />
        <Route path="memorials/:itemId" element={<ViewMemorial />} />

        {/* PROTECTED ROUTE */}
        <Route>
          <Route path="home" element={<Home />} />
          <Route path="create-memorial" element={<CreateMemorial />} />
          <Route
            path="memorial-profile/:id"
            element={<MemorialProfileLayout errorElement={<Error />} />}
          >
            {/* Default tab */}
            <Route index element={<Navigate to="about" replace />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="memories" element={<Memories />} />
            <Route path="qr code" element={<QrCode />} />
            <Route path="timeline" element={<Timeline />} />
          </Route>
          <Route path="my-memories" element={<MyMemories />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
