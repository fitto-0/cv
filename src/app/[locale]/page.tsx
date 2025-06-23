import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Header from "@/components/sections/Header";
import Work from "@/components/sections/Work";

export default function HomePage() {

  return (
    <div>
      <Header/>
      <About/>
      <Work/>
      <Education/>
      <Contact/>
    </div>
  );
}