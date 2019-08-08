import React, { useEffect, useState } from 'react';
import client from '../../petfinderConfig';

// Components
import AnimalSelectionForm from '../../components/AnimalSelectionForm/AnimalSelectionForm';
import Results from '../../components/Results/Results';

const AnimalSelectionPage = () => {
	const [animalTypes, setAnimalTypes] = useState();

	// Runs as componentDidMount and componenWillUnmount
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
			<Results />
		</div>
	);
};

export default AnimalSelectionPage;
