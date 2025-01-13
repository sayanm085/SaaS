import React from 'react';
import { useEffect,useState ,Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import{Header,Footer } from '@/Layout';
import Loader from './Layout/Loader/Loader';



function App() {


  let [navberhide , setNavberhide]=useState(false)

  useEffect(() => {
    let navstatus = localStorage.getItem('navberhide') === 'true';
    setNavberhide(navstatus);
  }, []);




  return (
    <>
      {navberhide ? <Outlet /> : (
        <>
          <Header />
          <Suspense fallback={<Loader/>}>
          <main>
            <Outlet />
          </main>
          </Suspense>
          <Footer />
        </>
      )}

    </>
  );
}

export default App
