import React, { useState } from "react";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TimerSet from "../TimerSet/TimerSet";


function RemainderSet(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const listenTimerSet = (z) => {
        console.log("HIi",z )
    }
    return (
        <>
            <IconButton aria-describedby={id} type="button" onClick={handleClick} aria-label="remindMe">
                <NotificationsActiveOutlinedIcon fontSize="small" />
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl} style={{backgroundColor:"#fff"}}>
                <Box>
                    <TimerSet listenTimerSet = {listenTimerSet}/>
                </Box>
            </Popper>
        </>

    )
}

export default RemainderSet;