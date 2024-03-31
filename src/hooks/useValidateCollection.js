import { useQueryClient } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import  useAuthStore  from "../store/useAuthStore";

export function useValidateCollection() {
    const {user}= useAuthStore();
  
  const queryClient = useQueryClient();
  const { collectionId } = useParams(); 
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const collectionName = queryParams.get("name");

  
  const collections = queryClient.getQueryData(["collections",user.id]) || [];


  const isValidCollection = collections.some(
    (collection) =>
      Number(collection.id) === Number(collectionId) &&
      String(collection.collection_name) === decodeURIComponent(collectionName)
  );

  return isValidCollection;
}
