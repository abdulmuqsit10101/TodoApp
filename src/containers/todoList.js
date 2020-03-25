/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { connect } from "react-redux";
// import DateRangePicker from "./DateRangePicker";
import {
    moveToCompleted,
    clearAllTasks,
    deleteTask,
    handleEditiedTask,
} from "../redux/actions";
import TodoEditorPopup from "./todoEditorPopup";
import Picker from "../components/DateTimepicker/datePicker.js";

class TodoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            edit_popup: false,
            edit_input_data: {}
        }
    }
    

    MovedToCompleted = (id) => {
        this.props.moveToCompleted(id);
    }

    DeleteTask = (id) => {
        this.props.deleteTask(id);
    }

    EditTask = (item) => {
        this.setState({ edit_popup: true, edit_input_data: item });
    }

    setEditiedTast = (item) => {
        this.props.handleEditiedTask(item);
        console.log('item in todoList : ', item);
    }

    setDisplay = (val) => {
        this.setState({ edit_popup: val });
    }
    


        render(){
            const { data } = this.props.todos;
            const { edit_popup, edit_input_data } = this.state;
            const {
                setEditiedTast,
                setDisplay
            } = this;

                return (
                <>
                <h1 className="font-bold pt-10 pb-12 text-center text-3xl text-blue-600">Todos Tasks </h1>
                {
                    data.length > 0 && data.sort(function (a, b) {
                        return a.id - b.id
                    }) ? ( 
                            <div className="container max-w-5xl mx-auto">
                                <ul>
                                    {
                                        data.map((item, index) => (
                                                <li className="border-b-2 border-white" key={index}>
                                                    <div className = "border-blue-600 border-l-8 bg-gray-300 flex justify-between">
                                                    <div className = "flex items-center border-left " > 
                                                    <span style={{minWidth: '85px'}} className = "mr-6 bg-black bg-blue-500 flex h-full inline-block items-center px-3 py-1 rounded-bl rounded-full rounded-tl text-white" > Task {
                                                        item.id
                                                    }</span> 
                                                    <p className="flex-1 fLtr-capatalize"> {item.value} </p>
                                                    </div>
                                                    <div className="flex">
                                                        < div className = "flex items-center px-4 bg-gray-400 " >
                                                            <span className="block mx-auto rounded-full h-6 w-6/7 bg-black relative z-auto">
                                                                <div className="bg-purple-600 w-1/2 h-full z-auto absloute top-0 left-0 rounded-bl-full rounded-tl-full" ></div>
                                                                <div className="center relative text-center text-sm z-auto z-20 z-40 flex px-2" style={{ marginTop: "-22px"}}>
                                                                    <Picker className="w/1/2" />
                                                                    <p className="text-white">~</p>
                                                                    <Picker className="w/1/2" />
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <button onClick={() => {this.EditTask(item)}} className="py-4 px-5 bg-gray-300 text-white focus:">
                                                            <img className="h-6 text-blue-400 w-6" alt="trash" src={require('../assets/edit.svg')} />
                                                        </button>
                                                        <button onClick={() => this.DeleteTask(item.id)} className="py-4 px-5 bg-red-600 text-white focus:">
                                                            <img className="h-6 text-blue-400 w-6" alt="trash" src={require('../assets/trash.svg')} />
                                                        </button>
                                                            <button onClick={() => this.MovedToCompleted(item.id)} className="py-4 px-5 bg-green-500 text-white">Done</button>    
                                                    </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                </ul>
                                <button onClick={() => this.props.clearAllTasks()} className="bg-red-600 mx-auto block mt-12 px-5 py-3 rounded-full mt-4 text-white outline-none">Delete All Task</button>
                            </div>
                            
                            )
                            :
                            <div className="text-center text-gray-700">! No Task is Completed Yet</div>
                        }
                        <TodoEditorPopup display={edit_popup}  ItemData={edit_input_data} SetEditiedTast={setEditiedTast} setDisplay={setDisplay} />
                </>
            )
        }
}

const mapStateToProps = states => {
    return { todos: states.todos };
}

const mapDispatchToProps = dispatch => {
    return {
        moveToCompleted: (val) => dispatch(moveToCompleted(val)),
        deleteTask: (val) => dispatch(deleteTask(val)),
        handleEditiedTask: (item) => dispatch(handleEditiedTask(item)),
        clearAllTasks: () => dispatch(clearAllTasks()), // TODO: check this out by removing the parantheses !important
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);



// <span className="block mx-auto rounded-full h-6 w-6/7 bg-black relative overflow-hidden">