import { Hero } from "../../Components/Hero.jsx";
import Card from "../../Components/Card.jsx";
import useDevelopers from "../../Hooks/UseDevelopers.jsx";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/images/developers-hero.png";

export default function Developers() {
  const { developers, loading, error } = useDevelopers();
  const navigate = useNavigate();

  return (
    <>
      <Hero
        bg={heroImage}
        title="Defining the Future Skyline."
        desc="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
        icons={true}
      />

      {loading && <h1 className="px-4 py-10 text-center">Loading....</h1>}

      {error && <h1 className="px-4 py-10 text-center">Fail to Load</h1>}

      {!loading && !error && developers.length === 0 && (
        <h1 className="px-4 py-10 text-center">No Developers Found</h1>
      )}

      <div className="mx-[37px] mt-[60px] grid items-start gap-[16px] grid-cols-3">
        {developers.map((d) => (
          <div key={d.id} className="min-w-0 mb-[140px]">
            <Card
              key={d.id}
              badge={true}
              content={d.name_en.toLowerCase()}
              image={d.images[0]}
              iexist={true}
              title={d.name_en}
              click={() => navigate(`/developers/${d.id}`)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
