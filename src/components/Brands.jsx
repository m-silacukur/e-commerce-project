import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";
import logo4 from "../assets/logo-4.png";
import logo5 from "../assets/logo-5.png";
import logo6 from "../assets/logo-6.png";

export default function Brands() {
  return (
    <section className="w-full bg-[#FAFAFA] font-[Montserrat]">

      <div className="hidden md:block">
        <div className="w-full h-43.75">
          <div className="h-full w-262.5 mx-auto flex items-center justify-between">

            <div className="w-38.25 h-8.5 flex items-center justify-center">
              <img
                src={logo1}
                alt="Brand logo 1"
                className="w-25.75 h-8.5 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-36.5 h-14.75 flex items-center justify-center">
              <img
                src={logo2}
                alt="Brand logo 2"
                className="w-20.75 h-14.75 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-38 h-18.75 flex items-center justify-center">
              <img
                src={logo3}
                alt="Brand logo 3"
                className="w-25.5 h-18.75 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-37.75 h-10.5 flex items-center justify-center">
              <img
                src={logo4}
                alt="Brand logo 4"
                className="w-25.75 h-10.5 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-37.75 h-15.5 flex items-center justify-center">
              <img
                src={logo5}
                alt="Brand logo 5"
                className="w-26 h-15.5 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-37.75 h-18 flex items-center justify-center">
              <img
                src={logo6}
                alt="Brand logo 6"
                className="w-19 h-18 object-contain"
                draggable="false"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="w-full">
          <div className="w-full flex flex-col items-center gap-12 pt-27.5 pb-24">

            <div className="w-38.25 h-12.5 flex items-center justify-center">
              <img
                src={logo1}
                alt="Brand logo 1"
                className="w-37.25 h-12.5 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-36.5 h-24.75 flex items-center justify-center">
              <img
                src={logo2}
                alt="Brand logo 2"
                className="w-34.75 h-24.75 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-38 h-27.25 flex items-center justify-center">
              <img
                src={logo3}
                alt="Brand logo 3"
                className="w-37.25 h-27.25 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-37.25 h-15 flex items-center justify-center">
              <img
                src={logo4}
                alt="Brand logo 4"
                className="w-37.25 h-15 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-37.75 h-23 flex items-center justify-center">
              <img
                src={logo5}
                alt="Brand logo 5"
                className="w-38.25 h-23 object-contain"
                draggable="false"
              />
            </div>

            <div className="w-37.75 h-35.5 flex items-center justify-center">
              <img
                src={logo6}
                alt="Brand logo 6"
                className="w-[148.516px] h-[141.715px] object-contain"
                draggable="false"
              />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
