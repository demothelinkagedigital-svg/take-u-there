import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Properties from "./pages/Properties";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="properties" element={<Properties />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
