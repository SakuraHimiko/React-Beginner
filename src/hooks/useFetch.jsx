import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            console.log("works");
            throw Error("No Content found :>");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("woof");
          } else {
            setError(err.message);
            setPending(false);
          }
        });
    }, 2000);
    return () => {
      abortController.abort();
    };
  }, [url]);
  console.log(error);
  return { data, pending, error };
};
export default useFetch;
