import axios from "axios";
import { HeaderConfig } from "./DataService"

const noteApi = "https://localhost:44386/api/Note"

export const CreateNewNoteApi = (data) => {
    let response = axios.post(`${noteApi}/CreateNewNote`, data, HeaderConfig)
    return response;
}

export const AllNoteRetriveApi = () => {
    let response = axios.get(`${noteApi}/RetrieveAll`, HeaderConfig)
    return response
}

export const AllNoteRetriveWithoutArchivedeApi = () => {
    let response = axios.get(`${noteApi}/RetrieveAllNotesWithoutArchieve`, HeaderConfig)
    return response
}
export const AllNoteRetriveWithArchivedeApi = () => {
    let response = axios.get(`${noteApi}/RetrieveAllNotesWithArchieve`, HeaderConfig)
    return response
}

export const ArchieveNoteApi = (data) => {
    let response = axios.put(`${noteApi}/Archieve`, data, HeaderConfig)
    return response;
}
export const PinNoteApi = (data) => {
    let response = axios.put(`${noteApi}/Pining`, data, HeaderConfig)
    return response;
}
export const TrashNoteApi = (data) => {
    let response = axios.put(`${noteApi}/MoveToTrash`, data, HeaderConfig)
    return response;
}
export const ColorNoteApi = (data) => {
    let response = axios.put(`${noteApi}/ChangeColor`, data, HeaderConfig)
    return response;
}