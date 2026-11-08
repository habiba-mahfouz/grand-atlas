export function Benchmark({ icon, number, content }) {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[110px] sm:min-h-[135px] rounded-[12px] border border-[#CEC7C7] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] px-2 py-3 sm:py-4 transition-all">
      <img className="size-7 sm:size-9 mb-1" src={`${icon}`} alt="" />
      <p className="text-[#000000] text-lg sm:text-2xl font-lato font-bold">{number}</p>
      <p className="text-[#554E4E] text-xs sm:text-sm lg:text-[16px] font-lato text-center leading-tight">{content}</p>
    </div>
  );
}

export function Masterpieces({ image, content }) {
  return (
    <div className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[400px] shrink-0 gap-3 sm:gap-4 md:gap-[25px] flex flex-col">
      <img className="h-[180px] sm:h-[220px] md:h-[250px] w-full rounded-xl sm:rounded-[16px] object-cover shadow-sm" src={`${image}`} alt={content} />
      <p className="text-[#000000] text-sm sm:text-base md:text-[20px] font-playfair font-semibold px-1">
        {content}
      </p>
    </div>
  );
}
