import promoImg from "../assets/home-5.png";

export default function NeuralUniverse() {
  return (
    <section className="w-full bg-white">
 
      <div className="hidden md:flex mx-auto max-w-[1440px] h-[682px]">

        <div className="flex justify-end w-1/2">
          <img
            src={promoImg}
            alt="Part of the Neural Universe"
            className="w-[704px] h-[682px] object-contain translate-x-[20px]"
          />
        </div>

        <div className="w-1/2 flex items-center">
          <div className="w-[573px] h-[326px] flex flex-col gap-[30px] translate-x-[50px]">
            <p className="text-[#BDBDBD] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">
              SUMMER 2020
            </p>

            <h2 className="text-[#252B42] font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px]">
              Part of the Neural <br /> Universe
            </h2>

            <p className="text-[#737373] font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px]">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </p>

            <div className="flex gap-[10px]">
              <button
                type="button"
                className="w-[156px] h-[52px] rounded-[5px] bg-[#2DC071]
                           flex items-center justify-center
                           text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px]"
              >
                BUY NOW
              </button>

              <button
                type="button"
                className="w-[173px] h-[52px] rounded-[5px] border border-[#2DC071] bg-white
                           flex items-center justify-center
                           text-[#2DC071] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px]"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden w-full pt-[120px]">
        <div className="flex flex-col items-center gap-[28px]">

          <div className="flex flex-col items-center text-center gap-[33px] px-4">
            <p className="text-[#BDBDBD] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">
              SUMMER 2020
            </p>

            <h2 className="text-[#252B42] font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px]">
              Part of the <br /> Neural <br /> Universe
            </h2>

            <p className="max-w-[262px] text-[#737373] font-montserrat font-normal text-[20px] leading-[30px] tracking-[0.2px]">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex flex-col gap-[18px] items-center">
              <button
                type="button"
                className="w-[151px] h-[52px] rounded-[5px] bg-[#23A6F0]
                           flex items-center justify-center
                           text-white font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px]"
              >
                BUY NOW
              </button>

              <button
                type="button"
                className="w-[162px] h-[52px] rounded-[5px] border border-[#23A6F0] bg-white
                           flex items-center justify-center
                           text-[#23A6F0] font-montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px]"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <img
              src={promoImg}
              alt="Part of the Neural Universe"
              className="w-[414px] h-[407px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
