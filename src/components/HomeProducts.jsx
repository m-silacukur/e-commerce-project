import HomeProductCard from "./HomeProductCard.jsx";

import p1 from "../assets/product-1.png";
import p2 from "../assets/product-2.png";
import p3 from "../assets/product-3.png";
import p4 from "../assets/product-4.png";
import p5 from "../assets/product-5.png";
import p6 from "../assets/product-6.png";
import p7 from "../assets/product-7.png";
import p8 from "../assets/product-8.png";

const products = [p1, p2, p3, p4, p5, p6, p7, p8];

export default function HomeProducts() {
  return (
    <section className="w-full bg-white font-[Montserrat]">

      <div className="mx-auto w-full">

        <div className="mx-auto w-full md:w-281 md:ml-48.75 md:mr-48.75 px-10.75 md:px-0 py-20">

          <div className="mx-auto flex flex-col items-center gap-2">
            <p className="text-[#737373] font-normal text-[1.25rem] leading-7.5 tracking-[0.2px] text-center">
              Featured Products
            </p>

            <h3 className="text-[#252B42] font-bold text-[1.5rem] leading-8 tracking-[0.1px] text-center">
              BESTSELLER PRODUCTS
            </h3>

            <p className="text-[#737373] font-normal text-sm leading-5 tracking-[0.2px] text-center max-w-86.75">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="mt-20 mx-auto w-full md:w-262.25">
            <div
              className="
                grid grid-cols-1
                md:grid-cols-4
                gap-7.5
                justify-items-center
              "
            >
              {products.map((img, idx) => (
                <HomeProductCard key={idx} imgSrc={img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
