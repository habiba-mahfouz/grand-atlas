import { useState, useEffect } from "react";
import api from "../utils/api.jsx";

export default function useZones(id) {
  const [zones, setZones] = useState([]);
  const [zone, setZone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function getZones() {
      setLoading(true);
      setError(false);

      try {
        const response = await api.get(id ? `/zone/${id}` : "/zone");
        if (!active) return;

        if (id) {
          setZone(response.data);
        } else {
          setZones(response.data);
        }
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    getZones();

    return () => {
      active = false;
    };
  }, [id]);

  return { zones, zone, loading, error };
}
