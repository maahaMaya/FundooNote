import React from "react"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import linechart from '../../../src/images/keep.png';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import UserLogo from '../UserLogo/UserLogo';

import { connect } from 'react-redux'

const drawerWidth = 0;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


 function Header(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const DrawerOpenClose = () => {
        props.handleDrawerOpenClose();
    };

    const SerachNote = (event) => {
        props.SerchHeader(event.target.value)   
    }

    const RefreshNotePage = () => {
        props.AutoRefreshNote();
    }

    return (
        <>
            <AppBar position="fixed" open={open} style={{ backgroundColor: '#fff', color: '#000' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={DrawerOpenClose}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={linechart} alt="piechart" height="36px" width="36px" style={{ marginLeft: '1vw' }} />
                    <Typography variant="h6" noWrap component="div" sx={{ ml: '0.5vw' }}>
                    {props.label}
                    </Typography>
                    <TextField
                        placeholder="Search"
                        id="outlined-start-adornment"
                        size='small'
                        sx={{ ml: '6%', mr: '14%', width: '49%' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                        }}
                        onKeyUp={SerachNote}
                    />
                    <IconButton onClick={RefreshNotePage} size="large" edge="start" color="#757575" aria-label="menu" sx={{ mr: '1%' }}>
                        <RefreshOutlinedIcon />
                    </IconButton>
                    <IconButton size="large" edge="start" color="#757575" aria-label="menu" sx={{ mr: '1%' }}>
                        <ViewAgendaOutlinedIcon />
                    </IconButton>
                    <IconButton size="large" edge="start" color="#757575" aria-label="menu" sx={{ mr: '6%' }}>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <UserLogo />
                </Toolbar>
            </AppBar>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        label : state.DrawerReducer.title
    }
}

export default connect(mapStateToProps) (Header)
//export default connect(mapStateToProps) (Header)