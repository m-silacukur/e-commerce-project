import Brands from "../components/Brands.jsx";
import ShopCategories from "../components/ShopCategories.jsx";
import ShopPagination from "../components/ShopPagination.jsx";
import ShopProductsGrid from "../components/ShopProductsGrid.jsx";
import ShopToolbar from "../components/ShopToolbar.jsx";

export default function ShopPage() {
  return (
    <main className="w-full bg-white font-[Montserrat]">
    
      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto w-full md:w-360 px-6 md:px-0">
          <div className="w-full h-50.5 md:h-23 py-6">
           
            <div className="mx-auto w-full md:w-262.25 md:h-11 md:flex md:items-center md:justify-between md:gap-7.5">
         
              <div className="h-20 md:h-auto flex items-center justify-center md:justify-start">
                <div className="md:w-127.5 md:h-8 flex items-center md:justify-start justify-center">
                  <h1 className="w-15.75 h-8 text-[#252B42] font-bold text-[24px] leading-8 tracking-[0.1px] text-center">
                    Shop
                  </h1>
                </div>
              </div>

              <div className="h-11 md:h-auto flex items-center justify-center md:justify-end">
               
                <div className="md:w-127.25 md:h-11 flex items-center justify-center md:justify-end gap-3.75 md:gap-1.25 py-2.5 md:py-0">
                  <span className="w-10.75 h-6 text-[#252B42] font-bold text-[14px] leading-6 tracking-[0.2px] text-center">
                    Home
                  </span>

                  <span className="text-[#BDBDBD] font-bold text-[14px] leading-6 md:text-[16px] md:leading-4">
                    {">"}
                  </span>

                  <span className="w-9.25 h-6 font-bold text-[14px] leading-6 tracking-[0.2px] text-center text-[#737373] md:text-[#BDBDBD]">
                    Shop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ShopCategories />
      <ShopToolbar />
      <ShopProductsGrid />
      <ShopPagination />
      <Brands />
    </main>
  );
}
