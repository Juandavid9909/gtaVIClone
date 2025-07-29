import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useMaskSettings } from "../constants";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", {
      marginTop: "-80vh",
      opacity: 0,
    });

    gsap.set(".entrance-message", {
      marginTop: "0vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        end: "+=200%",
        pin: true, // Freezes the section in place
        scrub: 2.5,
        start: "top top",
        trigger: ".hero-section",
      },
    });

    tl.to(".fade-out", {
      ease: "power1.inOut",
      opacity: 0,
    })
      .to(".scale-out", {
        scale: 1,
      })
      .to(
        ".mask-wrapper",
        {
          ease: "power1.inOut",
          maskSize,
        },
        "<"
      )
      .to(".mask-wrapper", {
        opacity: 0,
      })
      .to(
        ".overlay-logo",
        {
          opacity: 1,
          onComplete: () => {
            gsap.to(".overlay-logo", {
              opacity: 0,
            });
          },
        },
        "<"
      )
      .to(
        ".entrance-message",
        {
          duration: 1,
          ease: "power1.inOut",
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        },
        "<"
      );
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          alt="background"
          className="scale-out"
          src="/images/hero-bg.webp"
        />

        <img
          alt="hero-logo"
          className="title-logo fade-out"
          src="/images/hero-text.webp"
        />

        <img
          alt="trailer"
          className="trailer-logo fade-out"
          src="/images/watch-trailer.png"
        />

        <div className="play-img fade-out">
          <img alt="play" className="w-7 ml-1" src="/images/play.png" />
        </div>
      </div>

      <div>
        <img
          alt="logo"
          className="size-full object-cover mask-logo"
          src="/images/big-hero-text.svg"
        />
      </div>

      <div className="fake-logo-wrapper">
        <img className="overlay-logo" src="/images/big-hero-text.svg" />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
