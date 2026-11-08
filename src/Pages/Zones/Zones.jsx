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

      <div className="mx-4 sm:mx-6 lg:mx-[37px] mt-8 sm:mt-12 lg:mt-[87px] mb-12 sm:mb-20 lg:mb-[86px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {zones.map((zone) => (
          <div
            key={zone.id}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer group hover:shadow-lg transition-all"
            onClick={() => navigate(`/zones/${zone.id}`)}
          >
            <img
              src={zone.images?.[0]}
              alt={zone.name_en ?? "Zone"}
              className="h-[200px] sm:h-[220px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
}
