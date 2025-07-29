import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Outro = () => {
  useGSAP(() => {
    gsap.set(".final-message", {
      marginTop: "-100vh",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        end: "top 10%",
        scrub: true,
        start: "top 30%",
        trigger: ".final-message",
      },
    });

    tl.to(".final-content", {
      duration: 1,
      ease: "power1.inOut",
      opacity: 0,
    });

    tl.to(
      ".final-message",
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    );
  });

  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img alt="logo" className="md:w-72 w-52" src="/images/logo.webp" />

        <div>
          <h3 className="gradient-title">
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img className="md:w-32 w-20" src="/images/ps-logo.svg" />

          <img className="md:w-52 w-40" src="/images/x-logo.svg" />
        </div>
      </div>
    </section>
  );
};

export default Outro;
