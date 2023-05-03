import Home from "@/components/home";
import About from "@/components/about";
import Projects from "@/components/projects";
import { Navbar } from "@/components/navbar";
import useScrollSnap from 'react-use-scroll-snap';
import React, { useRef } from "react";
import Contact from "@/components/contact";

export default function Index() {

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 25, delay: 1 });

  return (
   <div ref={scrollRef}>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
   </div>
  )
}
