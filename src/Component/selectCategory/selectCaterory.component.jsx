import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DoneIcon from '@material-ui/icons/Done';
import {MyChip} from './selectCategory.styles';
//////////////////////////////////
// import {connect} from 'react-redux';
// import {setCourseName ,setNameOfCourse}from '../../redux/questionsCourses/questionsCourses.action';
// import { createStructuredSelector} from 'reselect';
// import {selectedNameOfCourse} from '../../redux/questionsCourses/questionsCourses.selector';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    direction:'rtl',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));


const SelectCategoryComponent = ({setParentCategoryId ,ParentCategoryId ,item}) => {
    const [clicked,setClicked] = useState(false);
    const classes = useStyles();

    const handleClick = () => {
        console.info('You clicked the Chip.');
        setParentCategoryId(item ? item.id : '');
        setClicked(true);
    };

  return (
    <div className={classes.root}>
        <MyChip
            icon={<MenuBookIcon style={{fontSize:'2.5rem'}}/>}
            label={item.title} 
            onClick={handleClick}
            color={"primary"}
            // color={courseName == item.title ? "primary" : 'default'}
            variant="outlined"
        />
    </div>
  );
}

// const mapDispatchToProps = dispatch =>({
//     setCourseName: CN => dispatch(setCourseName(CN)),
//     setNameOfCourse:CN => dispatch(setNameOfCourse(CN)),
// });

// const mapStateToProps = createStructuredSelector({
//     courseName : selectedNameOfCourse,
// });

// export default connect(mapStateToProps , mapDispatchToProps )(SelectCategoryComponent);
export default SelectCategoryComponent;