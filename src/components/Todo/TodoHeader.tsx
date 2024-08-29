import React from 'react';
import InputField from '../InputField';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Button from '../Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Avatar from '@mui/material/Avatar';


const TodoHeader: React.FC = ({ }) => {

    return (
        <div className="flex flex-row">
            <div className='basis-1/2'>
                <h3 className='text-2xl font-medium my-2'>My ToDo</h3>
                <InputField placeholder='Search' Icon={SearchIcon} />
            </div>

            <div className='basis-2/3 '>
                <div className="flex flex-row justify-end my-2">
                    <Button className="flex-2/10" label='New task' StartIcon={ControlPointIcon} />
                    <Avatar className="flex-1/10 ml-2" alt="Profile pic" src="https://picsum.photos/200/300" />
                </div>

                <div className="flex flex-row justify-between">
                    <InputField className="basis-1/2" placeholder='From' Icon={DateRangeIcon} />
                    <InputField className="basis-1/2" placeholder='To' Icon={DateRangeIcon} />
                </div>

            </div>
        </div>
    )
}

export default TodoHeader
