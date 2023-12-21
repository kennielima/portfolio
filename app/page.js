"use client"
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
// import dynamic from 'next/dynamic';

// const Hero = dynamic(() => import('../components/Hero'));
// const TechStack = dynamic(() => import('../components/TechStack'));
// const Projects = dynamic(() => import('../components/Projects'));
// const About = dynamic(() => import('../components/About'));
// const Contact = dynamic(() => import('../components/Contact'));



export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Contact />
    </main>
  )
}

