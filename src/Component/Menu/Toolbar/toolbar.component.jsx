import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListImag from '../../../asset/img/start2.png'; 
import { useHistory } from "react-router-dom";
import {DrawerContainer,IconContainer,MyListIcon ,List ,ListItem ,ListImg,ImgContainer,MyNavLink,ArrowIcon,ArrowIconButton,ListLink} from './toolbar.styles';
/////////////////////////////
const ITEMS = [
  {rol:'admin', text:'ورود' , url:'/',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت دسته بندی' , url:'/managerCateroryWeblog',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت مطالب' , url:'/managerTextWeblog',icon:<MyListIcon/>},
]
/////////////////////////////
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Toolbar = (props) => {
  ///////////////////////////
  const classes = useStyles();
  ////////////////////////////
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  /////////////////////////////
  let history = useHistory();
  /////////////////////////////
  const handleUrl = (url) =>{
    setTimeout(()=>{
      history.push(url);
    },1000);
    // history.push(url)
  }
   /////////////////////////////
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  /////////////////////////////
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
            <div key={index}>
                {/* {props.currentUser 
                 ? <ListItem onClick={()=>handleUrl(item.url)}>
                   <IconContainer>{item.icon}</IconContainer> 
                   <MyNavLink href = {item.url}>{item.text}</MyNavLink>
                   </ListItem>
                 : <ListItem onClick={()=>handleUrl('/')}>
                 <IconContainer>{item.icon}</IconContainer> 
                 <MyNavLink href="/">{item.text}</MyNavLink>
                 </ListItem>} */}

                  <ListItem onClick={()=>handleUrl(item.url)}>
                    <IconContainer>{item.icon}</IconContainer> 
                    <MyNavLink href = {item.url}>{item.text}</MyNavLink>
                  </ListItem>

                 <Divider />
              
            </div>
          )
        }): ''}
      </List>
    </div>
  );
  /////////////////////////////
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

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(Toolbar);
