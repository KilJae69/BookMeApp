import { useEffect } from "react"
import { useCollections } from "../features/collections/useCollections"
import useAuthStore from "../store/useAuthStore"
import { useNavigate } from "react-router-dom"

function Welcome() {
    const navigate = useNavigate()
    const {user} = useAuthStore()
    const {collections} = useCollections(user?.id)
    const collectionName = collections[0]?.collection_name
    const collectionId = collections[0]?.id


    useEffect(() => {
        navigate(
          `/${collectionId}?name=${encodeURIComponent(
            collectionName
          )}`,
          { replace: true }
        );
    },[collectionId, collectionName, navigate])
    return null
}

export default Welcome
