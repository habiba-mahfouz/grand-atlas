export function Button({ content, css, onClick,icon }) {
  return (
    <button
      onClick={onClick}
      className={`${css} font-lato flex justify-center items-center`}
    >
      {content}
      {icon && <img src={icon} alt="" className="ml-[9px] h-4 w-4" />}
    </button>
  );
}

export function Title({ content, width, css }) {
  return (
    <div className={`flex flex-col items-center justify-center ${css}`}>
      <h2 className="text-[32px] tex-black font-playfair font-semibold pb-1">
        {content}
      </h2>
      <div className={`h-[6px] rounded-[2px] bg-[#C34B4B] ${width}`}></div>
    </div>
  );
}


export function Banner({ icon , content, size }) {
  return (
    <div className="flex min-w-0 items-center gap-1">
          <img className={`${size}`} src={`${icon}`} />
          <h6 className="truncate font-lato text-[10px] text-[#A18E77] sm:text-xs xl:text-sm">{content}</h6>
    </div>
  );
}



