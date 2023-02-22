import React, { useState } from 'react';
import './InputCardBox.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { CreateNewNoteApi } from '../../Services/NoteService';

export default function InputCardBox(props) {
    const [noteData, setNoteData] = useState({ title: '', note: '' });

    const OnClickInputCardBoxClose = () => {
        props.listenToInputCardBox()
        if(noteData.title || noteData.note){
            console.log("Api call for create note")
            CreateNewNoteApi(noteData)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    const InputCardBoxChangetitle = (e) => {
        setNoteData(preState => ({...preState, title : e.target.value }))
    }

    const InputCardBoxChangeNote = (e) => {
        setNoteData(preState => ({...preState, note : e.target.value }))
    }
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardHeader
                avatar={
                    <InputBase onChange={InputCardBoxChangetitle} id="outlined-basic" placeholder='Title' variant="outlined" multiline fullWidth="true" />
                }
                action={
                    <IconButton aria-label="settings">
                        <PushPinOutlinedIcon fontSize="small" />
                    </IconButton>
                }
            />
            <CardMedia
            />
            <CardContent>

                <InputBase onChange={InputCardBoxChangeNote} id="outlined-basic" placeholder='Take a note...' multiline fullWidth="true" />
            </CardContent>
            <CardActions disableSpacing className='CardInputBoxAction'>
                <div>
                    <IconButton aria-label="remindMe" >
                        <NotificationsActiveOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="collaborator">
                        <PersonAddAltOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="colorAddBg">
                        <PaletteOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="imageAddBg">
                        <InsertPhotoOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="archive">
                        <ArchiveOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="more">
                        <MoreVertOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="more">
                        <UndoIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="more" >
                        <RedoIcon fontSize="small" />
                    </IconButton>
                </div>
                <div>
                    <Button onClick={OnClickInputCardBoxClose} color="secondary" sx={{ textTransform: 'none' }}>Close</Button>
                </div>
            </CardActions>
        </Card>
    );
}