import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import News from "./news";
import { increment, decrement } from "./redux/reducer/static/counter";
import { addTodo, editTodo, removeTodo } from "./redux/reducer/static/todos";

function App() {
    const counter = useSelector((state) => state.counter.value);
    const todos = useSelector((state) => state.todo.todos);
    const [currentInputText, setCurrentInputText] = useState("");
    //ref
    console.log(currentInputText);
    const addInputRef = useRef("");
    console.log(todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        console.log(addInputRef.current.value);
        const inputData = {
            id: new Date().getTime(),
            value: addInputRef.current.value,
        };
        dispatch(addTodo(inputData));
        addInputRef.current.value = "";
    };
    const handleEditTodo = (data) => {
        dispatch(
            editTodo({
                ...data,
                value: currentInputText,
            })
        );
    };
    return (
        <>
            <div className="container">
                <button className="btn" onClick={() => dispatch(increment())}>
                    +
                </button>
                <button className="btn" onClick={() => dispatch(decrement())}>
                    -
                </button>
                <span>{counter}</span>
            </div>
            <div className="container">
                <div>
                    <input type="text" ref={addInputRef} />
                    <button className="btn" onClick={handleAddTodo}>
                        Add todo
                    </button>
                </div>
                <ul>
                    {todos.map((item) => (
                        <li key={item.id}>
                            <input
                                type="text"
                                defaultValue={item.value}
                                onChange={(e) =>
                                    setCurrentInputText(e.target.value)
                                }
                            />
                            <button
                                className="btn"
                                onClick={() => handleEditTodo(item)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn"
                                onClick={() => dispatch(removeTodo(item))}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container">
                <News />
            </div>
        </>
    );
}

export default App;
