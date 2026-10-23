import useTheme from "./hooks/useTheme";
import { profile } from "./data/portfolio";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Community from "./components/Community";
import Involvement from "./components/Involvement";
import FeaturedWork from "./components/FeaturedWork";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import GitHubActivity from "./components/GitHubActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

// The page is just the sections stacked in order. Reorder or remove lines to change the page.
export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} logo={profile.initials} />
      <main className="mx-auto max-w-[720px] px-5">
        <Hero />
        <Experience />
        <Community />
        <Involvement />
        <FeaturedWork />
        <Projects />
        <Technologies />
        <Certifications />
        <Education />
        <Hobbies />
        <GitHubActivity />
        <Contact />
        <Footer />
      </main>
      <FloatingActions />
    </>
  );
}
