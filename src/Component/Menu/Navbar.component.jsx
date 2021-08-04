import  React , {useState} from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/toolbar.component';
import PopoverPopupState from './profileBox/propfileBox.component';
import {NavberContainer,UserIconButton ,MyUserIcon ,ProfileBox} from './Navbar.styles';

const MyNavbar = ({currentUser}) =>{
    return (
        <NavberContainer>
            <Toolbar />

           {/* {currentUser ? <UserIconButton>
                <PopoverPopupState/>
            </UserIconButton> : ''} */}

            <UserIconButton>
                <PopoverPopupState/>
            </UserIconButton>        
            
        </NavberContainer>
    )
};

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(MyNavbar);