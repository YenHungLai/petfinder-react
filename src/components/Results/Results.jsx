import React from 'react';
import { connect } from 'react-redux';
import client from '../../petfinderConfig';
import './Results.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import Grid from '@material-ui/core/Grid';

// FIXME: how to use styles
const useStyles = makeStyles(theme => ({
	container: {
		maxWidth: '95%',
		margin: 'auto',
		marginTop: '1rem'
	},
	item: {
		marginBottom: '1rem',
		maxHeight: '420px !important'
	}
}));

const Results = ({ animalType }) => {
	const [animals, setAnimals] = React.useState();
	// Only run when animalType changes
	React.useEffect(() => {
		console.log('[Results.js] use effect');
		client.animal.search({ type: animalType }).then(resp => {
			// Do something with resp.data.animals
			console.log(resp.data.animals);
			setAnimals(resp.data.animals);
		});
	}, [animalType]);

	const classes = useStyles();

	return (
		<Grid container className={classes.container} spacing={2}>
			{animals
				? animals.map((animal, key) => (
						// Use numbers divisible by 12(cols)?
						<Grid
							item
							lg={2}
							md={3}
							sm={4}
							xs={12}
							key={key}
							className={classes.item}
						>
							<Card
								img={
									animal.photos.length !== 0
										? animal.photos[0]['full']
										: 'https://www.shadow888.com/images/default/noimagefound.png'
								}
								name={animal.name}
								gender={animal.gender}
								age={animal.age}
								size={animal.size}
								status={animal.status}
								description={animal.description}
								attributes={animal.attributes}
								breeds={animal.breeds}
								coat={animal.coat}
								contact={animal.contact}
								tags={animal.tags}
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
