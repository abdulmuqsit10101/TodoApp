import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo } from "../redux/actions";
import TodoList from "./todoList";
import CompletedTodos from "./completedTodos";
import TodoEditorPopup from "./todoEditorPopup";

class AddTodos extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.add_Todos = this.add_Todos.bind(this);
    }

    add_Todos(e) {
       e.preventDefault();
        const { value } = this.state;
        if (value.length > 0) {
            this.props.addtodo(this.state.value);
        }
        this.setState({
            value: ''
        });
    }

    handleInput = (value) => {
        this.setState({
            value
        });
    }

    render() {
        const { value } = this.state;

        return (
            <div className="w-full mx-auto text-left">
            < form type = "post"
            className = "bg-white shadow-md  max-w-5xl mx-auto rounded px-8 pt-6 pb-8 mb-4" >
              <label
                className="block text-gray-700 mb-4 text-lg font-bold mb-2"
              >
                Enter New Task 
              </label>
              <input
                type="text"
                value={value}
                onChange={e => {
                  this.handleInput(e.target.value);
                }}
                className="shadow appearance-none mb-6 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:bg-blue-700"
                onClick = {this.add_Todos}
              >
                Add Todo
              </button>
            </form>
            <br/>
              <TodoList />
            <br/>
          </div>
        );
    }
}

const mapStateToProps = states => {
    return { todos: states.todos }
}

export default connect(
    mapStateToProps,
    {
        addtodo
    }
)(AddTodos);
