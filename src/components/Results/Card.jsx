import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		maxWidth: 345
	},
	media: {
		height: 300
	}
});

export default function AnimalCard({name, age, gender, img }) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
                    image={img}
					title='Contemplative Reptile'
				/>
				<CardContent>
                    <ul>
                        <li>{name}</li>
                        <li>{age}</li>
                        <li>{gender}</li>
                    </ul>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{/* <Button size='small' color='primary'>
					Share
				</Button>
				<Button size='small' color='primary'>
					Learn More
				</Button> */}
			</CardActions>
		</Card>
	);
}
