import React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function TimerSet(props) {
    const currentDateTime = new Date();
    const [dateTimeValue, setDateTimeValue] = React.useState(dayjs(currentDateTime));

    const PickDateTime = (dateTimeValue) => {
        props.listenTimerSet(dateTimeValue)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                dateTimeValue={dateTimeValue}
                onChange={(newValue) => {
                    setDateTimeValue(newValue);
                }}
                onClose={() => PickDateTime(dateTimeValue)}
            />
        </LocalizationProvider>
    );
}
