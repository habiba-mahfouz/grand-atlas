import heroFacebook from "../assets/icons/Hero/hero-facebook.svg";
import heroTwitter from "../assets/icons/Hero/hero-twitter.svg";
import heroInstgram from "../assets/icons/Hero/hero-insta.svg";
import heroTiktok from "../assets/icons/Hero/hero-tiktok.svg";

import { Button } from "../Components/Components.jsx";
import { Title } from './Components.jsx'
import { Link } from "react-router-dom";

export function SubHero({c,image}) {
  return (
    <div>
        <Title
        content={c}
        width={"w-[164px]"}
        css={`mb-[48px] mt-[40px]`}
        />
        <div className="mx-[37px] mb-[61px] overflow-hidden rounded-[24px] shadow-[0px_4px_12px_rgba(0,0,0,0.15)]">
          <img
            className="block h-[525px] w-full object-cover"
            src={image}
            alt={c}
          />
        </div>
    </div>
  )
}

export function Hero({
  bg,
  title,
  desc,
  btn,
  icons,
}) {
  return (
    <>
      <div
        className="relative flex min-h-[500px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[calc(100vh-88px)] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-6 md:px-8 lg:px-12 text-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="mt-4 sm:mt-6 mb-4 sm:mb-6 w-full max-w-[92%] sm:max-w-[580px] md:max-w-[700px] lg:max-w-[850px] font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold leading-tight sm:leading-snug lg:leading-tight text-[#EEEEEE]">
          {title}
        </h1>
        <p className="mb-8 sm:mb-10 w-full max-w-[95%] sm:max-w-[620px] md:max-w-[780px] lg:max-w-[900px] font-lato text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-relaxed text-[#CEC7C7]">
          {desc}
        </p>
        {btn && (
          <Button
            content={"Explore"}
            css={"h-11 sm:h-12 md:h-[47px] w-48 sm:w-56 md:w-64 text-base sm:text-lg md:text-[20px] font-bold rounded-[4px] bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-[#EEEEEE] transition-all hover:brightness-110 active:scale-95 shadow-md"}
          />
        )}
        {icons && (
          <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-3 sm:gap-4 xl:absolute xl:left-6 2xl:left-9 xl:top-1/2 xl:mt-0 xl:-translate-y-1/2 xl:flex-col xl:gap-5">
            <Link to="https://Facebook.com">
              <img
                src={heroFacebook}
                alt="Facebook"
                className="size-9 sm:size-10 xl:size-12 rounded-full border-2 border-white/80 p-2 hover:border-white hover:bg-white/10 transition-all active:scale-90"
              />
            </Link>

            <Link to="https://Twitter.com">
              <img
                src={heroTwitter}
                alt="Twitter"
                className="size-9 sm:size-10 xl:size-12 rounded-full border-2 border-white/80 p-2 hover:border-white hover:bg-white/10 transition-all active:scale-90"
              />
            </Link>

            <Link to="https://Instagram.com">
              <img
                src={heroInstgram}
                alt="Instagram"
                className="size-9 sm:size-10 xl:size-12 rounded-full border-2 border-white/80 p-2 hover:border-white hover:bg-white/10 transition-all active:scale-90"
              />
            </Link>

            <Link to="https://TikTok.com">
              <img
                src={heroTiktok}
                alt="TikTok"
                className="size-9 sm:size-10 xl:size-12 rounded-full border-2 border-white/80 p-2 hover:border-white hover:bg-white/10 transition-all active:scale-90"
              />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
