import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/shopSlice.js";

export default function ShopPagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((s) => s.shop.currentPage);
  const totalPages = useSelector((s) => s.shop.totalPages);

  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  return (
    <section className="w-full bg-white font-[Montserrat]">
      <div className="mx-auto w-full md:w-360">
        <div className="mx-auto w-full px-6 md:px-0 md:w-281 md:ml-39.5 pb-12 md:pb-12 flex justify-center">
          <div className="w-78.25 h-18.5 rounded-[6.73px] border-[1.35px] border-[#BDBDBD] bg-white flex overflow-hidden">

            <button
              type="button"
              onClick={() => dispatch(setPage(1))}
              className="w-21 h-18.5 border-r border-[#BDBDBD] bg-[#F3F3F3] flex items-center justify-center"
            >
              <span className="text-[#BDBDBD] font-bold text-[14px] leading-6 tracking-[0.2px]">
                First
              </span>
            </button>

            {pages.map((p) => {
              const isActive = p === currentPage;

              const w = p === 1 ? "w-[46px]" : "w-[49px]";

              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => dispatch(setPage(p))}
                  className={`${w} h-18.5 border-r border-[#BDBDBD] flex items-center justify-center ${
                    isActive ? "bg-[#23A6F0]" : "bg-white"
                  }`}
                >
                  <span
                    className={`font-bold text-[14px] leading-6 tracking-[0.2px] ${
                      isActive ? "text-white" : "text-[#23A6F0]"
                    }`}
                  >
                    {p}
                  </span>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => dispatch(setPage(Math.min(currentPage + 1, totalPages)))}
              className="w-21.25 h-18.5 bg-white flex items-center justify-center"
            >
              <span className="text-[#23A6F0] font-bold text-[14px] leading-6 tracking-[0.2px]">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
