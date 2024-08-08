import React from "react"

function TODOList({todos, setTodos}) {
    return(
        <ol className="todo_list">
            { todos && todos.length > 0 ?
                (todos?.map((item, index) => ( <Item key={index} item={item} setTodos={setTodos}/>))) :
                (<p>No tasks registered.</p>)
            }
        </ol>
    );
}

function Item({item, todos, setTodos}){
    const completeTodo = () => {
        setTodos((previousTodos) =>
            previousTodos.map((todo) =>
                todo.id === item.id? {...todo, is_completed: !todo.is_completed} : todo
            )
        );
    }

    return(
        <li id="item?.id" className="todo_item" onClick={completeTodo}>
            <button className="todo_items_left">
                <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={34}
                stroke="#22C55E"
                fill={item.is_completed ? "#22C55E" : "#0d0d0d"}
                >
                    <circle cx={11.998} cy={11.998} fillRule="nonzero" r={9.998}/>
                </svg>
            <p>{item?.title}</p>
            </button>            

            <form className="edit-form">
            </form>
            <div className="todo_items_right">
                <button>
                    <span className="visually-hidden">Edit</span>
                    <svg>
                        <path d=""/>
                    </svg>
                </button>
                <button>
                    <span className="visually-hidden">Delete</span>
                    <svg>
                        <path d=""/>
                    </svg>
                </button>
            </div>
        </li>
    );
}

export default TODOList;