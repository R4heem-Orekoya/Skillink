import { useEffect } from "react";
import Designresources from "./Pages/Designresources";
import Home from "./Pages/Home";
import Motivation from "./Pages/Motivation";
import Projects from "./Pages/Projects";
import Roadmaps from "./Pages/Roadmaps";
import Youtube from "./Pages/Youtube";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from "./components/ui/toaster";

const App = () => {
  const { pathname: location } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)  
  }, [location])
  
  return (
    <>
      <div className="min-h-screen py-20 w-[min(1200px,90%)] font-sans mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yt-videos" element={<Youtube />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog-posts" element={<Footer />} />
          <Route path="/design-resources" element={<Designresources />} />
          <Route path="/motivation" element={<Motivation />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </>
  )
}

export default App

