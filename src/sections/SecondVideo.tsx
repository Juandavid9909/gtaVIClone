import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SecondVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".lucia", {
      marginTop: "-60vh",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        end: "bottom top",
        pin: true,
        scrub: 2,
        start: "top top",
        trigger: ".lucia",
      },
    });

    tl.to(".lucia", {
      duration: 1,
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
  });

  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          className="size-full object-cover second-vd"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
          src="/videos/output2.mp4"
          style={{
            objectPosition: "15% 0%",
          }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;
