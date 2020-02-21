import React from "react";
import { connect } from "react-redux";
import moment from 'moment';
import { handleDateAndTime } from "../redux/actions";
import { DatePicker } from 'antd';

// const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;
const timeFormat = 'HH:mm:ss';
const dateTimeFormat = 'HH:mm:ss';



const DateRangePicker = ({
    handleDateAndTime, id, rangeValue
  }) => {

  function onChange(date, dateString) {
    console.log('date :: ', dateString, 'id : ', id);
    handleDateAndTime(dateString, id)
  }
  
  
  const startTime = rangeValue.length !== 0 ? rangeValue[0] : "No Time";
  const endTime = rangeValue.length !== 0 ? rangeValue[1] : "No Time";

  const check = startTime === "No Time" ? false : true;
  

  return (
    <div>
      <RangePicker
        defaultValue={
          check && [moment(startTime, timeFormat), moment(endTime, timeFormat)]
        }
        format = {
          timeFormat
        }
        onChange = {
          onChange
        }
      />
    </div>
  );
};

const mapStateToProps = states => {
  return {
    todos: states.todos
  }
}

// handleDateTime;

const matchDispatchToProps = dispatch => {
  return {
    handleDateAndTime: (val, id) => dispatch(handleDateAndTime(val, id)),
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(DateRangePicker);

// undoCompleted: (val) => dispatch(undoCompleted(val)),
// <DatePicker defaultValue={moment("2015-01-01", "YYYY-MM-DD")} />;


// const mapStateToProps = states => {
//   return {
//     todos: states.todos
//   };
// }

// const matchDispatchToProps = dispatch => {
//   return {
//     undoCompleted: (val) => dispatch(undoCompleted(val)),
//     deleteCompletedTask: (id) => dispatch(deleteCompletedTask(id)),
//     emptyCompleted: () => dispatch(emptyCompleted())
//   }
// }


// export default connect(mapStateToProps, matchDispatchToProps)(CompletedList);
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

// const mapStateToProps = states => {
//   return {
//     todos: states.todos
//   };
// }

// const matchDispatchToProps = dispatch => {
//   return {
//     undoCompleted: (val) => dispatch(undoCompleted(val)),
//     deleteCompletedTask: (id) => dispatch(deleteCompletedTask(id)),
//     emptyCompleted: () => dispatch(emptyCompleted())
//   }
// }


// export default connect(mapStateToProps, matchDispatchToProps)(CompletedList);
// // export default connect(mapStateToProps, mapDispatchToProps)(TodoList);