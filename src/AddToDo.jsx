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


  };

  return (
    <div className=" mx-20">
      <form onSubmit={addToToDo} className=" grid grid-cols-4 gap-5">
        <input
        required
          type="text"
          name="title"
          id="title" className=" bg-white px-5 py-2 rounded-2xl border-none outline-none shadow-xl shadow-blue-400"
          maxLength={30}
          placeholder="give a name of task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
        required
          type="text"
          name="title"
          id="title" className=" bg-white px-5 py-2 rounded-2xl border-none outline-none shadow-xl shadow-blue-400 col-span-2"
          maxLength={30}
          placeholder="give a name of task"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className=" hover:bg-blue-600 bg-blue-100 text-blue-800 hover:text-white shadow-sm hover:shadow-xl duration-300 shadow-blue-400 rounded-2xl" type="submit">Add task</button>
      </form>
    </div>
  );
};

export default AddToDo;
