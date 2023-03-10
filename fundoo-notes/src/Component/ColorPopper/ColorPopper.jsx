import React, { useState } from "react";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';

function ColorPopper(props) {
    const colors =["#ffffff" ,"#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#e8eaed", "#e6c9a8", "#fdcfe8"]

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const PickColor = (color) => {
        if (props.action === "create") {
            console.log("color comming from note2")
            props.listenToColorPopper1(color)
        } else if (props.action === "update") {
            console.log("color comming from note3")
            props.listenToColorPopper2(color)
        }
    }
    return (
        <>
            <IconButton aria-describedby={id} type="button" onClick={handleClick}>
                <PaletteOutlinedIcon fontSize="small" />
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', width: 300, display: 'flex', justifyContent: 'space-between' }}>
                    {
                        colors.map(color => (
                            <div key={color} style={{ width: 20, height: 20, border: '1px solid red', borderRadius: 100, backgroundColor: color }} onClick={() => PickColor(color)}></div>
                        ))
                    }
                </Box>
            </Popper>
        </>
    )
}
export default ColorPopper;