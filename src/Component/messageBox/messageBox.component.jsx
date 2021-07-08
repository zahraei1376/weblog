import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {MySnackbarDiv} from './messageBox.styles';

function Alert(props) {
  return <MuiAlert style={{fontSize: '3.25rem', marginLeft:'2rem'}} elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '2rem',
    '& > * + *': {
      marginTop: theme.spacing(2),
      fontSize: '2rem',
    },
  },
}));

function MySnackbar({message ,status,showMessage,setShowMessage}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setShowMessage(!showMessage);
      return;
    }
    setShowMessage(!showMessage);
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <MySnackbarDiv open={open} 
      autoHideDuration={6000}
      onClick={handleClose}
       onClose={handleClose}>
        <Alert style={{
          fontSize: '2rem',
        }} 
          severity={status === '1' ? "success" : "error" }>
          {message}
        </Alert>
      </MySnackbarDiv>
    </div>
  );
};

export default MySnackbar;