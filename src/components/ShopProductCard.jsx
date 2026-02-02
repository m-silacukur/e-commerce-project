export default function ShopProductCard({ product }) {
  const { img, title, department, priceOld, priceNew, colors } = product;

  return (
    <article className="w-59.75 h-122 font-[Montserrat] flex flex-col items-center">
      <div className="w-59.75 h-75 overflow-hidden bg-[#F5F5F5]">
        <img src={img} alt={title} className="w-full h-full object-cover" draggable="false" />
      </div>

      <div className="w-full flex flex-col items-center pt-6">
        <h3 className="text-[#252B42] font-bold text-[16px] leading-6 tracking-[0.1px] text-center">
          {title}
        </h3>

        <p className="mt-2 text-[#737373] font-bold text-[14px] leading-6 tracking-[0.2px] text-center">
          {department}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-[#BDBDBD] font-bold text-[16px] leading-6 tracking-[0.1px] line-through">
            ${priceOld.toFixed(2)}
          </span>
          <span className="text-[#23856D] font-bold text-[16px] leading-6 tracking-[0.1px]">
            ${priceNew.toFixed(2)}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {colors.map((c, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
    </article>
  );
}
