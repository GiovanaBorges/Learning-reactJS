import React, { useState, useEffect } from "react";
import { WrapperTodolist, Task, Input } from "./layout.style";

const Layout = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    console.log(newTodo);
    setTodo("");
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <WrapperTodolist>
      <form onSubmit={handleSubmit}>
        <Input>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit">Adicionar</button>
        </Input>
        {todos.map((todo) => (
          <Task key={todo.id}>
            {todo.text}
            <input
              type="checkbox"
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
            />
            <button onClick={() => deleteTodo(todo.id)}>Deletar</button>
          </Task>
        ))}
      </form>
    </WrapperTodolist>
  );
};
export default Layout;
