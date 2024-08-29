import { InputAdornment, TextField } from '@mui/material';
import React from 'react'

interface Props {
    value?: string | number;
    setValue?: React.Dispatch<React.SetStateAction<string>>,
    inputRef?: React.RefObject<HTMLInputElement>,
    placeholder: string,
    Icon?: React.ComponentType;
    className?: string;
}

const InputField: React.FC<Props> = ({ value, setValue, inputRef, placeholder, Icon, className }) => {
    // const InputField = ({todo, setValue} : Props) => { // can be used like this as well

    return (
        <div>
            <TextField
                id="outlined-basic"
                label={placeholder}
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {Icon && <Icon />}
                        </InputAdornment>
                    ),
                }}
                className={className}
            />

        </div>
    )
}

export default InputField