import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Reducer/ToDoSlice";
const AddToDo = () => {
  const [title, setTitle] = useState("");
  const [text, setDescription] = useState("");
  const dispatch=useDispatch()
  const addToToDo = (e) => {
    e.preventDefault();

    dispatch(addTodo({
        title: title,
        text: text
      }));
      setTitle("")
      setDescription("")
      window.alert('Task added successfully!')
      
  };

  return (
    <div className=" mx-10 md:mx-20">
      <form onSubmit={addToToDo} className=" grid grid-cols-1 md:grid-cols-4  gap-5">
        <input
        required
          type="text"
          name="title"
          id="title" className=" text-black bg-white px-5 py-2  rounded-2xl border-none outline-none shadow-xl shadow-blue-400"
          maxLength={30}
          value={title}
          placeholder="Insert name of task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
        required
          type="text"
          name="text"
          id="text" className=" text-black bg-white px-5  py-2 rounded-2xl border-none outline-none shadow-xl shadow-blue-400 md:col-span-2"
          maxLength={30} value={text}
          placeholder="insert description of task"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className=" hover:bg-blue-600 py-2 bg-blue-100 text-blue-800 hover:text-white shadow-sm hover:shadow-xl duration-300 shadow-blue-400 rounded-2xl" type="submit">Add task</button>
      </form>
    </div>
  );
};

export default AddToDo;
