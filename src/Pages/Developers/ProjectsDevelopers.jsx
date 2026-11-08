import { SubHero } from "../../Components/Hero.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../Components/Card.jsx";
import useDevelopers from "../../Hooks/UseDevelopers.jsx";

import Units from "../../assets/icons/Cards/units.svg";
import GYM from "../../assets/icons/Cards/GYM.svg";
import Size from "../../assets/icons/Cards/unitSize.svg";

export default function DisplayDeveloper() {
  const { id } = useParams();
  const { developer, loading, error } = useDevelopers(id);
  const navigate = useNavigate();

  if (loading) return <h1 className="px-4 py-10 text-center">Loading....</h1>;
  if (error) return <h1 className="px-4 py-10 text-center">Fail to Load</h1>;
  if (!developer)
    return <p className="px-4 py-10 text-center">No Developer Found</p>;

  return (
    <>
      <SubHero
        c={`${developer.name_en} Projects`}
        image={developer.images?.[0]}
      />

      <div className="mx-4 grid grid-cols-1 items-start gap-x-4 gap-y-8 pb-16 sm:mx-6 sm:grid-cols-2 lg:mx-[37px] lg:grid-cols-3">
        {developer.projects?.length ? (
          developer.projects.map((project) => (
            <div key={project.id} className="min-w-0">
              <Card
                i1={Units}
                i2={GYM}
                i3={Size}
                c1={"5 Units"}
                c2={"7 GYMs"}
                bexist={true}
                texist={true}
                c3={"500 m"}
                s1={"size-[29px]"}
                s2={"size-[31px]"}
                image={project.images?.[0]}
                title={project.name_en}
                desc={project.description_en}
                click={() => navigate(`/projects/${project.id}`)}
              />
            </div>
          ))
        ) : (
          <p className="col-span-full px-4 py-10 text-center">
            No projects found for this developer.
          </p>
        )}
      </div>
    </>
  );
}
