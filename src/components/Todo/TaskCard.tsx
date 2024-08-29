import React from 'react';
import InputField from '../InputField';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Button from '../Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';

interface Props {
    key: number
}


const TaskCard: React.FC<Props> = ({ key }: Props) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(
            'handleDragStart'
        );

        // Set data for the drag event
        // e.dataTransfer.setData('text/plain', Math.random().toString()); // Store the key or ID of the task
        // e.dataTransfer.effectAllowed = 'move'; // Indicate that this is a move operation
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // Allow drop
        console.log(
            'handleDragOver'
        );

    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(
            'handleDrop'
        );
        // const draggedKey = e.dataTransfer.getData('text/plain'); // Get the dragged task ID
        // console.log('Dropped Task ID:', draggedKey);
        // // Handle your drop logic here (e.g., update state)
    };

    return (
        <article
            role="button" // Set role to button for accessibility
            tabIndex={0} // Make it focusable
            draggable={true}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="my-3" // Add margin
        >
            <CardContent className='bg-white rounded-lg border-2 border-border-color my-3'>
                <Typography variant="h5" component="div">
                    sfdasdfsfdf
                </Typography>

                <Typography variant="body2">
                    wLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
            </CardContent>
        </article >
    )

}


export default TaskCard
