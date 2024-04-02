import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaCheckCircle, FaTrash } from "react-icons/fa";
import { completeTodo, deleteTodo } from "./Reducer/ToDoSlice";

const TODOlist = () => {
  //  // Selecting the todo list from the Redux store
  const todolist = useSelector((state) => state.todoState);
  
  //   redux dispatch function
  const dispatch = useDispatch();
  // function for handling delete operation of todo list array  element
  const handleDeleteToDo = (id) => {
    // Asking for confirmation
    const isConfirmed = window.confirm("Are you sure to delete this task?");
    if (isConfirmed) {
      //dispatching deleteTodo action to delete a task with id
      dispatch(deleteTodo(id));
    } else {
      window.alert("Delete operation aborted");
    }
  };

  //Function to handle function complete Todo which will change the completed status of todo
  const completeToDolist = (id) => {
    //Asking for confirmation
    const isConfirmed = window.confirm("Is the task completed successfully!");
    if (isConfirmed) {
      // Dispatching completeTodo action with todo id
      dispatch(completeTodo(id));
    } else {
      window.alert("try to complete the task");
    }
  };

  return (
    <div className="text-black mx-10 md:mx-20 md:pt-10">
      {/* Rendering the list of todo items on condition*/}
      {todolist.length > 0 ? (
        todolist.map((todo, index) => (
          <div
            key={todo.id}
            className="flex justify-between items-baseline rounded-xl px-5 my-5 bg-blue-200 "
          >
            {/* Displaying the todo item details in a collapse dive*/}

            <div className="collapse  bg-blue-200 ">
              <div className="collapse-title text-xl font-medium flex gap-5 ">
                <p>{index + 1}</p> <p>{todo.title}</p>
              </div>
              <input type="checkbox" />
              <div className="collapse-content">
                <p>{todo.text}</p>
              </div>
            </div>
            {/* Rendering buttons based on completion status */}
            {todo.isComplete ? (
              <FaCheckCircle />
            ) : (
              <div className="flex gap-5">
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
            )}
          </div>
        ))
      ) : (
        <h1>Sorry, there are no todos.</h1>
      )}
    </div>
  );
};

export default TODOlist;
