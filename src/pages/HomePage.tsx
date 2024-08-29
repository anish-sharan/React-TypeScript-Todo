import React from 'react'
import { Card } from '@mui/material';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoListSection from '../components/Todo/TodoListSection';

const HomePage: React.FC = ({ }) => {

    return (
        <div className='flex flex-row p-4 h-screen'>
            <h3 className='basis-1/6 text-white text-2xl font-bold'>
                Todo
            </h3>
            <Card className='basis-5/6 p-5'>
                <TodoHeader />
                <div className='flex flex-row justify-between mt-5'>
                    <TodoListSection className="basis-1/3 px-2" listLabel='To Start' />
                    <TodoListSection className="basis-1/3 px-2" listLabel='To Start' />
                    <TodoListSection className="basis-1/3 px-2" listLabel='To Start' />
                </div>
            </Card>
        </div>
    )
}

export default HomePage