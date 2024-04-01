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
    <div>
      <form onSubmit={addToToDo}>
        <input
        required
          type="text"
          name="title"
          id="title"
          maxLength={30}
          placeholder="give a name of task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
        required
          type="text"
          name="title"
          id="title"
          maxLength={30}
          placeholder="give a name of task"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default AddToDo;
