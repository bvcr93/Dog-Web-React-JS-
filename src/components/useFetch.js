import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [dogs, setDogs] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [error, setError] = useState();
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
        setLoadingState(false);
        setError(null);
      })

      .catch((err) => {
        setLoadingState(false);
        setError(err.message);
      });
  }, [url]);

  return { dogs, loadingState, error };
};

export default useFetch;
