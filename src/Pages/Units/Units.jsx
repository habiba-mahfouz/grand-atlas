import { useState, useEffect } from "react";
import { Hero } from "../../Components/Hero.jsx";
import api from "../../utils/api.jsx";
import { Button } from "../../Components/Components.jsx";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card.jsx";
import UnitOption from "./UnitsComponent.jsx";

import heroImage from "../../assets/images/units-hero.png";
import searchIcon from "../../assets/icons/Units/search.svg";
import bedroom from "../../assets/icons/Cards/bedroom.svg";
import bathroom from "../../assets/icons/Cards/bathroom.svg";
import Size from "../../assets/icons/Cards/unitSize.svg";

function getOptions(units, field, formatLabel = (value) => value) {
  return [...new Set(units.map((unit) => unit[field]).filter((value) => value != null))]
    .sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }))
    .map((value) => ({ value: String(value), label: formatLabel(value) }));
}

export default function Units() {
  const [allunits, setAllUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [developer, setDeveloper] = useState("");
  const [zone, setZone] = useState("");
  const [projects, setProjects] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [filteredUnits, setFilteredUnits] = useState([]);

  const navigate = useNavigate();

  async function getAllUnits() {
    try {
      const response = await api.get("/unit?sort=asc");
      setAllUnits(response.data);
      setFilteredUnits(response.data);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllUnits();
  }, []);

  function handleSearch() {
    const result = allunits.filter((unit) => {
      return (
        unit.title_en?.toLowerCase().includes(search.toLowerCase()) &&
        (bedrooms === "" || unit.bedrooms == bedrooms) &&
        (developer === "" || unit.developerName_en == developer) &&
        (zone === "" || unit.zoneName_en == zone) &&
        (projects === "" || unit.projectName_en == projects) &&
        (status === "" || unit.status == status) &&
        (price === "" || unit.price == price)
      );
    });

    setFilteredUnits(result);
  }

  return (
    <>
      <Hero
        bg={heroImage}
        title={"Where Visionary Design Meets Daily Life"}
        desc={
          "Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"
        }
        icons={true}
      />
      <div
        id="select"
        className="mx-4 grid grid-cols-1 gap-2 rounded-lg  p-2 sm:mx-6 sm:grid-cols-2 lg:mx-[37px] lg:grid-cols-4 lg:gap-3 lg:p-3 xl:mt-[180px] xl:grid-cols-7"
      >
        <div className="relative h-14 min-w-0 w-full">
          <input
            type="text"
            placeholder="Search by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-full w-full rounded-md border border-[#CEC7C7] bg-white pl-3 pr-10 font-lato text-sm font-bold text-[#847D7D] placeholder:text-sm placeholder:font-bold placeholder:text-[#BEBEBE] focus:outline-none sm:text-base"
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute right-3 top-1/2 size-6 -translate-y-1/2"
          />
        </div>

        <UnitOption
        value={bedrooms}
        onChange={setBedrooms}
        placeholder="Bedrooms"
        options={getOptions(allunits, "bedrooms", (value) => `${value} bedrooms`)}
        />

        <UnitOption
        value={developer}
        onChange={setDeveloper}
        placeholder="Developers"
        options={getOptions(allunits, "developerName_en")}
        />

        <UnitOption
        value={zone}
        onChange={setZone}
        placeholder="Zones"
        options={getOptions(allunits, "zoneName_en")}
        />

        <UnitOption
        value={projects}
        onChange={setProjects}
        placeholder="Projects"
        options={getOptions(allunits, "projectName_en")}
        />

        <UnitOption
        value={status}
        onChange={setStatus}
        placeholder="Status"
        options={getOptions(allunits, "status", (value) =>
          value.toLowerCase() === "available"
            ? "Available"
            : value.charAt(0) + value.slice(1).toLowerCase(),
        )}
        />

        <UnitOption
        value={price}
        onChange={setPrice}
        placeholder="Any Price"
        options={getOptions(allunits, "price", (value) =>
          `${Number(value).toLocaleString("en-US")} EGP`,
        )}
        />

      </div>

      <Button
        content={"Search"}
        onClick={handleSearch}
        css={
          "mx-auto mt-4 mb-13 h-12 w-[calc(100%-32px)] max-w-[415px] rounded-lg bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-base font-bold text-[#EEEEEE] sm:mt-8 sm:mb-20 sm:w-[calc(100%-48px)] sm:text-lg lg:mt-[61px] lg:mb-[132px]"
        }
      />

      {loading && <h1 className="px-4 py-10 text-center">Loading....</h1>}

      {error && <h1 className="px-4 py-10 text-center">Fail to Load</h1>}

      {!loading && !error && filteredUnits.length === 0 && (
        <h1 className="px-4 py-10 text-center">No Units Found</h1>
      )}

      <div className="mx-4 grid grid-cols-1 items-start gap-x-4 gap-y-8 pb-16 sm:mx-6 sm:grid-cols-2 lg:mx-[37px] lg:grid-cols-3">
        {filteredUnits.map((unit) => (
          <div key={unit.id} className="min-w-0">
            <Card
              badge={true}
              i1={bedroom}
              i2={bathroom}
              i3={Size}
              c1={`${unit.bedrooms ?? 0} bedrooms`}
              c2={`${unit.bathrooms ?? 0} bathrooms`}
              bexist={true}
              texist={true}
              c3={`${unit.size ?? 0} m`}
              s1={"size-[24px]"}
              s2={"size-[24px]"}
              pexist={true}
              content={unit.status ? unit.status.toLowerCase() : "available"}
              image={unit.images?.[0]}
              title={unit.title_en}
              price={`${unit.price ?? 0} EGP`}
              desc={unit.description_en}
              click={() => navigate(`/units/${unit.id}`)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
