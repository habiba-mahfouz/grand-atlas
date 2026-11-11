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
  const { developers, loading, error } = UseDevelopers();
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

      <section className="mt-12 sm:mt-20 lg:mt-[123px] mx-4 sm:mx-6 lg:mx-[37px]">
        <Title
          content={"Benchmarks of Success"}
          width={"w-[164px]"}
          css={"mb-8 sm:mb-12 lg:mb-[56px]"}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-[22px] items-stretch">
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

      <section className="mt-16 sm:mt-24 lg:mt-[180px] mx-4 sm:mx-6 lg:mx-[37px]">
        <Title
          content={"About Grand Atlas"}
          width={"w-[164px]"}
          css={"mb-8 sm:mb-12 lg:mb-[65px]"}
        />
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[60px]">
          <img
            className="h-[320px] sm:h-[450px] lg:h-[667px] w-full max-w-[500px] lg:max-w-none lg:w-[50%] shrink-0 rounded-t-[40px] sm:rounded-t-[60px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-b-none border-4 lg:border-[5px] border-[#8E1616] object-cover shadow-md"
            src={about}
            alt="About Grand Atlas"
          />
          <div className="flex flex-col justify-between items-start w-full lg:w-[50%]">
            <p className="w-full pt-2 lg:pt-6 font-lato text-sm sm:text-base lg:text-[18px] pb-6 sm:pb-8 lg:pb-[90px] text-[#333] leading-relaxed">
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
                "h-[47px] w-full sm:w-[258px] rounded-[8px] text-[18px] sm:text-[20px] font-bold font-lato text-white bg-gradient-to-r from-[#8E1616] to-[#C34B4B] hover:opacity-95 transition-opacity"
              }
            />
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-24 lg:mt-[180px] mx-4 sm:mx-6 lg:mx-[37px]">
        <Title
          content={"Hand-Selected Masterpieces"}
          width={"w-[237px]"}
          css={"mb-6 sm:mb-8 lg:mb-[39px]"}
        />
        <div className="w-full min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-6 sm:mb-8">
          <div className="w-max gap-3 sm:gap-4 lg:gap-[20px] flex flex-row pb-2">
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

      <section className="mt-16 sm:mt-24 lg:mt-[180px]">
        <Title
          content={"Strategic Locations"}
          width={"w-[164px]"}
          css={"mb-6 sm:mb-8 lg:mb-[29px] mx-4 sm:mx-6 lg:mx-[37px]"}
        />
        <img
          className="h-[260px] sm:h-[380px] md:h-[460px] lg:h-[512px] w-full object-cover"
          src={map}
          alt="Strategic Locations"
        />
      </section>

      <section className="mt-16 sm:mt-24 lg:mt-[180px] mx-4 sm:mx-6 lg:mx-[37px] mb-16 sm:mb-24 lg:mb-[140px]">
        <Title
          content={"Future Landmarks"}
          width={"w-[237px]"}
          css={"mb-6 sm:mb-8 lg:mb-[38px]"}
        />

        {loading && <h1 className="px-4 py-10 text-center">Loading....</h1>}

        {error && <h1 className="px-4 py-10 text-center">Fail to Load</h1>}

        {!loading && !error && developers.length === 0 && (
          <h1 className="px-4 py-10 text-center">No Developers Found</h1>
        )}

        <div className="w-full min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-6 sm:mb-8">
          <div className="w-max gap-3 sm:gap-4 lg:gap-[20px] flex flex-row pb-2 pt-1 px-1">
            {developers.map((d) => (
              <div
                key={d.id}
                className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[400px] shrink-0"
              >
                <Card
                  badge={true}
                  content={d.name_en.toLowerCase()}
                  image={d.images?.[0] || d.images}
                  iexist={true}
                  title={d.name_en}
                  click={() => navigate(`/developers/${d.id}`)}
                />
              </div>
            ))}
          </div>
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
