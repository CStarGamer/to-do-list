import React from "react";

import TodoItem from './todo-item'

import { TodoListInterface, TodoInterface } from "../interfaces";

export default function TodoList(props: TodoListInterface): JSX.Element {
    return (
        <div className='todo-list'>
            <ul>
                {
                    props.todos.map((todo: TodoInterface) => (
                        <li key={todo.id}>
                            <TodoItem
                                todo={todo}
                                handleToolUpdate={props.handleTodoUpdate}
                                handleTodoComplete={props.handleTodoComplete}
                                handleTodoBlur={props.handleTodoBlur}
                                handleTodoRemove={props.handleTodoRemove}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}