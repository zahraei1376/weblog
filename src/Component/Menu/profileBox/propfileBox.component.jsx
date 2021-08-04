import React ,{ useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { connect } from 'react-redux';
import {MyUserIconButton , MyUserIcon ,MyTypography} from './propfileBox.styles';
import Divider from '@material-ui/core/Divider';

function PopoverPopupState({userInfo}) {

  useEffect(()=>{
      console.log('userInfo',userInfo);
  },[]);

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <MyUserIconButton variant="contained" color="#fff" {...bindTrigger(popupState)}>
          <MyUserIcon />
          </MyUserIconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            {/* {userInfo ? <Box p={2}>
              <MyTypography>کاربر عزیز {userInfo.userName ? userInfo.userName : ''} خو ش آمدید</MyTypography>
              <Divider />
              <MyTypography>اطلاعات زیر برای شما ثبت شده است</MyTypography>
              <MyTypography>نام : {userInfo.fullName ? userInfo.fullName : ''}</MyTypography>
              <MyTypography>ایمیل : {userInfo.email ? userInfo.email : ''}</MyTypography>
            </Box> : ''} */}

            <Box p={2}>
              <MyTypography>کاربر عزیز {userInfo && userInfo.userName ? userInfo.userName : ''} خو ش آمدید</MyTypography>
              <Divider />
              <MyTypography>اطلاعات زیر برای شما ثبت شده است</MyTypography>
              <MyTypography>نام : {userInfo && userInfo.fullName ? userInfo.fullName : ''}</MyTypography>
              <MyTypography>ایمیل : {userInfo && userInfo.email ? userInfo.email : ''}</MyTypography>
            </Box>

          </Popover>
        </div>
      )}
    </PopupState>
  );
}

const mapStateToProps = state => ({
  userInfo:state.user.userInfo,
});

export  default connect(mapStateToProps , null)(PopoverPopupState);