import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Header from "@/components/sections/Header";
import Projects from "@/components/sections/Projects";
import Work from "@/components/sections/Work";

export default function HomePage() {

  return (
    <div>
      <Header/>
      <About/>
      <Work/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}