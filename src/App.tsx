import type { JSX } from "react";

import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = (): JSX.Element => {
  return (
    <main>
      <div>
        <h1 className="text-3xl text-pink">
          Welcome the world of GTA and GSAP!
        </h1>
      </div>
    </main>
  );
};

export default App;
