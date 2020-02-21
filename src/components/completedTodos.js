import React from "react";
import { connect } from "react-redux";
import {
    undoCompleted,
    emptyCompleted,
    deleteCompletedTask
} from "../redux/actions";


const CompletedList = ({
    todos,
    undoCompleted,
    emptyCompleted,
    deleteCompletedTask
    }) => {

    const UndoCompleted = (item) => {
        undoCompleted(item);
    }

    const Delete_CompletedTask = (id) => {
        console.log('id : ', id);
        deleteCompletedTask(id);
    }

    const { completed } = todos;

    return (
        <>
            <h1 className="font-bold pt-10 pb-12 text-center text-3xl text-blue-600" >
                Tasks Completed
            </h1>
            {
                completed.length > 0 ?
                (<>
                <div className="max-w-5xl mx-auto" >
                        <ul>
                            {
                                completed.map((item, index) => (
                                    <li key={index} className="bg-gray-300 border-white border-b">
                                        <div className = "flex border-blue-600 border-l-8 justify-between" >
                                            <div className="flex items-center border-left">
                                                <span className="mr-6 bg-black bg-blue-500 flex h-full inline-block items-center px-3 py-1 rounded-bl rounded-full rounded-tl text-white" style={{minWidth: "85px"}}>Task {item.id} </span> 
                                                <p className="flex-1 fLtr-capatalize">{item.value}</p> 
                                            </div> 
                                            <div className="flex">
                                            < button className = "py-4 px-5 bg-red-600 text-white"
                                            onClick = {
                                                () => Delete_CompletedTask(item.id)
                                            } >
                                                <img className="h-6 text-blue-400" alt="trash" src={require('../assets/trash.svg')} />
                                            </button>
                                            <button className="py-4 px-5 bg-green-500 text-white" onClick={() => UndoCompleted(item)}>Undo</button></div>
                                        </div>
                                    </li>
                                    ))
                                }
                        </ul>
                </div>
                <button onClick={emptyCompleted()} className="bg-red-600 mx-auto block mt-12 px-5 py-3 rounded-full mt-4 text-white outline-none">Empty Completed</button>
                    </>)
                    :
                    <div className="text-center text-gray-700">! No Task is Completed Yet</div>
            }
            </>
        )
}

const mapStateToProps = states => {
    return { todos: states.todos };
}

const matchDispatchToProps = dispatch => {
    return {
        undoCompleted: (val) => dispatch(undoCompleted(val)),
        deleteCompletedTask: (id) => dispatch(deleteCompletedTask(id)),
        emptyCompleted: () => dispatch(emptyCompleted())
    }
}


export default connect(mapStateToProps, matchDispatchToProps)(CompletedList);
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);