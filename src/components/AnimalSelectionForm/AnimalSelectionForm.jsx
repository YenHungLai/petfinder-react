import React from 'react';
import './AnimalSelectionForm.css';
import { connect } from 'react-redux';

import Select from '../uiComponents/Select';

const AnimalSelectionForm = ({ animalTypes = [], setAnimalType }) => {
	const [value, setValue] = React.useState({
		animalType: ''
	});

	const animalNames = animalTypes.map(animal => animal.name);

	const handleChange = e => {
		console.log({ [e.target.name]: e.target.value });
		setAnimalType(e.target.value);
		setValue({
			...value,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className='form-container'>
			{animalTypes ? (
				<Select
					label='Animal Type'
					data={animalNames}
					name='animalType'
					value={value}
					handleChange={handleChange}
				/>
			) : null}
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		setAnimalType: animalType =>
			dispatch({
				type: 'SET_ANIMAL_TYPE',
				payload: animalType
			})
	};
};

export default connect(
	null,
	mapDispatchToProps
)(AnimalSelectionForm);
