
import { useEffect, useState } from 'react';



const useFetch = (url: string) => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [pageNum, setPageNum] = useState(0);
    const [query, setQuery] = useState("");
    useEffect(() => {
        const abortCont = new AbortController();
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "6a2c45b0c7msh9003a768797bbe7p19e221jsna0f7ed43603d",
            "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
          },
          signal: abortCont.signal,
        };
    
        fetch(url, options,)
          .then((response) => {
            if (!response.ok) {
              throw Error("could not fetch the data");
            }
            return response.json();
          })
          .then((response) => {
            console.log(response);
            setDogs(response);
            setLoading(false);
            setErr(null);
            console.log("mount");
          })
    
          .catch((err) => {
            if (err.name === "AbortError") {
              console.log("fetch aborted");
            } else {
              setLoading(false);
              setErr(err.message);
            }
          });
        return () => abortCont.abort();
      }, [url]);
  return (
    {dogs, loading, err, pageNum, query, setPageNum, setQuery}
  )
}

export default useFetch