import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { UpdateNoteApi } from '../../Services/NoteService';
import ColorPopper from '../ColorPopper/ColorPopper';
import RemainderSet from '../RemainderSet/RemainderSet';

export default function InputCardBoxModal(props) {
    const [noteData, setNoteData] = useState({ title: props.NoteDataPassToInputCardBoxModal.title, note: props.NoteDataPassToInputCardBoxModal.note , color:'', isArchive: false, isPin: false});
    const [InputCardBoxColor , setInputCardBoxColor] = useState('')
    const OnClickInputCardBoxModalClose = () => {
        let NoteUpdateData = {
            "noteID": props.NoteDataPassToInputCardBoxModal.noteID,
            "title": noteData.title,
            "note": noteData.note
          }
        props.handleClose(NoteUpdateData)
        if(noteData.title || noteData.note){
            console.log("Api call for update note")
            UpdateNoteApi(NoteUpdateData)
            .then(response => {
                console.log(response)
                //props.AutoRefreshNote()
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    const InputCardBoxModalChangetitle = (e) => {
        setNoteData(preState => ({...preState, title : e.target.value }))
    }

    const InputCardBoxModalChangeNote = (e) => {
        setNoteData(preState => ({...preState, note : e.target.value }))
    }

    const InputCardBoxModalArchiveOutlinedIconClick = () => {
        setNoteData(preState => ({...preState, isArchive : true }))
    }

    const InputCardBoxModalPushPinOutlinedIconClick = () => {
        setNoteData(preState => ({...preState, isPin : true }))
    }

    const listenToColorPopper1 = (popperColor) => {
        setInputCardBoxColor(popperColor)
        setNoteData(preState => ({...preState, color : popperColor }))
    }


    return (
        <Card sx={{ maxWidth: 600, backgroundColor:InputCardBoxColor }}>
            <CardHeader
                avatar={
                    <InputBase onChange={InputCardBoxModalChangetitle} value={noteData.title}  id="outlined-basic" placeholder='Title' variant="outlined" multiline fullWidth={true} />
                }
                action={
                    <IconButton onClick={InputCardBoxModalPushPinOutlinedIconClick} aria-label="settings">
                        <PushPinOutlinedIcon fontSize="small" />
                    </IconButton>
                }
            />
            <CardContent>
                <InputBase onChange={InputCardBoxModalChangeNote} value={noteData.note} id="outlined-basic" placeholder='Take a note...' multiline  />
            </CardContent>
            <CardActions disableSpacing className='CardInputBoxAction'>
                <div>
                    <RemainderSet />
                    <IconButton aria-label="collaborator">
                        <PersonAddAltOutlinedIcon fontSize="small" />
                    </IconButton>
                    <ColorPopper listenToColorPopper1={listenToColorPopper1} action="create"/>
                    <IconButton aria-label="imageAddBg">
                        <InsertPhotoOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton onClick={InputCardBoxModalArchiveOutlinedIconClick} aria-label="archive">
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
                    <Button onClick={OnClickInputCardBoxModalClose} color="secondary" sx={{ textTransform: 'none' }}>Close</Button>
                </div>
            </CardActions>
        </Card>
    );
}