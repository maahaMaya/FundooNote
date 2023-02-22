import React, { useEffect, useState } from "react";
import { AllNoteRetriveApi } from "../../Services/DataService";
import ApplicationBar from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import InputCardBox from "../InputCardBox/InputCardBox";
import NoteBook from "../NoteBox/NoteBox";

function Dashboard() {
    const [toggle, setToggle] = useState(true);
    const [noteList, setNoteList] = useState([])

    const listenToInputBox = () => {
        setToggle(false)
    }
    const listenToInputCardBox = () => {
        setToggle(true)
    }
    useEffect(() => {
        AllNoteRetriveApi()
            .then(response => {
                console.log(response)
                setNoteList(response.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <ApplicationBar />
            {
                toggle ? <InputBox listenToInputBox={listenToInputBox} /> : <InputCardBox listenToInputCardBox={listenToInputCardBox} />
            }
            <div style={{ width: '70%', height: '100%', border: '1px solid red', display: 'flex', flexWrap: 'wrap' }}>
                {
                    noteList.map(note => (<NoteBook/>))
                }
            </div>
        </>
    )
}
export default Dashboard;