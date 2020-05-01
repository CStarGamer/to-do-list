import React from 'react';

import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

import {TodoInterface} from './interfaces';

import './App.css';

import PageHeader from './components/page-header';

function App() {
  const [todos, setTodos]: [TodoInterface[], React.Dispatch<React.SetStateAction<TodoInterface[]>>] = React.useState<TodoInterface[]>([]);

  // Handle creating todos
  function handleTodoCreate(todo: TodoInterface) {
    // Prepare new todos state
    const newTodoState: TodoInterface[] = [...todos]

    // Update new todos state
    newTodoState.push(todo);

    // Update todos state
    setTodos(newTodoState);
  }

  // Update existing todo item
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos];

    // Find the correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value;

    // Update todos state
    setTodos(newTodosState);
  }

  // Remove existing todo
  function handleTodoRemove(id: string) {
    // Prepare new todo state
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id);

    // Update todos state
    setTodos(newTodosState);
  }

  // Check todo item as complete/not complete
  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos];
    
    // Find the item and mark it as completed
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !(newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted);

    // Update todos state
    setTodos(newTodosState);
  }

  // Check if todo item has text
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.trim().length === 0) {
      event.target.classList.add('todo-input-error');
    }
    else {
      event.target.classList.remove('todo-input-error');
    }
  }

  return (
    <div className="App">
      <PageHeader/>
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />

      <TodoList
        todos={todos}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
        handleTodoRemove={handleTodoRemove}
        handleTodoUpdate={handleTodoUpdate}
      />
    </div>
  );
}

export default App;
