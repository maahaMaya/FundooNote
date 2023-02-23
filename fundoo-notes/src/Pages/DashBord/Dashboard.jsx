import React, { useEffect, useState } from "react";
import './Dashboard.css'
import ApplicationBar from "../../Component/Header/Header";
import InputBox from "../../Component/InputBox/InputBox";
import InputCardBox from "../../Component/InputCardBox/InputCardBox";
import NoteBook from "../../Component/NoteBox/NoteBox";
import { AllNoteRetriveApi } from "../../Services/NoteService";

function Dashboard() {
    const [toggle, setToggle] = useState(true);
    const [noteList, setNoteList] = useState([]);

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
            <ApplicationBar/>
            <div className="SwitchInputBox">
                {
                    toggle ? <InputBox listenToInputBox={listenToInputBox} /> : <InputCardBox listenToInputCardBox={listenToInputCardBox} />
                }
            </div>

            <div className="DashboardNoteBox">
                {
                    noteList.map(note => (<NoteBook key={note.noteID} note={note} />))
                }
            </div>
        </>
    )
}
export default Dashboard;