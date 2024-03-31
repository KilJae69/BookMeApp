import { useMutation} from "@tanstack/react-query";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser(){
  
    const {mutate: updateUser, isPending: isUpdating} = useMutation({
        mutationFn: updateCurrentUserApi,
        onSuccess: ()=>{           
            toast.success("User account updated successfully");       
        },
        onError:(error)=> toast.error(error.message)
    })

    return {updateUser, isUpdating}
}