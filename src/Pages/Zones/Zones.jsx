import heroImage from "../../assets/images/zones-hero.png";

import { Hero } from "../../Components/Hero.jsx";
import { useNavigate } from "react-router-dom";
import useZones from "../../Hooks/UseZones.jsx";

export default function Zones() {
  const { zones, loading, error } = useZones();
  const navigate = useNavigate();

  return (
    <>
      <Hero
        bg={heroImage}
        title={"Destinations Defined by Distinction"}
        desc={
          "From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."
        }
        icons={true}
      />

      {loading && <h1 className="px-4 py-10 text-center">Loading....</h1>}

      {error && <h1 className="px-4 py-10 text-center">Fail to Load</h1>}

      {!loading && !error && zones.length === 0 && (
        <h1 className="px-4 py-10 text-center">No Zones Found</h1>
      )}
      <div className="flex flex-wrap gap-5 px-[30px] mt-[87px] mb-[86px]">
        {zones.map((zone) => (
          <img
            key={zone.id}
            src={zone.images?.[0]}
            alt={zone.name_en ?? "Zone"}
            className="h-[190px] w-[290px] cursor-pointer object-cover"
            onClick={() => navigate(`/zones/${zone.id}`)}
          />
        ))}
      </div>
    </>
  );
}
