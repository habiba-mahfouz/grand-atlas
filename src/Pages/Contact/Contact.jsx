import heroImage from "../../assets/images/contact-hero.png";

import location from "../../assets/icons/Contact/location.svg";
import email from "../../assets/icons/Contact/email.svg";
import phone1 from "../../assets/icons/Contact/mobile.svg";
import phone2 from "../../assets/icons/Contact/tele.svg";
import facebook from "../../assets/icons/Footer/footer_facebook.svg";
import insta from "../../assets/icons/Contact/contact_insta.svg";
import twitter from "../../assets/icons/Contact/x.svg";
import tiktok from "../../assets/icons/Contact/contact_tiktok.svg";

import {Hero} from "../../Components/Hero.jsx";
import {Button} from "../../Components/Components.jsx"
import {Inputs, Links, Hours, Info} from "./ContactComponents.jsx"

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

      <div className="flex flex-row h-[733px] mt-[118px]  mx-[37px] mb-[100px] gap-[20px]">
        <div>
          <h2 className="text-[32px] font-playfair font-semibold text-black mb-[10px]">
            Contact Information
          </h2>
          <p className="text-[20px] font-lato text-[#847D7D] w-[660px] mb-[20px] ">
            Our team is available for private consultations and off-market
            inquiries. We operate with absolute discretion to ensure your real
            estate objectives are met with precision.
          </p>
          <div className="h-[540px] w-[492px]">
            <div className=" mb-[24px] mb-[36px]">
              <Info
                icon={location}
                desc={"location"}
                content={"Minusio, Lake Maggiore, Switzerland — ref. LOC1771"}
              />
              <Info
                icon={email}
                desc={"email"}
                content={"Grand .Atlas.Support@gmail.com"}
              />
              <Info icon={phone1} desc={"mobile"} content={"01247859622"} />
              <Info icon={phone2} desc={"tele"} content={"035987124"} />
            </div>

            <div className=" mb-[24px] mb-[36px]">
              <h4 className="text-[22px] font-playfair font-semibold text-[#847D7D] mb-[20px]">
                Follow us on social media
              </h4>
              <div className="flex flex-row gap-[13px] ">
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

            <div className="">
              <h4 className="text-[22px] font-playfair font-semibold text-[#847D7D] mb-[10px]">
                Working Hours
              </h4>
              <div>
                <Hours day={"Saturday :"} g={"gap-[35px]"} />
                <Hours day={"Sunday :"} g={"gap-[48px]"} />
                <Hours day={"Monday :"} g={"gap-[40px]"} />
                <Hours day={"Tuesday :"} g={"gap-[40px]"} />
                <Hours day={"Wednesday :"} g={"gap-[9px]"} />
              </div>
            </div>
          </div>
        </div>
        <form className="w-[533px] px-[30px] border-1 border-white rounded-[24px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] ">
          <h3 className=" text-[26px] text-black font-playfair font-semibold pb-[35px] ">
            Send us a message
          </h3>
          <Inputs p={"pb-[18px]"} h={"h-[58px]"} content={"Name"} />
          <Inputs p={"pb-[18px]"} h={"h-[58px]"} content={"Email"} />
          <Inputs p={"pb-[18px]"} h={"h-[58px]"} content={"Phone"} />
          <Inputs p={"pb-[42px]"} h={"h-[140px]"} content={"Message"} />

          <Button content={"Send"} css={"h-[57px] w-full rounded-[8px] bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-[#EEEEEE]"} />
        </form>
      </div>
    </>
  );
}
