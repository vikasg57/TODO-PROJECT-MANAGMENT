import React, { useState } from 'react';
import styles from '../css/styles.module.css'

const TodoList =()=>{
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) =>{
        if (e.target.value === ''){
            console.log('error')
        }
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue("")
    }
    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    return<>    
            <div>
                <h1 className={styles.todoheader}>TODO APP</h1>
        <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button className={styles.todobutton} onClick={handleSubmit}>Add Item</button>
        </form>
        <ul>
            {todos.map((todo, index)=>(
                          <li key={index}>
                            {todo}
                            <button className={styles.todobutton}  onClick={() =>handleDelete(index)}>Delete</button>
                          </li>  
            ))} 

        </ul>
        </div>
    </>
} 

export default TodoList;
