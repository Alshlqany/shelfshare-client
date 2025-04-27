import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Home />} /> */}
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
