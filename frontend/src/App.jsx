import Public from "./pages/Public/LandingPage";
import Memorials from "./pages/Public/Memorials";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";

import MemorialProfile from "./pages/Public/MemorialProfile";
import Login from "./pages/Public/Login";
import Register from "./pages/Public/Register";
// import { ToastContainer } from "react-toastify";
import Home from "./pages/Private/Home";
import CreateMemorial from "./pages/Private/CreateMemorial";
// import MyMemorials from "./pages/Protected/MyMemorials";
import PrivateMemorialProfile from "./pages/Private/PrivateMemorialProfile";
import NotFound from "./components/shared/NotFound";
import RootLayout from "./Layout/RootLayout";
import MemorialProfileLayout from "./Layout/MemorialProfileLayout";
import About from "./components/memorials/memorialsProfile/About";
import Gallery from "./components/memorials/memorialsProfile/Gallery";
import Memories from "./components/memorials/memorialsProfile/Memories";
import QrCode from "./components/memorials/memorialsProfile/QrCode";
import Timeline from "./components/memorials/memorialsProfile/Timeline";
import Error from "./components/shared/Error";
import { Navigate } from "react-router";
import PersistLogin from "./features/PersistLogin/PersistLogin";
import ProtectedRoute from "./pages/Private/ProtectedRoute";
// import Loading from "./features/Loading";
import YourMemories from "./components/myMemorials/YourMemories";
import Post from "./components/myMemorials/Post";
// import MyShared from "./components/myMemorials/Collection";
import MyMemorialLayout from "./Layout/MyMemorialLayout";
import Collection from "./components/myMemorials/Collection";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <ToastContainer position="bottom-right" autoClose={3000} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* PUBLIC MEMORIAL WITH DUMMY DATA */}
        <Route path="explore-memorials" element={<Memorials />} />
        <Route path="memorials/:itemId" element={<MemorialProfile />} />

        {/* PROTECTED ROUTE */}
        <Route element={<PersistLogin />}>
          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="memorials" element={<PrivateMemorialProfile />} />
            <Route path="create-memorial" element={<CreateMemorial />} />
            <Route
              path="memorial-profile/:id"
              element={<MemorialProfileLayout errorElement={<Error />} />}
            >
              {/* Default tab */}
              {/* Memorial Profile */}
              <Route index element={<Navigate to="about" replace />} />

              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="memories" element={<Memories />} />
              <Route path="qr-code" element={<QrCode />} />
              <Route path="timeline" element={<Timeline />} />
            </Route>
          </Route>
          {/* My memories route page */}
          <Route path="my-memorials" element={<MyMemorialLayout />}>
            <Route index element={<Navigate to="post" replace />} />
            <Route path="post" element={<Post />} />
            <Route path="your-memories" element={<YourMemories />} />
            <Route path="collection" element={<Collection />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
