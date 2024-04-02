import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Reducer/ToDoSlice";

const AddToDo = () => {
  // State variables to manage the input values
  const [title, setTitle] = useState(""); // State for task title
  const [text, setDescription] = useState(""); // State for task description

  const dispatch = useDispatch(); // Accessing the dispatch function from Redux

  // Function to handle adding a new todo
  const addToToDo = (e) => {
    e.preventDefault(); // Preventing default form submission behavior

    // Dispatching the addTodo action with the task details
    dispatch(
      addTodo({
        title: title,
        text: text
      })
    );

    // Clearing input fields after adding the task
    setTitle("");
    setDescription("");

    // Displaying an alert message to indicate successful addition of the task
    window.alert("Task added successfully!");
  };

  return (
    <div className="mx-10 md:mx-20">
      {/* Form for adding a new todo */}
      <form onSubmit={addToToDo} className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Input field for task title */}
        <input
          required
          type="text"
          name="title"
          id="title"
          className="text-black bg-white px-5 py-2 rounded-2xl border-none outline-none shadow-xl shadow-blue-400"
          maxLength={30}
          value={title}
          placeholder="Insert name of task"
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Input field for task description */}
        <input
          required
          type="text"
          name="text"
          id="text"
          className="text-black bg-white px-5 py-2 rounded-2xl border-none outline-none shadow-xl shadow-blue-400 md:col-span-2"
          value={text}
          placeholder="Insert description of task"
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* Button to add the task */}
        <button
          className="hover:bg-blue-600 py-2 bg-blue-100 text-blue-800 hover:text-white shadow-sm hover:shadow-xl duration-300 shadow-blue-400 rounded-2xl"
          type="submit"
        >
          Add task
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
