import React from 'react';
import TextField from 'text-field';
import TimePicker from 'time-picker/time-picker';
import injectTheme from '../fixtures/inject-theme';
import DateTime from 'utils/date-time';
import TestUtils from 'react-addons-test-utils';

describe('TimePicker', () => {
  let ThemeTimePicker;

  beforeEach(() => {
    ThemeTimePicker = injectTheme(TimePicker);
  });

  it('has to give value prop precedence over defaultTime', () => {
    let initialTime = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT
    let valueTime = DateTime.addHours(initialTime, 2);

    let render = TestUtils.renderIntoDocument(
      <ThemeTimePicker value={valueTime} format="ampm" locale="en-US"
        initialTime={initialTime}
      />
    );

    let timeTextField = TestUtils.findRenderedComponentWithType(render, TextField);

    expect(timeTextField.props.value, DateTime.formatTime(valueTime));
  });

  it('takes defaulTime prop to set first value when value prop is missing', () => {
    let initialTime = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GMT

    let render = TestUtils.renderIntoDocument(
      <ThemeTimePicker format="ampm" locale="en-US"
        defaultTime={initialTime}
      />
    );

    let timeTextField = TestUtils.findRenderedComponentWithType(render, TextField);

    expect(timeTextField.props.value, DateTime.formatTime(initialTime));
  });

  it('shows value prop if defaultTime is missing', () => {
    let initialTime = null;
    let valueTime = new Date(1448967059892); // Tue, 01 Dec 2015 10:50:59 GM

    let render = TestUtils.renderIntoDocument(
      <ThemeTimePicker value={valueTime} format="ampm" locale="en-US"
        defaultTime={initialTime}
      />
    );

    let timeTextField = TestUtils.findRenderedComponentWithType(render, TextField);

    expect(timeTextField.props.value, DateTime.formatTime(valueTime));
  });

});
