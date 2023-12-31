import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

// Layout page

import Layout from "./layout/layout";
import Doctor from './pages/Doctor/DoctorDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/products" element={<Products />} />
      <Route path="/doctor" element={<Doctor />} >
        <Route index element={(
          <h3>
            all patients
          </h3>
          )} />
        <Route path='persecription' element={(
          <h3>
            all persecription
          </h3>

        )} />
        <Route path='dates' element={(
          <h3>
            all dates
          </h3>

        )} />
      </Route>
      <Route path="/test_inline_component" element={(
        <div>
          <h3>
            test hee
          </h3>
        </div>
      )} />
    </Route >
  )
)
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    // <div className="App">
    //   <BrowserRouter>
    //     <main>
    //       <div className="main_container">
    //         <Routes>

    //         </Routes>
    //       </div>
    //     </main>
    //   </BrowserRouter>
    // </div>
  )
}

export default App