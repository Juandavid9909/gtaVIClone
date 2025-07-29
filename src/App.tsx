import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import Final from "./sections/Final";
import FirstVideo from "./sections/FirstVideo";
import Hero from "./sections/Hero";
import Jason from "./sections/Jason";
import Lucia from "./sections/Lucia";
import NavBar from "./sections/NavBar";
import Outro from "./sections/Outro";
import PostCard from "./sections/PostCard";
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

      <PostCard />

      <Final />

      <Outro />
    </main>
  );
};

export default App;
