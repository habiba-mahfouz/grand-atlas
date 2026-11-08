import select_arrow from "../../assets/icons/Units/select_arrow.svg";

export default function UnitsComponent({ value, onChange, placeholder, options }) {
  return (
    <div className="relative flex h-14 min-w-0 w-full items-center">
      <select
        className="h-full w-full appearance-none rounded-md border border-[#CEC7C7] bg-white pl-3 pr-9 font-lato text-sm font-bold text-[#847D7D] sm:text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map(({ value: optionValue, label }) => (
          <option key={optionValue} value={optionValue}>
            {label}
          </option>
        ))}
      </select>
      <img
        src={select_arrow}
        alt=""
        className="pointer-events-none absolute right-3 top-1/2 h-[9px] w-[18px] -translate-y-1/2"
      />
    </div>
  );
}
