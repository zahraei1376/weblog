import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {MySelect ,MyMenuItem} from './categoryDropDown.styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    width:'50% !important',
    color:'#000 !important',
    textAlign:'center',
    padding:'2rem 0',
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

const CategoryDropDown = ({setParentCategoryId , Items}) => {
  const classes = useStyles();
  const [id, setId] = React.useState('');

  const handleChange = (event) => {
    setId(event.target.value);
    setParentCategoryId(event.target.value);
  };
 
  return (
      <FormControl 
    //   variant="outlined"
       className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">دسته بندی</InputLabel>
        <MySelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={id}
          onChange={handleChange}
          label="دسته بندی"
          variant="outlined"
        //   style={{color:'#fff'}}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {
                Items.map((item, index)=>{
                    return(
                        <MyMenuItem key={index} value={item.id}>{item.title}</MyMenuItem>
                    )
                })
          }
          {/* <MyMenuItem value="Male">زن</MyMenuItem>
          <MyMenuItem value="Female">مرد</MyMenuItem> */}
        </MySelect>
      </FormControl>
  );
}

export default CategoryDropDown;
