import * as React from 'react';
import './Header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import UserLogo from '../UserLogo/UserLogo';

export default function ApplicationBar() {
    const iconButtonStyles = {
        color: "yellow",
    };
    const inputStyles = {
        width: "670px"
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'white' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="#757575"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton>
                        <NoteAddRoundedIcon sx={iconButtonStyles} fontSize="large" />
                    </IconButton>
                    <Typography variant="h6" component="div" noWrap style={{ color: '#757575' }}>
                        Keep
                    </Typography>
                    <Search style={{ background: '#f5f5f5', marginRight: '24vw', marginLeft: '4vw', color: 'black' }}>

                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={inputStyles}
                        />
                    </Search>
                    <IconButton
                        size="large"
                        edge="start"
                        color="#757575"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <RefreshOutlinedIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="#757575"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ViewAgendaOutlinedIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="#757575"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <UserLogo/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}