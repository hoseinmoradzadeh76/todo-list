import { useState } from "react";

import Spinner from "./Spinner";
import { nanoid } from "nanoid";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
  

    const [loading, setLoading] = useState(false);

    //addTodo
    const todoNew = (title) => {
        let addNewTodo = {
            id: nanoid(),
            title,
            compeleted: false
        }
        setTodos([...todos, addNewTodo]);
        setLoading(false);
    };
    ///deleteTodo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));

    }
    //chengColor
    const chengColor = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, compeleted: !todo.compeleted } : todo))
    }
   
    return (

        <section className="container">
            <AddTodo todoNew={todoNew} />
            {
                loading ? <Spinner /> : (
                    <div className="row">
                        {
                            todos.length > 0 ? (
                                <ul className="mt-3">
                                    {
                                        todos.map((todo) => (
                                            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} chengColor={chengColor} />
                                        ))

                                    }
                                </ul>
                            ) : (<div className="row">
                                <p className="text-gray-500 mt-5">
                                    شما هیچ کاری را ثبت نکردید...
                                </p>

                            </div>)
                        }
                    </div>
                )
            }

        </section >
    )
}
export default TodoList;