import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";


export default function Home() {
  return (
    <main>
      <TopNav />
      <Hero />
      <Services />
      <About />
      <h1>Home</h1>
    </main>
  );
}
