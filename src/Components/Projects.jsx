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
      Promise.resolve().then(() => {
        setProject(e);
        setLoading(false);
        setError(false);
      });
      return;
    }

    let active = true;

    async function getProject() {
      setLoading(true);
      setError(false);
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
      {title && (
        <Title
          content={project.name_en}
          width={"w-[200px]"}
          css={"mb-6 sm:mb-8 lg:mb-[40px] mt-6 sm:mt-8 lg:mt-[40px]"}
        />
      )}

      {project.images?.length > 0 && (
        <>
          <img
            className="mb-3 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.4/1] max-h-[562px] w-full rounded-xl sm:rounded-2xl object-cover shadow-[0px_4px_12px_rgba(0,0,0,0.15)]"
            src={project.images[0]}
            alt={project.title_en ?? project.name_en}
          />
          <div className="mb-6 sm:mb-10 grid grid-cols-3 sm:grid-cols-5 gap-2">
            {project.images.map((imgItem, index) => (
              <img
                key={`${imgItem}-${index}`}
                className="aspect-[1.4/1] w-full rounded-md sm:rounded-lg object-cover shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]"
                src={imgItem}
                alt={`${project.title_en ?? project.name_en} preview ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      <section className="mb-8 sm:mb-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-col items-start gap-1">
          <h1 className="break-words font-lato text-2xl sm:text-3xl font-bold text-[#8E1616]">
            {project.title_en ?? project.name_en}
          </h1>
          <div className="flex items-center gap-1.5">
            <img className="size-4 shrink-0" src={location} alt="" />
            <h3 className="font-lato text-xs sm:text-sm font-medium text-[#847D7D]">
              {project.zone?.name_en ?? project.zoneName_en ?? "Alexandria"}
            </h3>
          </div>
        </div>

        {price && (
          <h2 className="shrink-0 font-lato text-xl sm:text-2xl lg:text-3xl font-bold text-[#A18E77] self-end sm:self-auto">
            {project.price} EGP
          </h2>
        )}

        {logo && (
          <img
            className="h-10 sm:h-14 lg:h-[65px] w-auto max-w-[140px] sm:max-w-[180px] shrink-0 object-contain self-start sm:self-auto"
            src={project.developer?.images?.[0] ?? image}
            alt={`${project.developer?.name_en ?? project.name_en ?? project.title_en} logo`}
          />
        )}
      </section>

      <section className="mb-16 sm:mb-24 lg:mb-[150px] grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.7fr)]">
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
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                content={"Contact via WhatsApp"}
                css="h-11 w-full rounded-md bg-[#009100] text-sm font-bold text-white hover:bg-[#007a00] transition-colors cursor-pointer"
              />
              <Button
                content={"Call"}
                css="h-11 w-full rounded-md border border-[#8E1616] bg-white text-sm font-bold text-[#8E1616] hover:bg-[#8E1616] hover:text-white transition-colors cursor-pointer"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
