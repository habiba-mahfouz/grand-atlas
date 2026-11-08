import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api.jsx";
import Project from "../../Components/Projects.jsx";

export default function DisplayUnit() {
  const { id } = useParams();

  const [unit, setUnit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function getUnit() {
      try {
        const response = await api.get(`/unit/${id}`);
        if (active) {
          setUnit(response.data);
          setLoading(false);
        }
      } catch {
        if (active) {
          setError(true);
          setLoading(false);
        }
      }
    }

    getUnit();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) return <h1 className="px-4 py-10 text-center">Loading....</h1>;
  if (error) return <h1 className="px-4 py-10 text-center">Fail to Load</h1>;
  if (!unit) return <p className="px-4 py-10 text-center">No Unit Found</p>;

  return (
    <Project
      e={unit}
      price={true}
      button={true}
    />
  );
}
