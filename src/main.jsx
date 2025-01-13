import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home} from './pages'
import NavberHide from '@/Hooks/NavberHide.jsx'
import NavberShow from '@/Hooks/NavberShow.jsx'


const Services = lazy(() => import('./pages/Services/Services.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const Checkout = lazy(() => import('./pages/Checkout/Checkout.jsx'))
const SignIn = lazy(() => import('./pages//sign-in/SignIn'))
const Products = lazy(() => import('./pages/Products/Products.jsx'))
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails.jsx'))
const MainProducts = lazy(() => import('./pages/Products/MainProducts'))
const Page404 = lazy(() => import('./pages/404 page/Page404'))


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App />}>
      <Route path='' element={<NavberShow />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='products' element={<MainProducts />}>
          <Route index element={<Products />} />
          <Route path='ProductDetails' element={<ProductDetails />} />
        </Route>
        <Route path='contact' element={<Contact />} />
        <Route path='ProductDetails' element={<ProductDetails />} />
        <Route path='*' element={<Page404/>}/>
      </Route>

      <Route path='checkout' element={<NavberHide />}>
        <Route index element={<Checkout />} />
      </Route>

      <Route path='signin' element={<NavberHide />}>
        <Route index element={<SignIn />} />
      </Route>
    </Route>
    </>
  ),
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    />
  </StrictMode>
);
