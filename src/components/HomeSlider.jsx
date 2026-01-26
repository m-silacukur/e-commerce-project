import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "../assets/home-1.png";
import slide2 from "../assets/home-2.png";

const slides = [
  { id: 1, img: slide1 },
  { id: 2, img: slide2 },
];

export default function HomeSlider() {
  const [active, setActive] = useState(0);

  function prev() {
    setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  }

  function next() {
    setActive((i) => (i === slides.length - 1 ? 0 : i + 1));
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="w-full font-[Montserrat]">
      <div
        className="
          relative mx-auto w-full
          h-188.25 md:h-179
          overflow-hidden rounded-[0.3125rem]
          border border-[#DEDEDE] bg-white
        "
      >
        <div
  className="absolute inset-0 bg-cover md:bg-center pointer-events-none"
  style={{
    backgroundImage: `url(${slides[active].img})`,
    backgroundPosition: "55% center", 
  }}
/>

        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-6 md:ml-[12.34375rem] md:mr-[12.34375rem] md:w-261">
            <div
              className="
                w-full md:w-149.75
                flex flex-col gap-8.75
                text-white md:text-left text-center
              "
            >
              <p className="font-bold text-base leading-6 tracking-[0.1px]">
                SUMMER 2020
              </p>

              <h2
                className="
                  font-bold tracking-[0.2px]
                  text-[2.5rem] leading-12.5
                  md:text-[3.625rem] md:leading-20
                "
              >
                NEW COLLECTION
              </h2>

              <p
                className="
                  font-normal text-[1.25rem] leading-7.5
                  tracking-[0.2px] text-[#FAFAFA]
                  max-w-94
                  mx-auto md:mx-0
                "
              >
                We know how large objects will act,
                <br className="md:hidden" />
                but things on a small scale.
              </p>

              <Link
                to="/shop"
                className="
                  inline-flex items-center justify-center
                  w-55.25 h-15.5
                  rounded-[0.3125rem]
                  bg-[#2DC071]
                  font-bold text-[1.5rem] leading-8 tracking-[0.1px]
                  text-white
                  mx-auto md:mx-0
                "
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="
            absolute z-20 top-1/2 -translate-y-1/2
            left-6 md:left-10
            text-white
          "
        >
          <ChevronLeft size={44} strokeWidth={2.5} />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="
            absolute z-20 top-1/2 -translate-y-1/2
            right-6 md:right-10
            text-white
          "
        >
          <ChevronRight size={44} strokeWidth={2.5} />
        </button>

        <div className="absolute z-20 left-1/2 -translate-x-1/2 bottom-6 md:bottom-14.75 flex h-2.5 w-31.5">
          <button
            type="button"
            onClick={() => setActive(0)}
            aria-label="Go to slide 1"
            className={`h-2.5 bg-white ${
              active === 0 ? "opacity-100" : "opacity-50"
            }`}
            style={{ width: "3.875rem" }} 
          />
          <button
            type="button"
            onClick={() => setActive(1)}
            aria-label="Go to slide 2"
            className={`h-2.5 bg-white ${
              active === 1 ? "opacity-100" : "opacity-50"
            }`}
            style={{ width: "3.9375rem" }} 
          />
        </div>
      </div>
    </section>
  );
}
