"use client"
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

