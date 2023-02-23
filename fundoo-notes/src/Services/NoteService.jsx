import axios from "axios";
import { HeaderConfig } from "./DataService"

export const AllNoteRetriveApi = () => {
    let response = axios.get("https://localhost:44386/api/Note/RetrieveAll", HeaderConfig)
    return response
}

export const CreateNewNoteApi = (data) => {
    let response = axios.post("https://localhost:44386/api/Note/CreateNewNote", data, HeaderConfig)
    return response;
}

export const ArchieveNote = (data) => {
    let response = axios.put("https://localhost:44386/api/Note/Archieve", data, HeaderConfig)
    return response;
}