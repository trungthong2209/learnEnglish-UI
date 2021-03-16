import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
};



function InputField(props) {
    const {form, name, label} = props;
    const { errors } = form;
    const hasError = errors[name];
    
    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}
            default={form.defaultValues}
            margin= "normal"
            variant="outlined"
            fullWidth
            label={label}
            error={!!hasError}
            helperText={errors[name]?.massage}
                   
        />
    );
}

export default InputField;