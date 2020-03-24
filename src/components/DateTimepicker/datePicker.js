import React from 'react';
import Datetime from 'react-datetime';
import './datepicker.css';

export default class DatePicker extends React.Component{
    render(){
        return <Datetime dateFormat="DD MMM" defaultValue={new Date()} />;
    }
}