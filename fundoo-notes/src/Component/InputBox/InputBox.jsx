import * as React from 'react';
import Stack from '@mui/material/Stack';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IconButton from '@mui/material/IconButton';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import './InputBox.css'
import InputBase from '@mui/material/InputBase';


export default function InputBox(props) {
    const InputCardBoxRender = () => {
        props.listenToInputBox()
    }
    return (
        <Stack spacing={3} direction="row" className='inputBoxMainDiv'  >
            <InputBase id="outlined-basic" placeholder='Take a note...' variant="outlined" multiline fullWidth={true} onClick={InputCardBoxRender} />
            <IconButton aria-label="checked">
                <CheckBoxOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="newNoteWithDesign">
                <BrushOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="newNoteWithImage">
                <InsertPhotoOutlinedIcon fontSize="small" />
            </IconButton>
        </Stack>
    );
}