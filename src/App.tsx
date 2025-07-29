import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import FirstVideo from "./sections/FirstVideo";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />

      <Hero />

      <FirstVideo />
    </main>
  );
};

export default App;
