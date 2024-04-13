import React, { useState , useRef} from 'react';
import styles from '../css/styles.module.css'

const TodoList =()=>{
    const [todos, setTodos] = useState([]);
    const [inputValueObj, setInputValueObj] = useState({"title":"", "state":"", "input_box": ""});
    const selectRef = useRef(null)


    const handleToDoTitle = (e, state, input_box) =>{
        console.log(inputValueObj)
        setInputValueObj({"state": state, "title": e.target.value, "input_box": input_box})
    }

    const handleToDoState = (e) =>{
        setInputValueObj({...inputValueObj, "state": e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTodos([...todos, inputValueObj])
        console.log(inputValueObj)
        setInputValueObj({"title":"", "state":""})
        selectRef.current.value = "...";
    }
    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

      const item_states = [
        {
            "title": "TO DO",
            "state": "to_do"
        },
        {
            "title": "READY TO PICKUP",
            "state": "ready_to_pickup"
        },

        {
            "title": "IN PROGRESS",
            "state": "in_progress"
        },
        {
            "title": "COMPLETED",
            "state": "completed"
        }

      ]

    return<>    
        <div>
                <h1 className={styles.todoheader}>TODO APP</h1>
        <form>
        <input type='text' value={inputValueObj.input_box === "global"? inputValueObj?.title: ""} onChange={(e)=>handleToDoTitle(e, "", "global")}/>
        <select ref={selectRef} onChange={handleToDoState}>
        <option value="...">...</option>
        {
            item_states.map((item_state)=>(
                <option value={item_state.state}>{item_state.title}</option>
            ))
        }
        </select>
        <button className={styles.todobutton} onClick={handleSubmit}>Add Item</button>
        </form>
        <div className={styles.list_cotainer}>
        {item_states.map((item_state) => (
                    <div className={styles.list_ind}>
                    <p>{item_state.title}</p>
                        {todos.filter((todo)=> todo.state === item_state.state).map((todo, index)=>(
                                      <li className={styles.item_style}  key={index}>
                                        {todo.title}
                                        <button className={styles.todobutton}  onClick={() =>handleDelete(index)}>Delete</button>
                                      </li>  
                        ))} 
                                <div>
                    <input type='text' value={inputValueObj.input_box ===item_state.state? inputValueObj?.title: ""} onChange={(e)=>handleToDoTitle(e, item_state.state, item_state.state)}/>
                    <button className={styles.todobutton} onClick={handleSubmit}>Add Item</button>
                    </div>
                    </div>
        ))}
        </div>
        </div>
    </>
} 

export default TodoList;
