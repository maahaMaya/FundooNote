import React, { useState } from "react";
import ApplicationBar from "../Header/Header";
import InputBox from "../InputBox/InputBox";
import InputCardBox from "../InputCardBox/InputCardBox";

function Dashboard() {
    const [toggle] = useState(true);
    return(
        <>
            <ApplicationBar/>
            {
                toggle ? <InputBox/> : <InputCardBox/>
            }
        </>
    )
}
export default Dashboard;