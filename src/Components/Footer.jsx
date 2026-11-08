import { Link } from "react-router-dom";
import logo from "../assets/icons/Logo.svg";
import facebook from "../assets/icons/Footer/footer_facebook.svg";
import twitter from "../assets/icons/Footer/footer_Twitter.svg";
import linkedin from "../assets/icons/Footer/footer_Linkedin.svg";
import arrow from "../assets/icons/arrow.svg";

export default function Footer() {
  return (
    <footer className="flex flex-row min-h-[374px] w-full items-center justify-between bg-white px-4 py-10 text-[#0A142F] sm:px-8 lg:px-16 xl:px-25">
      <div id="Content" className="flex w-full flex-col gap-7">
        <div id="Top" className="grid grid-cols-1 justify-center gap-x-3 gap-y-8 min-[480px]:grid-cols-3 min-[480px]:items-start min-[480px]:gap-x-3 min-[641px]:grid-cols-4 lg:gap-x-12">
          <div id="part1" className="flex flex-col items-center justify-center gap-2 min-[480px]:justify-start  min-[640px]:mr-[5px] ">
            <img className="h-28 w-28 min-[580px]:size-18 sm:h-32 sm:w-32 min-[480px]:h-16 min-[480px]:w-16 min-[640px]:h-20 min-[640px]:w-20 min-[861px]:h-32 min-[861px]:w-32" alt="logo" src={logo} />
            <Link
              to=""
              className="text-center font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616]  min-[480px]:text-[12px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              +1(7635)547-12-97
            </Link>
            <Link
              to=""
              className="break-all text-center font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[12px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              support@lift.agency
            </Link>
          </div>
          <div id="part2" className="hidden min-w-0 flex-col gap-2 min-[641px]:flex">
            <div className="mb-1 font-lato text-base font-bold text-[#0A142F] min-[480px]:text-xs min-[640px]:text-[14px] min-[861px]:text-base">
              Quick Links
            </div>
            <Link
              to="/"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[12px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Home
            </Link>
            <Link
              to="/inventories"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[12px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Inventories
            </Link>
            <Link
              to="/units"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[12px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Units
            </Link>
            <Link
              to="/zones"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[12px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Zones
            </Link>
            <Link
              to="/developers"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[12px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Developers
            </Link>
            <Link
              to="/contact_us"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[12px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Contact Us
            </Link>
          </div>
          <div id="part3" className="hidden min-w-0 flex-col gap-2 min-[641px]:flex">
            <div className="mb-1 font-lato text-base font-bold text-[#0A142F] min-[480px]:text-xs min-[640px]:text-[14px] min-[861px]:text-base">
              About
            </div>
            <Link
              to="/"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[10px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Grand Atlas
            </Link>
            <Link
              to="/"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[10px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[10px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Legal
            </Link>
            <Link
              to="/"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[10px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Help
            </Link>
            <Link
              to="/"
              className="font-lato text-[16px] text-[#0A142F] hover:text-[#8E1616] min-[480px]:text-[10px] min-[640px]:text-[14px] min-[861px]:text-[16px]"
            >
              Support
            </Link>
          </div>
          <div id="part4" className="flex min-w-0 flex-col gap-5">
            <div className="mb-1 font-lato text-base font-bold min-[480px]:text-xs min-[640px]:text-[14px] min-[861px]:text-base">
              Get In Touch
            </div>
            <form className="flex w-full flex-row">
              <input
                type="text"
                placeholder="Get product updates"
                className="h-[46px] w-0 min-w-0 flex-1 rounded-bl-[8px] rounded-tl-[8px] border border-[#8E1616] bg-white pl-2 font-lato text-xs font-bold text-[#847D7D] placeholder:font-lato placeholder:text-[9px] placeholder:text-[#BEBEBE] sm:pl-4 sm:text-base min-[480px]:h-8.5 min-[480px]:w-7.5 min-[640px]:h-9 min-[640px]:pl-1 min-[861px]:h-[46px] min-[861px]:pl-4 min-[861px]:placeholder:text-xs"
              />
              <button
                type="submit"
                aria-label="Submit"
                className="flex h-[46px] w-12 shrink-0 items-center justify-center rounded-br-[8px] rounded-tr-[8px] bg-[#8E1616] text-white  min-[480px]:h-8.5 min-[480px]:w-7.5 min-[640px]:h-9 min-[640px]:w-8 min-[861px]:h-[46px] min-[861px]:w-12"
              >
                <img
                  className="h-4 w-4"
                  alt="arrow"
                  src={arrow}
                />
              </button>
            </form>
            <div id="socials" className="hidden flex-row gap-3 min-[481px]:flex min-[640px]:gap-1 min-[861px]:gap-3">
              <Link
                to="https://www.facebook.com/"
                className="flex size-10 items-center justify-center min-[480px]:size-6 min-[640px]:size-7 min-[861px]:size-10 min-[861px]:rounded-full min-[861px]:border-2 min-[861px]:border-[#E4CCCC] "
              >
                <img className="size-4" src={facebook} alt="" />
              </Link>
              <Link
                to="https://www.twitter.com/"
                className="flex size-10 items-center justify-center min-[480px]:size-6 min-[640px]:size-7 min-[861px]:size-10 min-[861px]:rounded-full min-[861px]:border-2 min-[861px]:border-[#E4CCCC] "
              >
                <img className="size-4" src={twitter} alt="" />
              </Link>
              <Link
                to="https://www.linkedin.com/"
                className="flex size-10 items-center justify-center min-[480px]:size-6 min-[640px]:size-7 min-[861px]:size-10 min-[861px]:rounded-full min-[861px]:border-2 min-[861px]:border-[#E4CCCC] "
              >
                <img className="size-4" src={linkedin} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="mb-1 w-full border border-gray-300" />
        <div
          id="Bottom"
          className="flex items-center justify-center text-center font-lato text-sm font-normal text-gray-500"
        >
          © 2020 Lift Media. All rights reserved
        </div>
      </div>
    </footer>
  );
}
