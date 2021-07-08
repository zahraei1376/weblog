// .Top{
//     width: 100%;
//     height: 60px;
//     background-color: #1b1e21;
// }
// .toolbar{
//     line-height: 0;
//     background-color: #322F32;
//     /* background-color:
//     #181818; */
//     border-width: 0 0 0.14285714285714285rem 0;
//     border-bottom: 4px solid #521751;
//     border-style: solid;
//     /*  */
//     height: 56px;
//     width: 100%;
//     top: 0;
//     left: 0;
//     box-shadow:0px 0px 15px 0px #000000;
//     /* background-color: #521751; */
//     /*display: flex;*/
//     /*justify-content: space-between;*/
//     /*align-items: center;*/
//     /*padding: 0px 20px;*/
//     /*box-sizing: border-box;*/
//     /*z-index: 100;*/
// }
// .toolbar__navigation{
//     display: flex;
//     height: 100%;
//     align-items: center;
//     padding: 0 1rem;
//     font-size: 1rem;
// }
// .toolbar__logo{
//     margin-left: 1rem;
// }
// .toolbar__logo a{
//     float: left;
//     color: white;
//     text-decoration: none;
//     font-size: 1.5rem;
// }
// .toolbar_navigation_items ul{
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     display: flex;
// }
// .toolbar_navigation_items li{
//     padding: 0 1.5rem;
// }
// .toolbar_navigation_items a{
//     color: white;
//     text-decoration: none;
// }
// .spacer{
//    flex: 1;
// }
// .toolbar_navigation_items a:hover,
// .toolbar_navigation_items a:active,
// .toolbar_navigation_items a.active{
//     color: #DE94EA;
//     /* color: #fa923f; */
// }

// .sizze{
//     color: white;
//     margin-left: 10px;
// }

// @media (max-width: 768px) {
//     .toolbar_navigation_items{
//         display: none;
//     }
//     /*.toolbar__logo{*/
//     /*    margin-left:10px;*/
//     /*    margin-top: 30px;*/
//     /*}*/
    
// }
// @media (max-width: 900px) {
//     .toolbar__navigation{
//         display: flex;
//         height: 100%;
//         align-items: center;
//         padding: 0 .5rem;
//     }

// }
// @media (min-width: 768px) {
//     .toolbar__toggle-button{
//         display: none;
//     }
//     .toolbar__logo{
//         margin-left:0px;
//     }

// }



// /*.Toolbar nav{*/
// /*    height: 100%;*/
// /*}*/

////////////////////////////////
import styled ,{css} from "styled-components";
import  {NavLink} from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { IconButton } from '@material-ui/core';
///////////////////////////////

export const ImgContainer = styled.div`
    width:100%;
    // height:10rem;
    margin:1rem 0;
    display:flex;
    justify-content:center;
`;

export const ListImg = styled.img`
    width:17rem;
    height:17rem;
`;


export const DrawerContainer = styled.div`
    padding:2rem;
    display: flex;
    flex-direction:column;
    align-tems:center;
`;

const IconsCss = css`
    // font-size:2rem;
    color:#bf4f7b;
`;

export const MyListIcon = styled(ListAltIcon)`
    ${IconsCss};
    font-size:2rem !important;
`;

export const ArrowIconButton = styled(IconButton)`
    color:#fff;
    // font-size:2.5rem;
    width:3rem !important;
    height:3rem !important;
    border-radius:5px !important;
    margin:1rem 0 ;
    border:1px solid #fff !important;

    &:active,
    &:focus{
        outline:none;
    }
`;

export const ArrowIcon = styled(KeyboardArrowLeftIcon)`
    ${IconsCss};
    color:#fff;
    font-size:2.5rem !important;

`;

// export const MyNavLink = styled(NavLink)`
//     text-decoration: none;
//     color:#000;
//     font-family:Bnazanin;
//     font-size:2rem;

//     &:hover{
//         text-decoration: none;
//     }
// `;

export const MyNavLink = styled.a`
    text-decoration: none;
    color:#000;
    font-family:Bnazanin;
    font-size:2rem;

    &:hover{
        text-decoration: none;
    }
`;

export const IconContainer = styled.div`
    margin-left:2rem;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction:column;
`;

export const ListItem = styled.li`
    padding: 0 1.5rem;
    display:flex;
    align-items:center;
    padding:2rem;
    transition:all .3s;
    &:hover{
        background-color:#bf4f7b;
        color:#fff;
    }

    &:hover a{
        text-decoration:none;
        color:#fff;
    }

    &:hover ${MyListIcon}{
        color:#fff;
    }

    &:hover ${ArrowIcon}{
        color:#fff;
    }
`;

export const ListLink = styled.a`
    color: white;
    text-decoration: none;
`;