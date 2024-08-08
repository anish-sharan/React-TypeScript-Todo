import React from 'react'
import { Todo } from '../model'

interface Props {
    todoList: Todo[]
}

const ListSection: React.FC<Props> = ({ todoList }: Props) => {
    return (
        <div>{
            todoList?.map((eachTodo,ind) => {
           return <li key={ind}>{eachTodo?.todo}</li>
        })}
        </div>
    )
}

export default ListSection;
