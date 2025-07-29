import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FirstVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", {
      marginTop: "-150vh",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        end: "+=200% top",
        pin: true,
        scrub: true,
        start: "top top",
        trigger: ".first-vd-wrapper",
      },
    });

    tl.to(".hero-section", {
      delay: 0.5,
      ease: "power1.inOut",
      opacity: 0,
    });
    tl.to(".first-vd-wrapper", {
      duration: 2,
      ease: "power1.inOut",
      opacity: 1,
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(
          videoRef.current,
          {
            currentTime: videoRef.current!.duration,
            duration: 3,
            ease: "power1.inOut",
          },
          "<"
        );
      };
    }
  }, []);

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          className="first-vd"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
          src="/videos/output1.mp4"
        />
      </div>
    </section>
  );
};

export default FirstVideo;
