import React from 'react'
import { Todo } from '../model'

interface Props {
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Button: React.FC<Props> = ({ todoList, setTodoList, setTodo }: Props) => {
    return (
        <div><button type='submit'>Add</button></div>
    )
}

export default Button;
