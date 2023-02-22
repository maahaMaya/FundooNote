import React, { useState } from "react";
import ApplicationBar from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import InputCardBox from "../InputCardBox/InputCardBox";

function Dashboard() {
    const [toggle, setToggle] = useState(true);

    const listenToInputBox = () => {
        setToggle(false)
    }
    const listenToInputCardBox = () => {
        setToggle(true)
    }

    return(
        <>
            <ApplicationBar/>
            {
                toggle ? <InputBox listenToInputBox={listenToInputBox}/> : <InputCardBox listenToInputCardBox={listenToInputCardBox}/>
            }
        </>
    )
}
export default Dashboard;