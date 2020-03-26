import React from 'react';
import Datetime from 'react-datetime';
import './datepicker.css';
import moment from "moment";


export default class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.DateTimePickerElm = React.createRef();
    this.state = {
      startDate_Time: '',
      type: '',
    };
    this.DateTimeValue = () => {
      const Date_Time_Picker = this.DateTimePickerElm.current;
      const PickerState = Date_Time_Picker.state;
      return PickerState.inputValue;
    };
  }

  componentWillReceiveProps(newprops){
    this.setState({startDate_Time: newprops.defaultVal , type: newprops.type});
    this.DateTimePickerElm.current.state.inputValue = newprops.defaultVal;
  }

  render() {
    const { startDate_Time, type } = this.state;
    var tomorrow = new Date();
    const props = this.props;
    tomorrow.setHours(tomorrow.getHours() + 1);
    return <Datetime  dateFormat = "DD MMM"
    ref={this.DateTimePickerElm}
    className = {
      props.className && props.className
    }
    defaultValue = {new Date()}
    />;
  }
}
