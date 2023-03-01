import React, { useEffect, useState } from "react";
import './Dashboard.css'
import InputBox from "../../Component/InputBox/InputBox";
import InputCardBox from "../../Component/InputCardBox/InputCardBox";
import NoteBook from "../../Component/NoteBox/NoteBox";
import { AllNoteRetriveApi } from "../../Services/NoteService";
import NavigationBar from "../../Component/NavigationBar/NavigationBar";

function Dashboard() {
    const [toggle, setToggle] = useState(true);
    const [noteList, setNoteList] = useState([]);
    const [noteNavBarValue, setNeNavBarValue] = useState("note");

    const listenToInputBox = () => {
        setToggle(false)
    }

    const listenToInputCardBox = () => {
        setToggle(true)
    }

    const AutoRefreshNote = () => {
        AllNoteRetriveApiCall()
    }
    const AllNoteRetriveApiCall = () => {
        AllNoteRetriveApi()
            .then(response => {
                console.log(response)
                let noteArray = [];
                if (noteNavBarValue === "note") {
                    noteArray = response.data.data;
                }
                else if (noteNavBarValue === "Archieve") {
                    noteArray = response.data.data.filter((note) => {
                        if (note.isArchive === true && note.isTrash == false) {
                            return note;
                        }
                    })
                }
                else if (noteNavBarValue === "Trash") {
                    noteArray = response.data.data.filter((note) => {
                        if (note.isTrash === true) {
                            return note;
                        }
                    })
                }
                else if (noteNavBarValue === "Notes") {
                    noteArray = response.data.data.filter((note) => {
                        if (note.isTrash === false) {
                            return note;
                        }
                    })
                }
                setNoteList(noteArray)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        AllNoteRetriveApiCall();
    }, [noteNavBarValue])

    const NavBarRecivedText = (label) => {
        console.log(label)
        setNeNavBarValue(label)
    }

    return (
        <>
            <NavigationBar NavBarRecivedText={NavBarRecivedText} />
            <div className="SwitchInputBox">
                {
                    toggle ? <InputBox listenToInputBox={listenToInputBox} /> : <InputCardBox listenToInputCardBox={listenToInputCardBox} AutoRefreshNote={AutoRefreshNote} />
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