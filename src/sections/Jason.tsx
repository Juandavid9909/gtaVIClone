import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Jason = () => {
  useGSAP(() => {
    gsap.set(".jason", {
      marginTop: "-80vh",
    });

    gsap
      .timeline({
        scrollTrigger: {
          end: "10% center",
          scrub: 2,
          start: "top 90%",
          trigger: ".jason",
        },
      })
      .to(".first-vd", {
        duration: 1,
        ease: "power1.inOut",
        opacity: 0,
      });

    gsap.to(".jason .img-box", {
      scrollTrigger: {
        end: "80% center",
        scrub: 2,
        start: "top center",
        trigger: ".jason",
      },
      duration: 1,
      ease: "power1.inOut",
      y: -300,
    });
  });

  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>

        <h2>Jason wants an easy life, but things just keep getting harder.</h2>

        <p>
          Jason grew up around grifters and crooks. After a stint in the Army
          trying to shake off his troubled teens, he found himself in the Keys
          doing what he knows best, working for local drug runners. It might be
          time to try something new.
        </p>

        <div className="jason-2">
          <img src="/images/jason-2.webp" />
        </div>
      </div>

      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <img src="/images/jason-1.webp" />
        </div>

        <div className="jason-3">
          <img src="/images/jason-3.webp" />
        </div>
      </div>
    </section>
  );
};

export default Jason;
