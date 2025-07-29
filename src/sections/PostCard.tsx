import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PostCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        end: "bottom center",
        scrub: true,
        start: "top center",
        trigger: ".post-card",
      },
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
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src="/images/overlay.webp" />

        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          ref={videoRef}
          src="/videos/postcard-vd.mp4"
        />

        <button className="group-hover:bg-yellow transition duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  );
};

export default PostCard;
