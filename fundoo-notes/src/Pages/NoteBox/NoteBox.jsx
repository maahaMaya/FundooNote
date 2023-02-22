import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { NoteMoveToTrash } from '../../Services/NoteService';


export default function NoteBook(props) {

  const [noteID, setNoteId] = useState({j : props.note.noteID})
  const NoteBookTrashIcon = () => {
    console.log(noteID, "----------")
    NoteMoveToTrash(noteID)
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
            <PushPinOutlinedIcon fontSize="small" />
          </IconButton>
        }
        title={props.note.title}
      />
      <CardMedia
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
        <IconButton aria-label="imageAddBg">
          <InsertPhotoOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={NoteBookTrashIcon} aria-label="archive">
          <ArchiveOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="more">
          <MoreVertOutlinedIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
}