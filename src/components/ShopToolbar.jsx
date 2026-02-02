import { useDispatch, useSelector } from "react-redux";
import { LayoutGrid, List, ChevronDown } from "lucide-react";
import { setSort, setView } from "../store/shopSlice.js";

export default function ShopToolbar() {
  const dispatch = useDispatch();
  const sort = useSelector((s) => s.shop.sort);
  const view = useSelector((s) => s.shop.view);

  return (
    <section className="w-full bg-white font-[Montserrat]">
      <div className="mx-auto w-full md:w-360">
        <div className="mx-auto w-full px-6 md:px-0 md:ml-48.75 md:w-262.5 py-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0 md:h-12.5">
            <div className="w-42 h-6 flex items-center justify-center md:justify-start">
              <span className="text-[#737373] font-bold text-[14px] leading-6 tracking-[0.2px]">
                Showing all 12 results
              </span>
            </div>

            <div className="w-44.25 h-11.5 flex items-center justify-center gap-3.75">
              <span className="text-[#737373] font-bold text-[14px] leading-6 tracking-[0.2px]">
                Views:
              </span>

              <button
                type="button"
                onClick={() => dispatch(setView("grid"))}
                className={`w-11.5 h-11.5 flex items-center justify-center rounded-[5px] border border-[#ECECEC] ${
                  view === "grid" ? "bg-[#FAFAFA]" : "bg-white"
                }`}
              >
                <LayoutGrid size={16} className="text-[#252B42]" />
              </button>

              <button
                type="button"
                onClick={() => dispatch(setView("list"))}
                className={`w-11.5 h-11.5 flex items-center justify-center rounded-[5px] border border-[#ECECEC] ${
                  view === "list" ? "bg-[#FAFAFA]" : "bg-white"
                }`}
              >
                <List size={16} className="text-[#737373]" />
              </button>
            </div>

            <div className="w-63 h-12.5 flex items-center justify-center gap-3.75">
              <div className="relative w-35.25 h-12.5">
                <select
                  value={sort}
                  onChange={(e) => dispatch(setSort(e.target.value))}
                  className="w-full h-full appearance-none rounded-[5px] border border-[#ECECEC] pl-4.5 pr-10 text-[#737373] font-normal text-[14px] leading-7 tracking-[0.2px] bg-white focus:outline-none"
                >
                  <option value="popularity">Popularity</option>
                  <option value="newest">Newest</option>
                  <option value="bestseller">Best Sellers</option>
                  <option value="top-rated">Top Rated</option>
                </select>

                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-4.5 top-1/2 -translate-y-1/2 text-[#737373]"
                />
              </div>

              <button
                type="button"
                className="w-23.5 h-12.5 flex items-center justify-center rounded-[5px] bg-[#23A6F0] px-5"
              >
                <span className="text-white font-bold text-[14px] leading-6 tracking-[0.2px]">
                  Filter
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
