/* 
"use client" solves Error: Event handlers cannot be passed to Client Component props. when
form component tries to run handleSubmit function onSubmit
*/
"use client"

import React from "react";
import Form from "@/components/Form"
import Header from "@/components/Header"
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function Home(){
  const [todos, setTodos] = React.useState([
    {title: "Task 1", id: crypto.randomUUID(), is_completed: true},
    {title: "Task 2", id: crypto.randomUUID(), is_completed: false},
    {title: "Task 3", id: crypto.randomUUID(), is_completed: false},
    {title: "Task 4", id: crypto.randomUUID(), is_completed: true},
  ]);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;

  const total_todos = todos.length;

  return(
    <div className="wrapper">
      <Header/>
      <TODOHero todos_completed={todos_completed} total_todos={total_todos}/>
      <Form todos={todos} setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default Home;