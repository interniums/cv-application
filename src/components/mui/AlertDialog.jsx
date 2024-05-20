/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'


export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} id='saveButton' variant="outlined">
				Tips
				<TipsAndUpdatesIcon />
			</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Here is some tips'}
        </DialogTitle>
        <DialogContent>
					{
						props.direction == 'job' ? 
						<DialogContentText whiteSpace={'pre-wrap'} id="alert-dialog-description">
							1.Use the correct job title for the job vacancy you are applying for. For example, &#34;Seller&#34; should be written as &#34;Account Manager&#34;.
							2.Describe your tasks, responsibilities, and any competencies developed as clearly as possible.
							3.Take a good look at what the company is looking for. Compose your text with the needs of the company in mind, and complete it with your own experience.
							4.If you have work experience, only mention the relevant tasks and responsibilities for the vacancy you wish to apply.
						</DialogContentText> 
						: null
					}
					{
						props.direction == 'edu' ? 
						<DialogContentText whiteSpace={'pre-wrap'} id="alert-dialog-description">
							1.Only mention courses that you have actually attended.
							2.Do not mention primary or secondary schools unless they are your latest education.
							3.If you didn&#34;t fully complete a course, it can still add value to your resume or at least explain a gap in your work history.
							4.Add a description for your course to explain exactly what it entailed to potential employers.
							5.Sorting your items chronologically? Click on the Wheel icon at the right top of the section and choose &#34;sort chronologically&#34;.
						</DialogContentText>
						: null
					}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}