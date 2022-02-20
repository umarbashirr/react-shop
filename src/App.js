import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "./GlobalStyles";

import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default App;
