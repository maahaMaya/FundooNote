import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


export default function NoteBook() {

  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <PushPinOutlinedIcon fontSize="small" />
          </IconButton>
        }
        title="Shrimp  Paella"
      />
      <CardMedia
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="remindMe" >
          <NotificationsActiveOutlinedIcon fontSize="small"/>
        </IconButton>
        <IconButton aria-label="collaborator">
          <PersonAddAltOutlinedIcon fontSize="small"/>
        </IconButton>
        <IconButton aria-label="colorAddBg">
          <PaletteOutlinedIcon fontSize="small"/>
        </IconButton>
        <IconButton aria-label="imageAddBg">
          <InsertPhotoOutlinedIcon fontSize="small"/>
        </IconButton>
        <IconButton aria-label="archive">
          <ArchiveOutlinedIcon fontSize="small"/>
        </IconButton>
        <IconButton aria-label="more">
          <MoreVertOutlinedIcon fontSize="small"/>
        </IconButton>
      </CardActions>
    </Card>
  );
}