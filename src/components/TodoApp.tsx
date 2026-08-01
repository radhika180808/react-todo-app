import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useLocalStorage<string[]>("todos", []);

    function addTodo() {
        if (task.trim() === "") return;

        setTodos([...todos, task]);
        setTask("");
    }

    function deleteTodo(index: number) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "10px",
            }}
        >
            <h2>📝 Todo App</h2>

            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{ padding: "8px", width: "70%" }}
            />

            <button
                onClick={addTodo}
                style={{ marginLeft: "10px", padding: "8px 12px" }}
            >
                Add
            </button>

            <ul style={{ marginTop: "20px", textAlign: "left" }}>
                {todos.map((todo, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        {todo}

                        <button
                            onClick={() => deleteTodo(index)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;