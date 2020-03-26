import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo } from "../redux/actions";
import TodoList from "./todoList";
import DatePicker from "../components/DateTimepicker/datePicker.js";

class AddTodos extends Component{

    constructor(props) {
        super(props);
        this.state = {
          task: 'Bring the milk',
        };
        this.startDatePicker = React.createRef();
        this.endDatePicker = React.createRef();
        this.add_Todos = this.add_Todos.bind(this);
    }

    add_Todos(e) {
        e.preventDefault();
        const { task } = this.state;
        if (task.length > 0) {
            this.props.addtodo(task, this.startDatePicker.current.DateTimeValue(), this.endDatePicker.current.DateTimeValue());
        }
        this.setState({
          task: '',
          startDateTime: '',
          endDateTime: '',
        });
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
      const { task } = this.state;
        return (
            <div className="w-full mx-auto text-left">
            <form type = "post"
            className = "bg-white shadow-md  max-w-5xl mx-auto rounded px-8 pt-6 pb-8 mb-4" >
              <label className="block text-gray-700 mb-4 text-lg font-bold mb-2"> Enter New Task </label>
              <input
                type="text"
                value={task}
                className="text-black"
                style={{color: '#000'}}
                name="task"
                placeholder="Bring the milk"
                onChange={e => {
                  this.handleInput(e);
                }}
                className="shadow appearance-none mb-6 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="flex">
                <div className="flex flex-col flex-1 mr-10">
                  <label className="block text-gray-700 mb-4 text-lg font-bold mb-2"> Start Date Time </label>
                  <DatePicker className="shadow rounded border text-black text-left px-3 text-sm py-2 outline-shadow" ref={this.startDatePicker} type="start" />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="block text-gray-700 mb-4 text-lg font-bold mb-2"> End Date Time </label>
                  <DatePicker className="shadow rounded border flex-1 text-black text-left text-sm px-3 py-2 outline-shadow" ref={this.endDatePicker} type="end" />
                  </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:bg-blue-700 mt-10" onClick = {this.add_Todos}> Add Todo </button>
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

