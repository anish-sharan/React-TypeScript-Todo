import React, { useRef, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import Button from './components/Button';
import ListSection from './components/ListSection';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleListAdd = (e: React.FormEvent) =>{
    e.preventDefault();

    const constructedTodo = {
      id : Date.now(),
      todo: todo,
      isDone: false
    };
    setTodoList([...todoList,constructedTodo])

    setTodo("")

    inputRef.current?.blur();
    
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleListAdd(e)}>
        <InputField todo={todo} setTodo={setTodo} inputRef={inputRef}/>
        <Button todoList={todoList} setTodo={setTodo} setTodoList={setTodoList} />
      </form>

      <ListSection todoList={todoList}/>
    </div>
  );
}

export default App;
