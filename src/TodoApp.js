import React from "react";
//Routers
import { Switch, Route } from 'react-router-dom';


//components
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import AllTasks from "./components/AllTasks";
import Completed from "./components/completedTodos";
import Header from "./components/header";






function TodoApp(){

    return (
        <>
            <Header/>
        <div className="py-4 px-5 container mt-10 mx-auto">
            <Switch>
                <Route exact path="/" component={AddTodo} />
                <Route path="/all-tasks" component={AllTasks} />
                <Route path="/completed" component={Completed} />
            </Switch>
        </div>
            </>
    );
}
    
export default TodoApp;