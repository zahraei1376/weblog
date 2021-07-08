import React ,{useState,useEffect}from 'react';
// import { makeStyles ,createMuiTheme } from '@material-ui/core/styles';
import { makeStyles,createTheme, ThemeProvider,createMuiTheme ,MuiThemeProvider,CssBaseline} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {MySelect ,MyMenuItem} from './categoryDropDown.styles';

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "tomato",
          fontWeight: "bold"
        }
      }, 
      
      focused: {}
    }
  }
});
////////////////////////////////////////
const useStyles = makeStyles((theme) => ({
  formControl: {
    width:'50% !important',
    color:'#000 !important',
    textAlign:'center',
    padding:'2rem 0 4rem 0',
    // border:'1px solod #bf4f7b !important',
    select: {
      border:'1px solod #bf4f7b !important',
      "&$focused": {
          borderBottom: "3px solid #ff7730 !important",
        },

        focused: {}
      },

      root: {
        "&$focused": {
          color: "tomato",
          fontWeight: "bold"
        }
      }, 
      
      focused: {}
    
  },
}));

const CategoryDropDownForText = ({setCategoryId , Items}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };
 
  return (
    <MuiThemeProvider theme={theme}>
      <FormControl 
       className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">دسته بندی</InputLabel>
        <MySelect
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          label="دسته بندی"
          variant="outlined"
        >
          {
            Items.map((item, index)=>{
                return(
                    <MyMenuItem key={index} 
                    value={item.id}
                    >{item.name}</MyMenuItem>
                )
            })
          }
        </MySelect>
      </FormControl>
      </MuiThemeProvider>
  );
}

export default CategoryDropDownForText;
