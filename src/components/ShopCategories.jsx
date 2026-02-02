import shopK1 from "../assets/shop-k1.png";
import shopK2 from "../assets/shop-k2.png";
import shopK3 from "../assets/shop-k3.png";
import shopK4 from "../assets/shop-k4.png";
import shopK5 from "../assets/shop-k5.png";

const categories = [
  { id: 1, img: shopK1 },
  { id: 2, img: shopK2 },
  { id: 3, img: shopK3 },
  { id: 4, img: shopK4 },
  { id: 5, img: shopK5 },
];

function CategoryCard({ img }) {
  return (
    <div
      className="
        relative overflow-hidden
        w-83 h-75
        md:w-51.25 md:h-55.75
        bg-[#F3F3F3]
      "
    >
      <img src={img} alt="CLOTHS" className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-[#21212140]" />

      <div className="absolute inset-0">
  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:hidden">
          <p className="w-16.75 h-6 text-white font-[Montserrat] font-bold text-[16px] leading-6 tracking-[0.1px]">
            CLOTHS
          </p>
          <p className="mt-3 text-white font-[Montserrat] font-bold text-[14px] leading-6 tracking-[0.2px]">
            5 Items
          </p>
        </div>

        <div className="hidden md:block">
          <p
            className="
              absolute
              top-21.75 left-17.5
              w-16.75 h-6
              text-white font-[Montserrat] font-bold
              text-[16px] leading-6 tracking-[0.1px]
              text-center
            "
          >
            CLOTHS
          </p>

          <p
            className="
              absolute
              top-[120.5px] left-[76.5px]
              w-13.5 h-5
              text-white font-[Montserrat] font-normal
              text-[14px] leading-5 tracking-[0.2px]
              text-center
            "
          >
            5 Items
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ShopCategories() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto w-full md:w-360">
        <div
          className="
            mx-auto w-full
            px-6
            md:px-0 md:ml-44 md:w-272
            py-6 md:pt-0 md:pb-12
          "
        >
          <div className="flex flex-col items-center gap-4.5 md:flex-row md:items-start md:gap-3.75 md:h-55.75">
            {categories.map((c) => (
              <CategoryCard key={c.id} img={c.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
