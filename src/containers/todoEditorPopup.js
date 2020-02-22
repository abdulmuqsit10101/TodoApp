import React, { Component } from "react";
import { connect } from "react-redux";
import { addtodo } from "../redux/actions";

class todoEditorPopup extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            value: ''
        };
    }


    handleInput = (value) => {
        this.setState({
            value
        });
    }

    componentWillReceiveProps(newProps) {
         this.setState({
             value: newProps.ItemData.value,
             id: newProps.ItemData.id
         });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.SetEditiedTast(this.state);
        this.closePopup(false);
    }

    closePopup = (val) => {
        this.props.setDisplay(val);
    }


    render() {
        const { value } = this.state;
        const { display } = this.props;

        return (
            <div className={`z-50 fixed top-0 left-0 w-full h-full items-center ${display ? 'flex' : 'hidden' }` } style={{background: 'rgba(0,0,0,.81)'}}>
                <div id="close_btn" onClick={() => this.closePopup(false)} className="absolute right-0 top-0 mr-8 rounded-lg mt-8 w-8 h-8" >
                    <img alt="close" src={require('../assets/cross.svg')} />
                </div>
                <div className="bg-white h-4/5 h-auto mx-auto px-10 py-10 rounded-lg text-left w-1/2">
                    <h1 className="font-bold pt-10 pb-12 text-center text-3xl text-blue-600">
                        Edit your Todo
                    </h1>
                    < form type = "post"
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
                        className="shadow appearance-none mb-6 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick = {this.handleSubmit}
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
}

export default connect(
    mapStateToProps,
    {
        addtodo
    }
)(todoEditorPopup);
