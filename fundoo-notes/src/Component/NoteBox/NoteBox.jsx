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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { ArchieveNoteApi, ColorNoteApi, PinNoteApi, TrashNoteApi } from '../../Services/NoteService';
import ColorPopper from '../ColorPopper/ColorPopper';
import Modal from '@mui/material/Modal';
import InputCardBoxModal from '../InputCardBoxModal/InputCardBoxModal';


export default function NoteBook(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let NoteDataPassToInputCardBoxModal = props.note;
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

  const listenToColorPopper2 = (popperColor) => {
    console.log(popperColor)
    let nId = {
      "noteID": props.note.noteID,
      "color": popperColor
    }
    ColorNoteApi(nId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (<>
    <Card sx={{ maxWidth: 240, backgroundColor: props.note.color }}>
      <CardHeader
        action={
          <IconButton onClick={() => NoteBookPushPinOutlinedIconClick(props.note.noteID)} aria-label="settings">
            <PushPinOutlinedIcon fontSize="small" />
          </IconButton>
        }
        title={props.note.title}
        onClick={handleOpen}
      />
      <CardContent>
        <Typography onClick={handleOpen} variant="body2" color="text.secondary">
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
        <ColorPopper listenToColorPopper2={listenToColorPopper2} action="update" />
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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{display:'flex', justifyContent:'center', alignItems:'center' }}
    >
      <div style={{width:'600px'}}>
        <InputCardBoxModal handleClose={handleClose} NoteDataPassToInputCardBoxModal={NoteDataPassToInputCardBoxModal}/>
      </div>
    </Modal>
  </>

  );
}