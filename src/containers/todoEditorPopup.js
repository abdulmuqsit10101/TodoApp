import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo } from "../redux/actions";
import DatePicker from '../components/DateTimepicker/datePicker.js';

class todoEditorPopup extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            value: '',
            startDateTime: '',
            endDateTime: ''
        };
        this.startDateTime = React.createRef();
        this.endDateTime = React.createRef();
    }


    handleInput = (val) => {
        this.setState({
          value: val
        });
    };

    componentWillReceiveProps(newProps) {
         this.setState({
             value: newProps.ItemData.value,
             id: newProps.ItemData.id,
             startDateTime: newProps.ItemData.startDateTime,
             endDateTime: newProps.ItemData.endDateTime
         });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { value, id } = this.state;
        const startDateTime = this.startDateTime.current.DateTimeValue();
        const endDateTime = this.endDateTime.current.DateTimeValue();
        this.props.setEditiedTask({id, value, startDateTime, endDateTime});
        this.closePopup(false);
    };

    closePopup = (val) => {
        this.props.setDisplay(val);
    };


    render() {
        const { display } = this.props;
        const { value, startDateTime, endDateTime } = this.state;

        return (
            <div className={`z-50 fixed top-0 left-0 w-full h-full items-center ${display ? 'flex' : 'hidden' }` } style={{background: 'rgba(0,0,0,.81)'}}>
                <div id="close_btn" onClick={() => this.closePopup(false)} className="absolute right-0 top-0 mr-8 rounded-lg mt-8 w-8 h-8" >
                    <img alt="close" src={require('../assets/cross.svg')} />
                </div>
                <div className="bg-white h-4/5 h-auto mx-auto px-10 py-10 rounded-lg text-left w-1/2">
                    <h1 className="font-bold pt-10 pb-12 text-center text-3xl text-blue-600">
                        Edit your Todo
                    </h1>
                    <form type = "post"
                    className = "bg-white shadow-md  max-w-5xl mx-auto rounded px-8 pt-6 pb-8 mb-4" >
                    <label
                        className="block text-gray-700 mb-4 text-lg font-bold mb-2"
                    >
                        Enter New Value
                    </label>
                    <input
                        type="text"
                        value={value}
                        onChange={e => {
                        this.handleInput(e.target.value);
                        }}
                        className="shadow appearance-none mb-6 border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <div className="flex">
                        <div className="flex flex-col flex-1 mr-10">
                            <label className="block text-gray-700 mb-4 text-lg font-bold mb-2"> Set Start </label>
                            <DatePicker className="shadow rounded border text-black text-left px-3 text-sm py-2 outline-shadow" defaultVal={this.state.startDateTime} ref={this.startDateTime} type="start" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label className="block text-gray-700 mb-4 text-lg font-bold mb-2"> Set End </label>
                            <DatePicker className="shadow rounded border flex-1 text-black text-left text-sm px-3 py-2 outline-shadow" defaultVal={this.state.endDateTime} ref={this.endDateTime} type="end" />
                        </div>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-8 w-24"
                        onClick = {(event) => this.handleSubmit(event)}
                    >
                        Done
                    </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = states => {
    return { todos: states.todos }
};

export default connect(
    mapStateToProps,
    {
        addtodo
    }
)(todoEditorPopup);
