import  React from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/toolbar.component';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import {NavberContainer,UserIconButton ,MyUserIcon ,ProfileBox} from './Navbar.styles';

const MyNavbar = ({currentUser}) =>{
    return (
        <NavberContainer>
            <Toolbar />
            {/* {currentUser ? <UserIconButton>
                <MyUserIcon />
            </UserIconButton> : ''} */}

            <UserIconButton>
                <MyUserIcon />
                <ProfileBox>

                </ProfileBox>
            </UserIconButton>
            
        </NavberContainer>
    )
};


// export default MyNavbar;
const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
    isTeacher:state.user.isTeacher,
    isAdmin:state.user.isAdmin
});

export  default connect(mapStateToProps , null)(MyNavbar);

// export default class Menu extends React.Component{
//     state={
//         SideDrawerOpen:false
//     }
    
//     DrawerToggleClickHandle=()=>{
//         this.setState((prestate)=> {
//             return {SideDrawerOpen: !prestate.SideDrawerOpen}
//         });
//     };

//     backdropClickHandle=()=>{
//         this.setState({SideDrawerOpen:false})
//     }

//     render() {
//         let backDrop;
//         if ((this.state.SideDrawerOpen))
//         {
//             backDrop=<BackDrop click={this.backdropClickHandle} />
//         }
//         return(

//             <div style={{height:'100%'}}>
//                 <Toolbar DrawerClickHandle={this.DrawerToggleClickHandle}/>
//                 <SideDrawer show={this.state.SideDrawerOpen} />
//                 {backDrop}
//             </div>
//         )
//     }
// }