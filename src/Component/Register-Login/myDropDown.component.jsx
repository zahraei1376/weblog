import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import {MySelect ,MyMenuItem} from './myDropDown.styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width:'100% !important',
    color:'#fff !important',
    textAlign:'right !important',
    fontSize:'3rem !important',
    select: {
        "&:focus:invalid": {
          borderBottom: "3px solid #ff7730 !important",
        },
        textAlign:'right !important',
        fontSize:'3rem !important',
      }
    
  },
}));

export default function MyDropDown({handleOnChangeSelect}) {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
    handleOnChangeSelect(event.target.value);
  };
 
  return (
      <FormControl 
       className={classes.formControl}>
        <MySelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gender}
          onChange={handleChange}
          label="جنسیت"
        >
          <MyMenuItem value="Male">زن</MyMenuItem>
          <MyMenuItem value="Female">مرد</MyMenuItem>
        </MySelect>
      </FormControl>
  );
}
