import React from 'react';
import TimePicker from 'material-ui/lib/time-picker/time-picker';

export default class TimePickerExampleComplex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value24: new Date(), value12: new Date()};
    this.handleChangeTimePicker24 = this.handleChangeTimePicker24.bind(this);
    this.handleChangeTimePicker12 = this.handleChangeTimePicker12.bind(this);
  }

  handleChangeTimePicker24(e, date) {
    this.setState({value24: date});
  }

  handleChangeTimePicker12(e, date) {
    this.setState({value12: date});
  }

  render() {
    return (
      <div>
        <TimePicker
          ref="picker12hr"
          format="ampm"
          hintText="12hr Format"
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
        />
        <TimePicker
          ref="picker24hr"
          format="24hr"
          hintText="24hr Format"
          value={this.state.value24}
          onChange={this.handleChangeTimePicker24}
        />
      </div>
    );
  }
}
