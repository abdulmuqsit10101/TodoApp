import React from "react";
import TodoList from "./todoList";
import Completed from "./completedTodos";


const AllTasks = () => {


    return (
        <>
            <TodoList/>
            <br/>
            <br/>
            <br/>
            <Completed/>
        </>
        )
}

export default AllTasks;