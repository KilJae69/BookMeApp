import { useState } from "react";
import { formatInputForFetch } from "../helpers/formatInputForFetch";

const useFetchMetadata = () => {

  const [metadata, setMetadata] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [lastFetchedUrl, setLastFetchedUrl] = useState("");

  const fetchMetadata = async (inputUrl) => {
    if (!inputUrl.trim() || inputUrl === lastFetchedUrl) return;

 
    setIsFetching(true);
    setError(null);

    try {
        const formattedUrl = formatInputForFetch(inputUrl);
      const response = await fetch(
        `http://localhost:3001/metadata?url=${encodeURIComponent(formattedUrl)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch metadata");
      }
      const data = await response.json();
     if(data && data.title) setMetadata(data);
     if(!data || !data.title) setMetadata({title:inputUrl});
      setLastFetchedUrl(inputUrl);
    } catch (err) {
      setError(err.message);
      setMetadata({title:inputUrl});
    } finally {
      setIsFetching(false);
    }
  };

  return {  metadata, isFetching, error, fetchMetadata,setMetadata };
};

export default useFetchMetadata;
