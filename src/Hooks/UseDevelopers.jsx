import { useState, useEffect } from "react";
import api from "../utils/api.jsx";

export default function UseDevelopers(id) {
  const [developers, setDevelopers] = useState([]);
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getDevelopers() {

    try {
      const response = await api.get(id ? `/developer/${id}` : "/developer");
      if (id) setDeveloper(response.data);
      else setDevelopers(response.data);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getDevelopers();
  }, [id]);

  return { developers, developer, loading, error };
}
