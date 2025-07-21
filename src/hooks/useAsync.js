import { useState, useCallback } from "react";

const useAsync = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (asyncFunction) => {
    try {
      setLoading(true);
      setError(null);
      const result = await asyncFunction();
      setData(result);
    } catch (err) {
      setError(err.message || "Щось пішло не так");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, execute };
};

export default useAsync;
