import React from 'react';
import './AnimalSelectionForm.css';
import { connect } from 'react-redux';

import Select from '../uiComponents/Select';

const AnimalSelectionForm = ({ animalTypes = [], setAnimalType }) => {
	const [value, setValue] = React.useState({
		animalType: ''
	});

	const animalNames = animalTypes.map(animal => animal.name);

	React.useEffect(() => {
		setAnimalType(value.animalType);
	}, [value.animalType]);

	return (
		<div className='form-container'>
			{animalTypes ? (
				<Select
					label='Animal Type'
					data={animalNames}
					name='animalType'
					value={value}
					setValue={setValue}
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
