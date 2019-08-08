import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '../uiComponents/Dialog';

const useStyles = makeStyles({
	card: {
		maxWidth: 345
	},
	media: {
		height: 300
	},
	text: {}
});

export default function AnimalCard({
	name,
	gender,
	age,
	img,
	size,
	status,
	description,
	attributes,
	breeds,
	coat,
	contact,
	tags
}) {
	const [openDialog, setOpenDialog] = useState(false);
	const handleClick = () => {
		setOpenDialog(true);
	};

	const classes = useStyles();

	return (
		<React.Fragment>
			{openDialog && (
				<Dialog
					setOpenDialog={setOpenDialog}
					size={size}
					status={status}
					description={description}
					attributes={attributes}
					breeds={breeds}
					coat={coat}
					contact={contact}
					tags={tags}
				/>
			)}
			<Card className={classes.card}>
				<CardActionArea onClick={handleClick}>
					<CardMedia
						className={classes.media}
						image={img}
						title='Contemplative Reptile'
					/>
					<CardContent className={classes.text}>
						<strong>Name:</strong> {name}
						<br />
						<strong>Age:</strong> {age}
						<br />
						<strong>Gender:</strong> {gender}
					</CardContent>
				</CardActionArea>
			</Card>
		</React.Fragment>
	);
}
