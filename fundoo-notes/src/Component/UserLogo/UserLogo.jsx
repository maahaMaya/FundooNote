import React, { useState } from "react";
import { deepOrange } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from "react-router";

export default function UserLogo() {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    let navigate = useNavigate();

    const SingOutFundoo = () => {
        localStorage.removeItem("token")
        navigate('/')
    }

    const RegistrationNewPage = () => {
        window.open('http://localhost:3000/newUser', '_blank', 'noreferrer');
    }

    return (
        <>
            <Avatar aria-describedby={id} type="button" onClick={handleClick} sx={{ bgcolor: deepOrange[500] }}>
                S
            </Avatar>
            <Popper id={id} open={open} anchorEl={anchorEl} >
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', alignContent: 'space-between' }}>
                    <Stack spacing={3} direction="row">
                        <PersonAddAltOutlinedIcon />
                        <Button variant="text" sx={{ textTransform: 'none' }} onClick={RegistrationNewPage}>Add another account</Button>
                    </Stack>
                    <Stack spacing={3} direction="row">
                        <LogoutOutlinedIcon/>
                        <Button variant="text" sx={{ textTransform: 'none' }} onClick={SingOutFundoo}>Sign Out</Button>
                    </Stack>
                </Box>

            </Popper>

        </>
    )
}