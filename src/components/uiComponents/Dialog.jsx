import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function AlertDialogSlide({
	setOpenDialog,
	size,
	status,
	description,
	attributes,
	breeds,
	coat,
	contact,
	tags
}) {
	return (
		<Dialog
			open
			onBackdropClick={() => setOpenDialog(false)}
			TransitionComponent={Transition}
			keepMounted
			aria-labelledby='alert-dialog-slide-title'
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogTitle id='alert-dialog-slide-title'>
				Interested in this pet?
			</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-slide-description'>
					Here are some additional information about him/her: <br/>
					{description} <br/>
					size: {size} <br/>
					status: {status}
				</DialogContentText>
			</DialogContent>
			<DialogActions />
		</Dialog>
	);
}
