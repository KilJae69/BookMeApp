import { useState } from "react";

import supabase from "../services/supabase";
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
      // Invoke the edge function
      const { data, error } = await supabase.functions.invoke(
        "fetch-metadata-node",
        {
          body: JSON.stringify({
            url: formatInputForFetch(inputUrl),
          }),
        }
      );

      if (error) throw new Error(error.message);

      if (data.metadata && data.metadata.title) setMetadata(data.metadata);
      else setMetadata({ title: inputUrl, favicon: "/globe-grid.png" });
      setLastFetchedUrl(inputUrl);
     
    } catch (err) {
      setError(err.message);
      setMetadata({ title: inputUrl });
    } finally {
      setIsFetching(false);
    }
  };

  return { metadata, isFetching, error, fetchMetadata, setMetadata };
};

export default useFetchMetadata;
