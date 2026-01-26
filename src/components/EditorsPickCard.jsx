import { Link } from "react-router-dom";

import menImg from "../assets/home-men.png";
import womenImg from "../assets/home-women.png";
import accessoriesImg from "../assets/home-accessories.png";
import kidsImg from "../assets/home-kids.png";

function PickCard({ to = "/", img, label, w, h, btnW, btnH, btnLeft, btnTop }) {
  return (
    <Link
      to={to}
      className="relative block overflow-hidden bg-[#F3F3F3]"
      style={{ width: w, height: h }}
    >
      <img
        src={img}
        alt={label}
        className="h-full w-full object-cover"
        draggable="false"
      />


      <div
        className="absolute flex items-center justify-center bg-white"
        style={{
          width: btnW,
          height: btnH,
          left: btnLeft,
          top: btnTop,
        }}
      >
        <span className="font-[Montserrat] font-bold text-base leading-6 tracking-[0.1px] text-[#252B42]">
          {label}
        </span>
      </div>
    </Link>
  );
}

export default function EditorsPickCard() {
  return (
    <section className="w-full bg-white font-[Montserrat]">
      <div className="mx-auto w-full md:w-262.5 px-11 md:px-0 md:ml-48.75 md:mr-48.75">
        <div className="py-20">
          <div className="mx-auto w-full max-w-151.75 text-center">
            <h2 className="text-[#252B42] font-bold text-2xl leading-8 tracking-[0.1px]">
              EDITOR’S PICK
            </h2>
            <p className="mt-2 text-[#737373] font-normal text-sm leading-5 tracking-[0.2px]">
              Problems trying to resolve the conflict between
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-7.5 md:flex-row md:gap-7.5">

            <div className="mx-auto md:mx-0">
              <div className="md:block hidden">
                <PickCard
                  to="/shop/men"
                  img={menImg}
                  label="MEN"
                  w={510}
                  h={500}
                  btnW={170}
                  btnH={48}
                  btnLeft={31}
                  btnTop={426}
                />
              </div>

              <div className="md:hidden">
                <PickCard
                  to="/shop/men"
                  img={menImg}
                  label="MEN"
                  w={325}
                  h={500}
                  btnW={170}
                  btnH={48}
                  btnLeft={31}
                  btnTop={426}
                />
              </div>
            </div>

            <div className="mx-auto md:mx-0">
              <div className="md:block hidden">
                <PickCard
                  to="/shop/women"
                  img={womenImg}
                  label="WOMEN"
                  w={240}
                  h={500}
                  btnW={136}
                  btnH={48}
                  btnLeft={21}
                  btnTop={434}
                />
              </div>

              <div className="md:hidden">
                <PickCard
                  to="/shop/women"
                  img={womenImg}
                  label="WOMEN"
                  w={325}
                  h={500}
                  btnW={136}
                  btnH={48}
                  btnLeft={21}
                  btnTop={434}
                />
              </div>
            </div>

            <div className="mx-auto md:mx-0 flex flex-col gap-4 md:gap-4">

              <div className="md:block hidden">
                <PickCard
                  to="/shop/accessories"
                  img={accessoriesImg}
                  label="ACCESSORIES"
                  w={240}
                  h={242}
                  btnW={170}
                  btnH={48}
                  btnLeft={14}
                  btnTop={171}
                />
                <div className="h-4" />
                <PickCard
                  to="/shop/kids"
                  img={kidsImg}
                  label="KIDS"
                  w={240}
                  h={242}
                  btnW={120}
                  btnH={48}
                  btnLeft={18}
                  btnTop={176}
                />
              </div>

              <div className="md:hidden flex flex-col gap-7.5">
                <PickCard
                  to="/shop/accessories"
                  img={accessoriesImg}
                  label="ACCESSORIES"
                  w={325}
                  h={242}
                  btnW={170}
                  btnH={48}
                  btnLeft={14}
                  btnTop={171}
                />
                <PickCard
                  to="/shop/kids"
                  img={kidsImg}
                  label="KIDS"
                  w={325}
                  h={242}
                  btnW={120}
                  btnH={48}
                  btnLeft={18}
                  btnTop={176}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
