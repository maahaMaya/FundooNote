import React, { useEffect, useState } from "react";
import './Dashboard.css'
import ApplicationBar from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import InputCardBox from "../InputCardBox/InputCardBox";
import NoteBook from "../NoteBox/NoteBox";
import { AllNoteRetriveApi } from "../../Services/NoteService";

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
            <div className="SwitchInputBox">
                {
                    toggle ? <InputBox listenToInputBox={listenToInputBox} /> : <InputCardBox listenToInputCardBox={listenToInputCardBox} />
                }
            </div>

            <div style={{ width: '70%', height: '100%', border: '1px solid red', display: 'flex', flexWrap: 'wrap' }}>
                {
                    noteList.map(note => (<NoteBook note={note} />))
                }
            </div>
        </>
    )
}
export default Dashboard;