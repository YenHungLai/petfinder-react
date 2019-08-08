import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

export default function SimpleSelect({ label, data, name, value, setValue }) {
	const classes = useStyles();

	const handleChange = e => {
		console.log({ [e.target.name]: e.target.value });
		setValue({
			...value,
			[e.target.name]: e.target.value
        });
	};

	return (
		<FormControl className={classes.formControl}>
			<InputLabel htmlFor={label}>{label}</InputLabel>
			<Select
				value={value.animalType}
				onChange={handleChange}
				inputProps={{ name }}
			>
				{data.map((item, key) => (
					<MenuItem value={item.replace(/\s/g, '')} key={key}>
						{item}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
