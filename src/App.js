import "./App.css";
import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads we need to listen to the database and fetch new todos
  useEffect(() => {
    //this code loads when app.js is loads. Or it loads up every time if there is a variable in the parameter arrya
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
      //setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault(); //remove this and see wha happens. SO if we remove this, the page reloads every time we add a new element to the todos array
    //to prevent that we use this
    db.collection('todos').add({
      todo: input, 
      // this line of code LITERALLY adds the new todo in input to the firestore database
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // this adds a timestamp to the firebase database so 
    })
    setInput(''); //this clears up the input field after creating the new todo
  };

  return (
    <div className="App">
      <h1>Hello World</h1>

      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={event => {
              setInput(event.target.value)
            }}
          />
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          {/* the "disabled={!input}" basically does not allow you to click the button if the input field is empty */}
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
