import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {MySelect ,MyMenuItem} from './myDropDown.styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    width:'100% !important',
    color:'#fff !important',
    textAlign:'center',
    // border:'none !important',
    // height:'4.5rem',
    // minWidth: 120,
    select: {
        "&:focus:invalid": {
          borderBottom: "3px solid #ff7730 !important",
        }
      }
    
  },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
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
    //   variant="outlined"
       className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-outlined-label">جنسیت</InputLabel> */}
        <MySelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gender}
          onChange={handleChange}
          label="جنسیت"
        //   style={{color:'#fff'}}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MyMenuItem value="Male">زن</MyMenuItem>
          <MyMenuItem value="Female">مرد</MyMenuItem>
        </MySelect>
      </FormControl>
  );
}
