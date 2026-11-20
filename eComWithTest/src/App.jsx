
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import ProductForm  from "./Pages/ProductForm"
import Panier  from "./Pages/Panier"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products/new"element={<ProductForm />}
        />

        <Route path="/products/:id/edit"
          element={<ProductForm />}
        />

        <Route
          path="/panier"
          element={<Panier />}
        />

        <Route
          path="*"
          element={
            <div className="container text-center py-5">
              <h2>404 - Page introuvable</h2>
            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
