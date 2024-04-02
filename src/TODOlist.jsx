import React from 'react';
import { useSelector } from 'react-redux';

const TODOlist = () => {
    const todolist=useSelector(state=>state.todoState)
    return (
        <div className=' text-black mx-20'>
            {
                todolist.length
            }
            
        </div>
    );
};

export default TODOlist;