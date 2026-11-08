import { Link } from "react-router-dom";

export function Info({ icon, desc, content }) {
  return (
    <div className="flex flex-row items-start sm:items-center mb-3 gap-2.5">
      <img className="size-5 sm:size-6 shrink-0 mt-0.5 sm:mt-0" alt={desc} src={`${icon}`} />
      <p className="text-[#8E1616] text-sm sm:text-base lg:text-[18px] font-lato font-medium break-words">
        {content}
      </p>
    </div>
  );
}

export function Inputs({ p, content, h }) {
  return (
    <div className={`${p}`}>
      <h5 className="text-base sm:text-lg lg:text-[20px] text-black font-playfair font-semibold pb-1">
        {content}
      </h5>
      <input
        type="text"
        className={`${h} w-full rounded-[8px] text-sm sm:text-base lg:text-[18px] font-lato font-medium text-black px-3 sm:px-4 border border-[#CEC7C7] focus:border-[#8E1616] focus:outline-none bg-[#f7f7f7] transition-colors`}
      />
    </div>
  );
}

export function Hours({ day, g }) {
  return (
    <div className={`flex flex-row items-center mb-1.5 text-sm sm:text-base lg:text-[18px] font-lato font-medium ${g ?? "gap-4 sm:gap-8"}`}>
      <h5 className="text-[#8E1616] min-w-[100px]">{day}</h5>
      <h5 className="text-[#847D7D]">9:00 AM - 5:00 PM</h5>
    </div>
  );
}

export function Links({ icon, desc, to }) {
  return (
    <Link to={to} target="_blank" rel="noopener noreferrer">
      <img
        src={`${icon}`}
        alt={desc}
        className="border-[2px] sm:border-[3px] rounded-full border-[#8E1616] size-9 sm:size-[42px] p-2 hover:bg-[#8E1616]/10 transition-colors"
      />
    </Link>
  );
}
