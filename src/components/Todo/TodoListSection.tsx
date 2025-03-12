import React from 'react';
import InputField from '../InputField';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Button from '../Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import TaskCard from './TaskCard';

interface Props {
    listLabel: string,
    className?: string;
}


const TodoListSection: React.FC<Props> = ({ listLabel, className }: Props) => {

    return (
        <div className={`flex flex-col ${className}`}>
            <div className='flex flex-row'>
                <div className='bg-red-400 h-4 w-4 rounded-full mr-2'></div>
                <h5 className='text-2xs font-medium'>{listLabel}</h5>
            </div>

            <div className='bg-todo-background overflow-y-auto h-[65vh] p-3' >
                {
                    [1, 3, 3, 3, 4, 4,].map((eachItem) => {
                        return (
                            <TaskCard key={eachItem} />
                        );
                    })
                }
            </div>
        </div>
    )

}


export default TodoListSection
