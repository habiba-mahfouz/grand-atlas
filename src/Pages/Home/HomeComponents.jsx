export function Benchmark({ icon, number, content }) {
  return (
    <div className="flex flex-col justify-center items-center w-[325px] h-[135px] rounded-[12px] border-1 border-[#CEC7C7] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] py-[12px] ">
      <img className="size-[39px]" src={`${icon}`} />
      <p className="text-[#000000] text-[24px] font-lato font-bold">{number}</p>
      <p className="text-[#554E4E] text-[16px] font-lato">{content}</p>
    </div>
  );
}

export function Masterpieces({ image, content }) {
  return (
    <div className="w-[400px] shrink-0 gap-[25px] flex flex-col">
      <img className="h-[250px] w-full rounded-[16px] object-cover" src={`${image}`} />
      <p className="text-[#000000] text-[20px] font-playfair font-semibold ml-[10px]">
        {content}
      </p>
    </div>
  );
}
