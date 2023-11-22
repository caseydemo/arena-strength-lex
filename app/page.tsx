import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <TopNav />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}
