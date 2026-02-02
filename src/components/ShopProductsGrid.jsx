import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShopProductCard from "./ShopProductCard.jsx";

export default function ShopProductsGrid() {
  const items = useSelector((s) => s.products.items);

  return (
    <section className="w-full bg-white font-[Montserrat]">
      <div className="mx-auto w-full md:w-360">
        <div className="mx-auto w-full px-6 md:px-0 md:ml-48.75 md:w-262.5 py-12">
          <div className="w-full md:w-262">
            <div
              className="
                grid grid-cols-1
                md:grid-cols-4
                gap-y-7.5
                md:gap-x-7.5 md:gap-y-7.5
                justify-items-center
                md:justify-items-start
              "
            >
              {items.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="block">
                  <ShopProductCard product={p} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
