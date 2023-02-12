import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes';
import AOS from 'aos';
function App() {
  useEffect(()=>{
    AOS.init();
  }, [])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
