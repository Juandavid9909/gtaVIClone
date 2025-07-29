import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Final = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".final-content", {
      opacity: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        end: "90% top",
        pin: true,
        scrub: true,
        start: "top top",
        trigger: ".final",
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        end: "90% top",
        scrub: true,
        start: "top 80%",
        trigger: ".final",
      },
    });

    tl.to(".final-content", {
      duration: 1,
      ease: "power1.inOut",
      opacity: 1,
      scale: 1,
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
  });

  return (
    <section className="final">
      <div className="final-content size-full">
        <video
          className="size-full object-cover"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
          src="/videos/output3.mp4"
        />
      </div>
    </section>
  );
};

export default Final;
