import React, { useEffect, useState } from 'react';
import client from '../../petfinderConfig';

// Components
import AnimalSelectionForm from '../../components/AnimalSelectionForm/AnimalSelectionForm';

const AnimalSelectionPage = () => {
	const [animalTypes, setAnimalTypes] = useState();

	// When is this run?
	useEffect(() => {
		console.log('useEffect here');
		client.animalData.types().then(resp => {
			// Do something with resp.data.types
			console.log(resp.data.types);
			setAnimalTypes(resp.data.types);
		});
	}, []);

	return (
		<div>
			<AnimalSelectionForm animalTypes={animalTypes} />
		</div>
	);
};

export default AnimalSelectionPage;
