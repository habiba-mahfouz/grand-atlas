import { useState, useEffect } from "react";
import api from "../utils/api.jsx";

export default function UseDevelopers(id) {
  const [developers, setDevelopers] = useState([]);
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function getDevelopers() {
      try {
        const response = await api.get(id ? `/developer/${id}` : "/developer");
        if (active) {
          if (id) setDeveloper(response.data);
          else setDevelopers(response.data);
          setLoading(false);
        }
      } catch {
        if (active) {
          setError(true);
          setLoading(false);
        }
      }
    }

    getDevelopers();

    return () => {
      active = false;
    };
  }, [id]);

  return { developers, developer, loading, error };
}
