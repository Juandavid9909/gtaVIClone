import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import FirstVideo from "./sections/FirstVideo";
import Hero from "./sections/Hero";
import Jason from "./sections/Jason";
import Lucia from "./sections/Lucia";
import NavBar from "./sections/NavBar";
import SecondVideo from "./sections/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />

      <Hero />

      <FirstVideo />

      <Jason />

      <SecondVideo />

      <Lucia />
    </main>
  );
};

export default App;
