import React, { useState, useEffect, useRef } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '') 

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault(); //prevents page refresh

        props.onSubmit({
           id: Math.floor(Math.random() * 10000), 
            text: input
        });

        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input
                className='todo-input'
                type='text'
                name='text'
                placeholder='Update item'
                value={input}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button'>Update</button>
            </>
            ) :
            ( 
            <>
            <input
                className='todo-input'
                type='text'
                name='text'
                placeholder='Add a todo'
                value={input}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button'>Submit</button>
            </>
            )}
        </form>
    )
}

export default TodoForm;
