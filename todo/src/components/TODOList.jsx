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
    return(
        <li id="item?.id" className="todo_item">
            <p>{item?.title}</p>
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