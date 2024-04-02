import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaCheckCircle, FaTrash } from "react-icons/fa";
import { completeTodo, deleteTodo } from "./Reducer/ToDoSlice";

const TODOlist = () => {
  const todolist = useSelector((state) => state.todoState);
  const dispatch = useDispatch();

  const handleDeleteToDo = (id) => {
    const isConfirmed = window.confirm("Are you sure to delete this task?");
    if (isConfirmed) {
      dispatch(deleteTodo(id));
    } else {
      window.alert("Delete operation aborted");
    }
  };
  const completeToDolist = (id) => {
    const isConfirmed = window.confirm("Is the task completed successfully!");
    if (isConfirmed) {
      dispatch(completeTodo(id));
    } else {
      window.alert("try to complete the task");
    }
  };

  return (
    <div className="text-black mx-20 pt-10">
      {todolist.length > 0 ? (
        todolist.map((todo, index) => (
          <div
            key={todo.id}
            className="flex justify-between items-baseline rounded-xl px-5 my-5 bg-blue-200 "
          >
            <div className="collapse  bg-blue-200 ">
              <div className="collapse-title text-xl font-medium flex gap-5 ">
                <p>{index + 1}</p> <p>{todo.title}</p>
              </div>
              <input type="checkbox" />
              <div className="collapse-content">
                <p>{todo.text}</p>
              </div>
            </div>

            {
                todo.isComplete?<FaCheckCircle/>:<div className="flex gap-5">
                <button
                  onClick={() => completeToDolist(todo.id)}
                  className="text-green-600"
                >
                  <FaCheck />
                </button>
                <button
                  onClick={() => handleDeleteToDo(todo.id)}
                  className="text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            }
            
          </div>
        ))
      ) : (
        <h1>Sorry, there are no todos.</h1>
      )}
    </div>
  );
};

export default TODOlist;
