import React from 'react'
import { Button as CustomButton } from '@mui/material';
import Colors from '../assets/Colors';

interface Props {
    label: string;
    color?: string;
    containerStyle?: React.CSSProperties;
    StartIcon?: React.ComponentType;
    className: string;
    // setTodo: React.Dispatch<React.SetStateAction<string>>,
    // todoList: Todo[],
    // setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Button: React.FC<Props> = ({ label, color = Colors.button, containerStyle, StartIcon, className }: Props) => {
    return (
        <CustomButton variant="contained"
            style={{ backgroundColor: color, ...containerStyle }}
            startIcon={StartIcon && < StartIcon />}
            className={className}
        >
            {label}
        </CustomButton>
    )
}

export default Button;
