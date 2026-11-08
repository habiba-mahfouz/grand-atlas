import { Link } from "react-router-dom";

export function Info({icon,desc,content}) {
  return (
    <div className="flex flex-row items-center mb-[10px] gap-[2px]">
      <img className="size-6" alt={desc} src={`${icon}`} />
      <p className="text-[#8E1616] text-[18px] font-lato font-medium ">
       {content}
      </p>
    </div>
  );
}

export function Inputs({p,content,h}) {
  return (
    <div className={`${p}`}>
            <h5 className="text-[20px] text-black font-playfair font-semibold pb-[4px] ">{content}</h5>
            <input
            type="text"
            className={`${h} w-full rounded-[8px] text-[20px] font-lato font-bold text-black
            pl-4 border-1 border-[#CEC7C7] focus:outline-none bg-[#f7f7f7]`}
            />
    </div>
  )
}

export function Hours({day,g}) {
  return (
    <div className={`flex flex-row mb-[4px] text-[20px] font-lato font-medium ${g}`}>
      <h5 className="text-[#8E1616]">{day}</h5>
      <h5 className="text-[#847D7D]">9:00AM - 5:00 PM</h5>
    </div>
  );
}


export function Links({icon,desc,to}) {
  return (
    <Link to={to}>
      <img
        src={`${icon}`}
        alt={desc}
        className="border-[3px] rounded-full border-[#8E1616] size-[42px] p-2"
      />
    </Link>
  );
}