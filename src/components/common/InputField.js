import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({name, label, value, onChange}) => {
	return (
		<div className="form-group">
			<label htmlFor="{name}Input">
				{label}
			</label>
			<input type="text" value={value}
				className="form-control"
				name={name}
				onChange={onChange}
				placeholder={label}/>
		</div>
	);
};

InputField.PropTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default InputField;
