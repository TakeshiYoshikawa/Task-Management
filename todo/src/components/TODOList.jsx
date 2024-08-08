import React from "react"
import TODOItem from "./TODOItem";

function TODOList({todos, setTodos}) {
    return(
        <ol className="todo_list">
            { todos && todos.length > 0 ?
                (todos?.map((item, index) => ( <TODOItem key={index} item={item} setTodos={setTodos}/>))) :
                (<p>No tasks registered.</p>)
            }
        </ol>
    );
}

export default TODOList;