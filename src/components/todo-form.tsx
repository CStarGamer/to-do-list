import React from 'react';
import shortid from 'shortid';

import {TodoInterface, TodoFormInterface} from '../interfaces';

export default function TodoForm(props: TodoFormInterface) {
    // Ref for form input
    const inputRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);

    // Form states
    const [formState, setFormState]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState('');

    // Function to create new todo
    function createNewTodo() {
        if (formState.trim().length === 0) {
            document.getElementById('new-todo-input')?.classList.add('new-todo-error');
        }
        else {
            document.getElementById('new-todo-input')?.classList.remove('new-todo-error');
            // Prepare new todo object
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false
            }

            // Create new todo item
            props.handleTodoCreate(newTodo);

            // Reset input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = "";
                setFormState("");
            }
        }
    }

    // Handle input change
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        // Update form state with the text from input
        setFormState(event.target.value);
    }

    // Handle 'Enter' in todo input
    function handleInputEnter(event: React.KeyboardEvent) {
        // Check for Enter
        if (event.key === 'Enter') {
            createNewTodo();
        }
    }

    // Return the form
    return (
        <div className='todo-form'>
            <input
                id='new-todo-input'
                ref={inputRef}
                type="text"
                placeholder='Enter new todo task here, then press Enter.'
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleInputEnter(event)}
            />
        </div>

    )
}