import { Button, Banner } from "./Components.jsx";

export default function CardUnits({
  badge,
  content,
  image,
  i1,
  i2,
  i3,
  c1,
  c2,
  c3,
  s1,
  s2,
  bexist,
  pexist,
  texist,
  iexist,
  title,
  price,
  desc,
  click,
}) {
  return (
    <div className="relative flex w-full min-w-0 flex-col overflow-hidden rounded-[12px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      {badge && (
        <span
          id="badge"
          className="absolute right-2 top-3 rounded-[4px] bg-[#21E008] px-2 py-1 font-lato text-xs font-bold text-white sm:right-3 sm:top-4 sm:text-sm"
        >
          {content ?? badge}
        </span>
      )}

      <img
        className="aspect-[1.55/1] w-full object-cover"
        alt="bathroom"
        src={image}
      />

      {bexist && (
        <div
          id="list"
          className="flex min-h-[38px] w-full flex-row items-center justify-between  border-y border-[#CEC7C7] px-2 sm:px-3"
        >
          <Banner icon={i1} content={c1} size={s1} />
          <div className="h-6 w-px shrink-0 bg-[#A18E77]" />
          <Banner icon={i2} content={c2} size={s2} />
          <div className="h-6 w-px shrink-0 bg-[#A18E77]" />
          <Banner icon={i3} content={c3} size={"size-[18px]"} />
        </div>
      )}

      {texist && (
        <>
          <div className="mt-3 flex w-full min-w-0 items-center justify-between gap-2 px-3">
            <h4 className="min-w-0 flex-1 truncate font-playfair text-sm font-semibold text-[#8E1616] sm:text-base xl:text-xl">
              {title}
            </h4>
            {pexist && (
              <h4 className="shrink-0 font-lato text-xs font-semibold text-[#A18E77] sm:text-sm xl:text-lg">
                {price}
              </h4>
            )}
          </div>
          <p className="mt-3 mb-4 line-clamp-3 w-full px-3 font-lato text-xs leading-4 text-[#847D7D] sm:text-sm">
            {desc}
          </p>
        </>
      )}

      {iexist && (
        <div className="mx-[17px]  flex flex-row items-center gap-[8px] mt-[10px] mb-[40px]">
          <img className="h-[35px] w-[35px] object-cover  " alt="" src={""} />
          <div className="flex flex-col ">
            <h5 className="font-lato text-[20px] font-bold leading-tight text-[#333]  ">
              {title}
            </h5>
            <h6 className="font-lato text-[12px] text-[#847D7D]  ">
              Development
            </h6>
          </div>
        </div>
      )}

      <Button
        content={"View Details"}
        onClick={click}
        css={`mx-3 mb-4 h-[33px] w-[calc(100%-24px)] rounded-[8px] border border-[#8E1616] bg-white text-xs text-[#8E1616] sm:text-sm
          hover:bg-[#8E1616] hover:text-white`}
      />
    </div>
  );
}
