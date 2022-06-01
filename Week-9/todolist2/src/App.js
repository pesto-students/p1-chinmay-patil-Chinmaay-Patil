import React, {  useState } from 'react';
import './App.css';

function App() {
  const [todos, settodos] = useState([])
  const [todo, settodo] = useState("")
  const [todoediting, settodoediting] = useState("")
  const [editingtext, seteditingtext] = useState(null)
 
  // function to handle submit to add todo to todos list
  function handlesubmit(e) {
    e.preventDefault();
    if (todo) {
      const newtodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false
      }
      settodos([...todos, newtodo])
      settodo("")
      
      
    }
    else {
      window.alert("Cannot Add Blank ToDO")
    }
  }
  // function to delete todo
  function deletetodo(id) {
    const updatedtodos = [...todos].filter((todo) => todo.id !== id)
    settodos(updatedtodos)
  }
  //function to clear completed
  function clearcompleted() {
    const updatedtodos = [...todos].filter((todo) => todo.completed === false)
    settodos(updatedtodos)
  }
  function deleteall() {
    settodos([])
  }

  //function marking as completed or not completed
  function completedtodo(id) {
    const updatedtodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }
    )
    settodos(updatedtodos)
  }

  function edittodo(id) {
    const updatedtodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingtext
      }
      return todo
    })
    settodos(updatedtodos)
    settodoediting(null)
    seteditingtext("")
  }
  //returning all the components
  return (
    <div className="App">
      <h1>To-Do List</h1>


      {/* creating text box to add todo and add button */}
      <form className='form' onSubmit={handlesubmit}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <input id="inputtextbox" type="text" placeholder='Write Task Here...' onChange={(e) => settodo(e.target.value)} value={todo} />
        <button id="addbutton" type="submit" class="fa fa-plus" ></button>
      </form>

      {/* displaying checkbox for toggling completion and creating delete button and display todos */}
      <div id='listdisplay'> {todos.map((todo) =>
        <div id='onetodo' className={todo.completed ? "strike" : ""} key={todo.id}>

          <input id="checkboxes" type="checkbox" value={todo.text} onChange={() => completedtodo(todo.id)} checked={todo.completed} />
          {todoediting === todo.id ? (<><button id="editbutton" onClick={() => edittodo(todo.id)}>submit edit</button>
            <input id="edittextbox"
              type="text" placeholder={todo.text}
              onChange={(e) => seteditingtext(e.target.value)}
            value= {todo.text}
            /> </>) : (<> {todo.text}</>)}
          <button id="deletetodo" class="fa fa-trash" onClick={() => deletetodo(todo.id)}></button>
          <button id="edittodo" class="fa fa-edit" onClick={() => settodoediting(todo.id)} > </button>
        </div>)}
      </div>
      <div id="ccda">
        <button onClick={() => clearcompleted()}>Clear Completed</button>
        <button onClick={() => deleteall()}>Delete All</button>
      </div>

    </div>
  );
}



export default App;





