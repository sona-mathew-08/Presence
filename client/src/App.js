// import './App.css';

// import Home from './pages/Home/Home';

// function App() {
//   return (
//     <>
//     <Home/>
//       {/* <div className="bg-indigo-600 w-full h-screen"></div> */}
//     </>
//   );
// }

// export default App;
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
// import Upload from './pages/Upload/Upload';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

function Layout() {
  return (
    
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}

    </>


  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      // {
      //   path:"/api/upload",
      //   element:<Upload/>
      // },
    
   ],
   
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  }

]);

function App() {
  return (
    <>
     <RouterProvider router={router} />
    {/* <Home/> */}
      {/* <div className="bg-indigo-600 w-full h-screen"></div> */}
    </>
  );
}

export default App;
