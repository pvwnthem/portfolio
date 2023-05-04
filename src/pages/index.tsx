import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import { Navbar } from "@/components/navbar";
import React, { useRef } from "react";
import Contact from "@/components/contact";

export default function Index() {
  
  return (
   <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
   </div>
  )
}
