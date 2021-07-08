// import  React from 'react';
// import  {NavLink} from 'react-router-dom';
// import './toolbar.css';
// // import Logo from '../../images/images';
// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import 'font-awesome/css/font-awesome.min.css';
// import { connect } from 'react-redux';
// // //////////////////////////////////////////

// // let Id;
// // let teacher;
// // let admin;
// // if(sessionStorage.getItem('UserLogin')) {
// //     Id=JSON.parse(sessionStorage.getItem('UserLogin')).Id
// //     teacher=JSON.parse(sessionStorage.getItem('UserLogin')).teacher
// //     admin=JSON.parse(sessionStorage.getItem('UserLogin')).admin
// // }else{
// //     Id=false;
// //     teacher=false;
// //     admin=false;
// // }

// const  Toolbar = (props) => (
//     <header className="toolbar">
//         <nav className="toolbar__navigation">
//             <div className="toolbar_navigation_items">
//                 <ul>
//                     <li><i className="fa fa-home sizze"></i><NavLink exact to="/">صفحه اصلی</NavLink></li>
//                     <li><i className="fa fa-users sizze"></i><NavLink exact to="/ShowTeacher">معلمان</NavLink></li>
//                     {!props.currentUser ? <li><i className="fa fa-user sizze"></i> <NavLink exact to ='/RegLog'>ثبت نام / ورود</NavLink></li>:""}
//                     {props.currentUser && this.props.isTeacher ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/Profile">پروفایل</NavLink></li>:""}
//                     {props.currentUser && !this.props.isTeacher ?<li><i className="fa fa-users sizze"></i> <NavLink exact to="/NewTeacher">ثبت نام معلم</NavLink></li>:""}
//                     {props.currentUser && this.props.isTeacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/getCourses">دریافت درس</NavLink></li>:""}
//                     {props.currentUser && this.props.isTeacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/UploadFile">آپلود فایل</NavLink></li>:""}
//                     {props.currentUser && this.props.isAdmin ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/AdminPanel">ادمین</NavLink></li>:"" }
//                 </ul>
//             </div>
//             <div className="spacer"/>

//             <div className="toolbar__toggle-button">
//                 <DrawerToggleButton click={props.DrawerClickHandle}/>
//             </div>

//         </nav>
//     </header>
// )

// const mapStateToProps = state => ({
//     currentUser:state.user.currentUser,
//     isTeacher:state.user.isTeacher,
//     isAdmin:state.user.isAdmin
// });

// export  default connect(mapStateToProps , null)(Toolbar);

import React from 'react';
import  {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListImag from '../../../asset/img/start2.png'; 

import {DrawerContainer,IconContainer,MyListIcon ,List ,ListItem ,ListImg,ImgContainer,MyNavLink,ArrowIcon,ArrowIconButton,ListLink} from './toolbar.styles';

const ITEMS = [
  {rol:'admin', text:'مدیریت دسته بندی' , url:'/managerCateroryWeblog',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت دسته بندی' , url:'/managerCateroryWeblog',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت دسته بندی' , url:'/managerCateroryWeblog',icon:<MyListIcon/>},
]

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Toolbar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //                 <ul>
//                     <li><i className="fa fa-home sizze"></i><NavLink exact to="/">صفحه اصلی</NavLink></li>
//                     <li><i className="fa fa-users sizze"></i><NavLink exact to="/ShowTeacher">معلمان</NavLink></li>
//                     {!props.currentUser ? <li><i className="fa fa-user sizze"></i> <NavLink exact to ='/RegLog'>ثبت نام / ورود</NavLink></li>:""}
//                     {props.currentUser && this.props.isTeacher ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/Profile">پروفایل</NavLink></li>:""}
//                     {props.currentUser && !this.props.isTeacher ?<li><i className="fa fa-users sizze"></i> <NavLink exact to="/NewTeacher">ثبت نام معلم</NavLink></li>:""}
//                     {props.currentUser && this.props.isTeacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/getCourses">دریافت درس</NavLink></li>:""}
//                     {props.currentUser && this.props.isTeacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/UploadFile">آپلود فایل</NavLink></li>:""}
//                     {props.currentUser && this.props.isAdmin ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/AdminPanel">ادمین</NavLink></li>:"" }
//                 </ul>

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ImgContainer>
          <ListImg src={ListImag} />
        </ImgContainer>
        <Divider />
        {ITEMS ? ITEMS.map((item ,index) =>{
          return(
            <div>
                {/* {props.currentUser 
                 ? <ListItem button key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem> : ''} */}

                {props.currentUser 
                 ? <ListItem>
                   <IconContainer>{item.icon}</IconContainer> 
                   <MyNavLink exact to = {item.url}>{item.text}</MyNavLink>
                   </ListItem>
                 : <ListItem>
                 <IconContainer>{item.icon}</IconContainer> 
                 <MyNavLink exact to = "/managerCateroryWeblog">{item.text}</MyNavLink>
                 </ListItem>}
                 <Divider />
              
            </div>
          )
        }): ''}
      </List>
      {/* <Divider /> */}
    </div>
  );

  return (
    <DrawerContainer>
       <ArrowIconButton onClick={toggleDrawer("right", true)}><ArrowIcon/></ArrowIconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
    </DrawerContainer>
  );
}

// export default Toolbar;
const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
    isTeacher:state.user.isTeacher,
    isAdmin:state.user.isAdmin
});

export  default connect(mapStateToProps , null)(Toolbar);
