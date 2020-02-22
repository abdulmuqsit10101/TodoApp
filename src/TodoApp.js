import React from "react";
//Routers
import { Switch, Route } from 'react-router-dom';


//containers
import AddTodo from "./containers/addTodo";
import TodoList from "./containers/todoList";
import AllTasks from "./containers/AllTasks";
import Completed from "./containers/completedTodos";
import Header from "./containers/header";






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