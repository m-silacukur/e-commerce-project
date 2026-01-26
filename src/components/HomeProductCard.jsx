export default function HomeProductCard({ imgSrc }) {
  return (
    <div className="w-59.5 md:w-59.5">

      <div className="w-59.75 h-106.75 bg-[#F5F5F5] overflow-hidden">
        <img
          src={imgSrc}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-59.75 h-47 flex flex-col items-center gap-2.5 pt-6.25 pr-6.25 pb-8.75 pl-6.25">
        <h4 className="text-[#252B42] font-bold text-base leading-6 tracking-[0.1px] text-center">
          Graphic Design
        </h4>

        <p className="text-[#737373] font-bold text-sm leading-6 tracking-[0.2px] text-center">
          English Department
        </p>

        <div className="w-27 h-8.5 flex items-center justify-center gap-1.25 pt-1.25 pr-0.75 pb-1.25 pl-0.75">
          <span className="text-[#BDBDBD] font-bold text-base leading-6 tracking-[0.1px] text-center">
            $16.48
          </span>
          <span className="text-[#23856D] font-bold text-base leading-6 tracking-[0.1px] text-center">
            $6.48
          </span>
        </div>

        <div className="flex items-center gap-[0.38rem] h-4">
          <span className="w-4 h-4 rounded-full bg-[#23A6F0]" />
          <span className="w-4 h-4 rounded-full bg-[#23856D]" />
          <span className="w-4 h-4 rounded-full bg-[#E77C40]" />
          <span className="w-4 h-4 rounded-full bg-[#252B42]" />
        </div>
      </div>
    </div>
  );
}
