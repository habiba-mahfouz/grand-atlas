import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api.jsx";
import { Button, Title } from "./Components.jsx";

import image from "../assets/icons/project_logo.svg";
import location from "../assets/icons/Units/unit_location.svg";

export default function Projects({ e, price, logo, button, title }) {
  const [project, setProject] = useState(e ?? null);
  const [loading, setLoading] = useState(!e);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (e) {
      setProject(e);
      setLoading(false);
      setError(false);
      return;
    }

    let active = true;
    setLoading(true);
    setError(false);

    async function getProject() {
      try {
        const response = await api.get(`/projects/${id}`);
        if (active) {
          setProject(response.data);
          setLoading(false);
        }
      } catch {
        if (active) {
          setError(true);
          setLoading(false);
        }
      }
    }

    getProject();

    return () => {
      active = false;
    };
  }, [id, e]);

  if (loading) return <h1 className="px-4 py-10 text-center">Loading....</h1>;
  if (error) return <h1 className="px-4 py-10 text-center">Fail to Load</h1>;
  if (!project)
    return <p className="px-4 py-10 text-center">No Projects Found</p>;

  return (
    <main className="mx-auto mb-16 w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
     {title&&
     ( <Title
      content={project.name_en}
      width={"w-[200px]"}
      css={`mb-[40px] mt-[40px]`} />)}
      
      {project.images?.length > 0 && (
        <>
          <img
            className="mb-2 aspect-[2.4/1] max-h-[562px] w-full rounded-xl object-cover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:rounded-2xl"
            src={project.images[0]}
            alt={project.title_en ?? project.name_en}
          />
          <div className="mb-7 grid grid-cols-3 gap-2 sm:mb-10 sm:grid-cols-5">
            {project.images.map((image, index) => (
              <img
                key={`${image}-${index}`}
                className="aspect-[1.4/1] w-full rounded-md object-cover shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] sm:rounded-lg"
                src={image}
                alt={`${project.title_en ?? project.name_en} image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <section className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex min-w-0 flex-col items-start gap-1">
          <h1 className="break-words font-lato text-2xl font-bold text-[#8E1616] sm:text-3xl">
            {project.title_en ?? project.name_en}
          </h1>
          <div className="flex items-center gap-1">
            <img className="size-4 shrink-0" src={location} alt="" />
            <h3 className="font-lato text-xs font-medium text-[#847D7D] sm:text-sm">
              {project.zone?.name_en ?? project.zoneName_en ?? "Alexandria"}
            </h3>
          </div>
        </div>
        {price && (
          <h2 className="shrink-0 font-lato text-2xl font-bold text-[#A18E77] sm:text-3xl">
            {project.price} EGP
          </h2>
        )}

        {logo && (
            <img
              className="h-[65px] w-[196px] shrink-0 object-contain"
              src={project.developer?.images?.[0] ?? image}
              alt={`${project.developer?.name_en ?? project.name_en ?? project.title_en} logo`}
            />
        )}

      </section>

      <section className="mb-[150px] grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.7fr)]">
        <div>
          <h2 className="mb-4 font-lato text-lg font-bold text-[#1D1616] sm:text-xl">
            At a glance
          </h2>
          <ul className="list-disc space-y-2 pl-5 font-lato text-sm text-[#847D7D] sm:text-base">
            {project.size != null && <li>Plot size ca.: {project.size} m²</li>}
            {project.bedrooms != null && <li>Bedrooms: {project.bedrooms}</li>}
            {project.bathrooms != null && <li>Bathrooms: {project.bathrooms}</li>}
            {project.developer?.name_en && <li>Developer: {project.developer.name_en}</li>}
            {project.zone?.name_en && <li>Zone: {project.zone.name_en}</li>}
          </ul>
        </div>

        <div className="min-w-0">
          <h2 className="mb-3 font-lato text-lg font-bold text-[#1D1616] sm:text-xl">
            Overview
          </h2>
          <p className="mb-6 font-lato text-sm leading-6 text-[#847D7D] sm:text-base">
            {project.description_en}
          </p>
          {button && (
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                content={"Contact via WhatsApp"}
                css="h-11 w-full  rounded-md bg-[#009100] text-sm font-bold text-white"
              />
              <Button
                content={"Call"}
                css="h-11 w-full  rounded-md border border-[#8E1616] bg-white text-sm font-bold text-[#8E1616]"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}