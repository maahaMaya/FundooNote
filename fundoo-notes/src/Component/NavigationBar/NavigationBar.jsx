import React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Header from '../Header/Header';

import { connect } from 'react-redux'; //HOC

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function NavigationBar(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpenClose = () => {
        setOpen(!open);
    };

    const SelectNavBarText = (label) => {
        props.NavBarRecivedText(label)
        props.dispatch({type:`${label}`})
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header handleDrawerOpenClose={handleDrawerOpenClose}/>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem disablePadding sx={{ display: 'block' }}  onClick={() => SelectNavBarText("Notes")}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LightbulbOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Notes" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => SelectNavBarText("Reminders")}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <NotificationsActiveOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Reminders" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => SelectNavBarText("Edit")}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CreateOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Edit labels" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => SelectNavBarText("Archieve")}>
                            <ListItemButton >
                                <ListItemIcon>
                                    <ArchiveOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Archieve" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ display: 'block' }} onClick={() => SelectNavBarText("Trash")}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DeleteOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Trash" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </Box>
        </>
    );
}

export default connect() (NavigationBar) 