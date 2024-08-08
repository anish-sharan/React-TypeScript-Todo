import React from 'react'

interface Props {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    inputRef: React.RefObject<HTMLInputElement>
}

const InputField: React.FC<Props> = ({ todo, setTodo, inputRef }) => {
    // const InputField = ({todo, setTodo} : Props) => { // can be used like this as well

    return (
        <div>
            <input
                ref={inputRef}
                placeholder='Enter task' value={todo}
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
            />
        </div>
    )
}

export default InputField