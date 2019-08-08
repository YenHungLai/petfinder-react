import React from 'react';
import { connect } from 'react-redux';
import client from '../../petfinderConfig';

import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import Grid from '@material-ui/core/Grid';

// FIXME: how to use styles
const useStyles = makeStyles(theme => ({
	root: {
		// flexGrow: 1
	}
}));

const Results = ({ animalType }) => {
	const [animals, setAnimals] = React.useState();
	// Only run when animalType changes
	React.useEffect(() => {
		client.animal.search({ type: animalType }).then(resp => {
			// Do something with resp.data.animals
			console.log(resp.data.animals);
			setAnimals(resp.data.animals);
		});
	}, [animalType]);

	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			{animals
				? animals.map((animal, key) => (
						<Grid item xs={3}>
							<Card
								img={
									animal.photos.length !== 0
										? animal.photos[0]['full']
										: null
								}
								name={animal.name}
								gender={animal.gender}
								age={animal.age}
								key={key}
							/>
						</Grid>
				  ))
				: null}
		</Grid>
	);
};

const mapStateToProps = state => {
	return {
		animalType: state.animalType
	};
};

export default connect(mapStateToProps)(Results);
