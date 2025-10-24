import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import useMobile from './hooks/useMobile';



function App() {
  const {isMobile} = useMobile();
  console.log("🚀 ~ App ~ isMobile:", isMobile)
  
  const router = createBrowserRouter([
      {
         path: "/",
         element: <Index />

      }
   ]);

  return (
   <RouterProvider router={router}/>
  );
}

export default App;