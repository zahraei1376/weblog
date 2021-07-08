import styled ,{keyframes} from "styled-components";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { IconButton } from '@material-ui/core';

const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  80%{
    transform: translateY(1rem);
  }

  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavberContainer = styled.div`
    height: 5rem;
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color: #322F32;
    // background-color: transparent;
    border-bottom: 4px solid #521751;
    top: 0;
    left: 0;
    box-shadow:0px 0px 15px 0px #000000;
`;

export const UserIconButton = styled(IconButton)`
    margin-left:1rem !important;
    position:relative;

    div:first-of-type {
      display:none;
    }
    
    &:active > div:first-of-type {
      display: grid;
      animation: ${fade} 1.1s linear;
      animation-iteration-count: 1;
    }
`;

export const MyUserIcon = styled(AssignmentIndIcon)`
    font-size:2.5rem !important;
    color:#fff;
`;

export const ProfileBox = styled.div`
    width:30rem;
    height:40rem;
    position:absolute;
    top:4rem;
    left:4rem;
    background-color:#fff;
   
`;