import React from 'react';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

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
        <TextField
            hintText="@pactera.com"
            floatingLabelText="What's your Pactera email?"
            floatingLabelFixed={true}
            /><br />
        
        <p>What are you trying to report?</p>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
                value="ET"
                label="Employee Termination"
                style={styles.radioButton}
                />
            <RadioButton
                value="EG"
                label="Employee going on unpaid leave"
                style={styles.radioButton}
                />
            <RadioButton
                value="EE"
                label="Employee extends unpaid leave"
                style={styles.radioButton}
                />
        </RadioButtonGroup>

        <TextField
            hintText="First Name"
            floatingLabelText="Employee Legal First Name"
            floatingLabelFixed={true}
            /><br />

 

        <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            /><br />
    </div>
);

export default TextFieldExampleSimple;
