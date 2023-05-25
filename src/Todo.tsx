import React, { useEffect, useState } from "react";

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const handleRemoveTodo = (index: Number) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <h1>Todoアプリ</h1>
            <input type="text" value={newTodo} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>タスク追加</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}<br></br>
                        <span className="timestamp">{currentTime.toLocaleTimeString()}</span>
                        <button onClick={() => handleRemoveTodo(index)}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
