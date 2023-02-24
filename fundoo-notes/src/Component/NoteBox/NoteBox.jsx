import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { ArchieveNoteApi, PinNoteApi, TrashNoteApi } from '../../Services/NoteService';


export default function NoteBook(props) {

  const NoteBookArchiveOutlinedIconClick = (id) => {
    let nId = {
      "noteID": id
    }
    ArchieveNoteApi(nId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const NoteBookDeleteOutlinedIconClick = (id) => {
    let nId = {
      "noteID": id
    }
    TrashNoteApi(nId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const NoteBookPushPinOutlinedIconClick = (id) => {
    let nId = {
      "noteID": id
    }
    PinNoteApi(nId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <PushPinOutlinedIcon onClick={() => NoteBookPushPinOutlinedIconClick(props.note.noteID)} fontSize="small" />
          </IconButton>
        }
        title={props.note.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.note.note}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="remindMe" >
          <NotificationsActiveOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="collaborator">
          <PersonAddAltOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="colorAddBg">
          <PaletteOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => NoteBookDeleteOutlinedIconClick(props.note.noteID)} aria-label="imageAddBg">
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => NoteBookArchiveOutlinedIconClick(props.note.noteID)} aria-label="archive">
          <ArchiveOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="more">
          <MoreVertOutlinedIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}