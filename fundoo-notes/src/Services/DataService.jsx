import axios from "axios";

const HeaderConfig = {
    headers : {Authorization : `bearer ${localStorage.getItem("token")}`}
}

export const AllNoteRetriveApi = () => {
    let response = axios.get("https://localhost:44386/api/Note/RetrieveAll", HeaderConfig)
    return response
}