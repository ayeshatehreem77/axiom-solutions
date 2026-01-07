
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import "aos/dist/aos.css";
import "swiper/css";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}
