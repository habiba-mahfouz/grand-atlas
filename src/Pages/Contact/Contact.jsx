import heroImage from "../../assets/images/contact-hero.png";

import location from "../../assets/icons/Contact/location.svg";
import email from "../../assets/icons/Contact/email.svg";
import phone1 from "../../assets/icons/Contact/mobile.svg";
import phone2 from "../../assets/icons/Contact/tele.svg";
import facebook from "../../assets/icons/Footer/footer_facebook.svg";
import insta from "../../assets/icons/Contact/contact_insta.svg";
import twitter from "../../assets/icons/Contact/x.svg";
import tiktok from "../../assets/icons/Contact/contact_tiktok.svg";

import { Hero } from "../../Components/Hero.jsx";
import { Button } from "../../Components/Components.jsx";
import { Inputs, Links, Hours, Info } from "./ContactComponents.jsx";

export default function Contact() {
  return (
    <>
      <Hero
        bg={heroImage}
        title={"Connected Globally. Available Locally."}
        desc={
          "With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."
        }
      />

      <div className="flex flex-col lg:flex-row mt-8 sm:mt-16 lg:mt-[118px] mx-4 sm:mx-6 lg:mx-[37px] mb-12 sm:mb-20 lg:mb-[100px] gap-10 lg:gap-16 justify-between items-start">
        <div className="w-full lg:max-w-[55%] xl:max-w-[620px]">
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-playfair font-semibold text-black mb-3 sm:mb-[10px]">
          Contact Information
          </h2>
          <p className="text-sm sm:text-base lg:text-[20px] font-lato text-[#847D7D] w-full mb-6 sm:mb-[24px] leading-relaxed">
            Our team is available for private consultations and off-market
            inquiries. We operate with absolute discretion to ensure your real
            estate objectives are met with precision.
          </p>
          <div className="w-full">
            <div className="mb-6 sm:mb-8">
              <Info
                icon={location}
                desc={"location"}
                content={"Minusio, Lake Maggiore, Switzerland — ref. LOC1771"}
              />
              <Info
                icon={email}
                desc={"email"}
                content={"Grand.Atlas.Support@gmail.com"}
              />
              <Info icon={phone1} desc={"mobile"} content={"01247859622"} />
              <Info icon={phone2} desc={"tele"} content={"035987124"} />
            </div>

            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl lg:text-[22px] font-playfair font-semibold text-[#847D7D] mb-3 sm:mb-[20px]">
                Follow us on social media
              </h4>
              <div className="flex flex-row gap-3 sm:gap-[13px] flex-wrap">
                <Links
                  to={"https://Facebook.com"}
                  icon={facebook}
                  desc={"Facebook"}
                />
                <Links
                  to={"https://Twitter.com"}
                  icon={twitter}
                  desc={"twitter"}
                />
                <Links
                  to={"https://Instagram.com"}
                  icon={insta}
                  desc={"insta"}
                />
                <Links
                  to={"https://TikTok.com"}
                  icon={tiktok}
                  desc={"tiktok"}
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl lg:text-[22px] font-playfair font-semibold text-[#847D7D] mb-3 sm:mb-[10px]">
                Working Hours
              </h4>
              <div className="space-y-1">
                <Hours day={"Saturday :"} g={"gap-4 sm:gap-[35px]"} />
                <Hours day={"Sunday :"} g={"gap-4 sm:gap-[48px]"} />
                <Hours day={"Monday :"} g={"gap-4 sm:gap-[40px]"} />
                <Hours day={"Tuesday :"} g={"gap-4 sm:gap-[40px]"} />
                <Hours day={"Wednesday :"} g={"gap-4 sm:gap-[9px]"} />
              </div>
            </div>
          </div>
        </div>

        <form className="w-full lg:max-w-[45%] xl:max-w-[533px] p-5 sm:p-8 border border-[#EAEAEA] rounded-2xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] bg-white">
          <h3 className="text-xl sm:text-2xl lg:text-[26px] text-black font-playfair font-semibold pb-4 sm:pb-[25px]">
            Send us a message
          </h3>
          <Inputs p={"pb-3 sm:pb-[18px]"} h={"h-11 sm:h-[58px]"} content={"Name"} />
          <Inputs p={"pb-3 sm:pb-[18px]"} h={"h-11 sm:h-[58px]"} content={"Email"} />
          <Inputs p={"pb-3 sm:pb-[18px]"} h={"h-11 sm:h-[58px]"} content={"Phone"} />
          <Inputs p={"pb-6 sm:pb-[36px]"} h={"h-24 sm:h-[140px]"} content={"Message"} />

          <Button
            content={"Send"}
            css={"h-11 sm:h-[57px] w-full rounded-[8px] bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-[#EEEEEE] font-bold text-base sm:text-lg hover:opacity-95 transition-opacity cursor-pointer"}
          />
        </form>
      </div>
    </>
  );
}
