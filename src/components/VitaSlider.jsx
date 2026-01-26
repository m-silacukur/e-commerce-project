import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "../assets/home-3.png";
import slide2 from "../assets/home-3.png";

const slides = [
  { id: 0, img: slide1 },
  { id: 1, img: slide2 || slide1 },
];

export default function VitaSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative w-full bg-[#23856D] h-[1230px] md:h-[709px] overflow-hidden border border-white/20 rounded-[5px]">

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
      >
        <ChevronLeft size={48} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
      >
        <ChevronRight size={48} strokeWidth={1.5} />
      </button>


      <div className="mx-auto md:w-[1036px] px-6 md:px-0 pt-[112px] md:pt-[112px] pb-0 md:pb-[112px] h-full relative">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-start md:h-[599px] gap-[30px]">

          <div className="w-full md:w-[509px] flex flex-col gap-[30px] text-center md:text-left z-10 min-h-[429px] md:min-h-0">
            <p className="text-white font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px]">
              SUMMER 2020
            </p>

            <h2 className="text-white font-montserrat font-bold text-[44px] md:text-[58px] leading-[56px] md:leading-[80px] tracking-[0.2px]">
              Vita Classic <br /> Product
            </h2>

            <p className="text-white font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] md:w-[341px] mx-auto md:mx-0">
              We know how large objects will act, We know <br />
              how are objects will act, We know
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-4 md:gap-[34px]">
              <span className="text-[#BDBDBD] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-center">
                $16.48
              </span>

              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="md:hidden text-white/90 hover:text-white"
                >
                  <ChevronLeft size={44} strokeWidth={1.5} />
                </button>

                <button
                  type="button"
                  className="bg-[#2DC071] text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] w-[184px] h-[52px] rounded-[5px] px-[40px] py-[15px] whitespace-nowrap"
                >
                  ADD TO CART
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="md:hidden text-white/90 hover:text-white"
                >
                  <ChevronRight size={44} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          <div className="md:static absolute bottom-[-40px] left-1/2 -translate-x-1/2 md:translate-x-0 w-full flex justify-center md:justify-end pointer-events-none">
            <img
              src={slides[index].img}
              alt="Vita Product"
              className="w-[416px] h-[681px] md:w-[443px] md:h-[685px] object-contain translate-y-[16px]"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={() => setIndex(0)}
          aria-label="Go to slide 1"
          className={`h-[8px] w-[62px] ${index === 0 ? "bg-white" : "bg-white/40"}`}
        />
        <button
          type="button"
          onClick={() => setIndex(1)}
          aria-label="Go to slide 2"
          className={`h-[8px] w-[62px] ${index === 1 ? "bg-white" : "bg-white/40"}`}
        />
      </div>
    </section>
  );
}
