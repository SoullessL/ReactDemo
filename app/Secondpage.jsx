import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

const TextFieldExampleSimple = () => (
    <div>
        <DatePicker
            hintText="Last day worked"
            floatingLabelText="Last day worked"
            container="inline"
            mode="landscape"
            /><br />
        <p>Recommend for re-hire?</p>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
                value="Yes"
                label="Yes"
                style={styles.radioButton}
                />
            <RadioButton
                value="No"
                label="No"
                style={styles.radioButton}
                />
        </RadioButtonGroup>
        <SelectFieldExampleNullable />
        <TextField
            hintText="Manager Comments"
            floatingLabelText="Manager Comments"
            multiLine={true}
            rows={2}
            rowsMax={4}
            fullWidth={true}
            /><br />
    </div>
);

export default TextFieldExampleSimple;

class SelectFieldExampleNullable extends React.Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div>
                <SelectField
                    floatingLabelText="Termination reason"
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                    <MenuItem value={null} primaryText="" />
                    <MenuItem value={false} primaryText="No" />
                    <MenuItem value={true} primaryText="Yes" />
                </SelectField>
            </div>
        );
    }
}