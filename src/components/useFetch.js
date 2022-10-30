import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "6a2c45b0c7msh9003a768797bbe7p19e221jsna0f7ed43603d",
        "X-RapidAPI-Host": "dog-breeds2.p.rapidapi.com",
      },
    };

    fetch(options, url)
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
      })

      .catch((err) => {
        setLoading(false);
        setErr(err.message);
      });
  }, [url]);

  return { dogs, loading, err };
};

export default useFetch;
