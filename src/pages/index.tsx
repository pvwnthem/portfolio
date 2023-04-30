import Home from "@/components/home";
import About from "@/components/about";
import { Navbar } from "@/components/navbar";
import useScrollSnap from 'react-use-scroll-snap';
import React, { useRef } from "react";

export default function Index() {

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 25, delay: 1 });

  return (
   <div ref={scrollRef}>
    <Navbar />
    <Home />
    <About />
   </div>
  )
}
