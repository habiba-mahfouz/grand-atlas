import { Hero } from "../../Components/Hero.jsx";
import { Title, Button } from "../../Components/Components.jsx";

import heroImage from "../../assets/images/HomePage/home-hero.png";
import satisfaction from "../../assets/icons/HomePage/home_satisfaction.svg";
import happy from "../../assets/icons/HomePage/home_happy.svg";
import investment from "../../assets/icons/HomePage/home_investment.svg";
import units from "../../assets/icons/HomePage/home_units.svg";
import about from "../../assets/images/HomePage/home-about.png";
import arrow from "../../assets/icons/arrow.svg";
import masterpiece1 from "../../assets/images/HomePage/masterpice1.png";
import masterpiece2 from "../../assets/images/HomePage/masterpice2.png";
import masterpiece3 from "../../assets/images/HomePage/masterpice3.png";
import map from "../../assets/images/HomePage/map.png";

import UseDevelopers from "../../Hooks/UseDevelopers.jsx";
import Card from "../../Components/Card.jsx";
import { useNavigate } from "react-router-dom";
import { Benchmark, Masterpieces } from "./HomeComponents.jsx";

export default function Home() {
  const { developers } = UseDevelopers();
  const navigate = useNavigate();

  return (
    <>
      <Hero
        bg={heroImage}
        title={"Redefining the Horizon of Modern Luxury Living"}
        desc={
          "We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest"
        }
        btn={true}
        icons={true}
      />

      <section className="h-[252px] mt-[123px] mx-[37px]">
        <Title
          content={"Benchmarks of Success"}
          width={"w-[164px]"}
          css={"mb-[56px]"}
        />
        <div className="h-[143px] gap-[22px] flex flex-row justify-between itemd-center">
          <Benchmark
            icon={units}
            number={"48"}
            content={"Properties Managed"}
          />
          <Benchmark
            icon={investment}
            number={"90M"}
            content={"Total Managed Investments"}
          />
          <Benchmark icon={happy} number={"500"} content={"Happy Clients"} />
          <Benchmark
            icon={satisfaction}
            number={"99%"}
            content={"Client Satisfaction"}
          />
        </div>
      </section>

      <section className="h-[791px] mt-[180px] mx-[37px]">
        <Title
          content={"About Grand Atlas"}
          width={"w-[164px] "}
          css={"mb-[65px]"}
        />
        <section className="flex flex-row items-start gap-[60px]">
          <img
            className="h-[667px] w-[673px] shrink-0 rounded-tl-[100px] rounded-tr-[100px] border-[5px] border-[#8E1616] object-cover"
            src={about}
          />
          <div className="flex gap-[125px] flex-col justify-between">
            <p className="w-[450px] pt-[24px] font-lato text-[18px] pb-[90px] text-[#333]">
              We began with a singular, uncompromising vision: to bridge the gap
              between world-class architecture and the individuals who define
              our global culture. We recognized that for the discerning client,
              a home is rarely just a physical structure; it is a curated
              environment, a private gallery, and the ultimate expression of a
              life well-lived. Our journey started not in the pursuit of
              transactions, but in the pursuit of excellence. We set out to
              dismantle the traditional, high-volume real estate model in favor
              of a bespoke, 'private office' approach—one where quality always
              supersedes quantity, and where every client is treated as the sole
              focus of our firm,We don't just find you a home; we secure your
              peace of mind through a veil of absolute professional
              confidentiality.
            </p>
            <Button
              content="Know More"
              icon={arrow}
              css={
                "h-[47px] w-[258px] rounded-[8px] text-[20px] font-bold font-lato text-white bg-gradient-to-r from-[#8E1616] to-[#C34B4B] "
              }
            />
          </div>
        </section>
      </section>

      <section className="h-[529px] mt-[180px] mx-[37px]">
        <Title
          content={"Hand-Selected Masterpieces"}
          width={"w-[237px]"}
          css={" mb-[39px]"}
        />
        <div className="w-full min-w-0 overflow-x-auto [scrollbar-width:none] mb-[20px]">
          <div className="h-[358px] w-max gap-[20px] flex flex-row">
            <Masterpieces
              image={masterpiece1}
              content={"01. Palm Hills Office No.3"}
            />
            <Masterpieces
              image={masterpiece2}
              content={"02. Hacienda Duplex No.4"}
            />
            <Masterpieces
              image={masterpiece3}
              content={"03. Sawary Family Villa"}
            />
            <Masterpieces
              image={masterpiece1}
              content={"04. Sawary Family Villa "}
            />
          </div>
        </div>
        <div className="mx-auto w-[110px] h-[16px] gap-[9px] flex flex-row justify-center items-center">
          <div className="w-[60px] h-[12px] bg-[#8E1616] rounded-[8px] "></div>
          <div className="size-[12px] bg-[#D9D9D9] rounded-full "></div>
          <div className="size-[12px] bg-[#D9D9D9] rounded-full "></div>
        </div>
      </section>

      <section className="h-[594px] mt-[180px]">
        <Title
          content={"Strategic Locations"}
          width={"w-[164px]"}
          css={"mb-[29px] mx-[37px]"}
        />
        <img className="h-[512px] w-full bg-center bg-cover" src={map} />
      </section>

      <section className="h-[577px] mt-[180px] mx-[37px] mb-[140px]">
        <Title
          content={"Future Landmarks"}
          width={"w-[237px]"}
          css={"mb-[38px]"}
        />
        <div className="grid items-start gap-[20px] grid-cols-3 mb-[22px]">
          {developers.map((d) => (
            <Card
              key={d.id}
              badge={true}
              content={d.name_en.toLowerCase()}
              image={d.images[0]}
              iexist={true}
              title={d.name_en}
              click={() => navigate(`/developers/${d.id}`)}
            />
          ))}
        </div>

        <div className="mx-auto w-[110px] h-[16px] gap-[9px] flex flex-row justify-center items-center">
          <div className="w-[60px] h-[12px] bg-[#8E1616] rounded-[8px] "></div>
          <div className="size-[12px] bg-[#D9D9D9] rounded-full "></div>
          <div className="size-[12px] bg-[#D9D9D9] rounded-full "></div>
        </div>
      </section>
    </>
  );
}
