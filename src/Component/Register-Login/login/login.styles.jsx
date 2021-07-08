// @import '../../../sass/abstracts/variables';

// .login{
//     width: 100%;
    
//     &__header{
//         color:$color-dark-dark-2;
//         text-align: center;
//         font-size: 1.5rem;
//     }

//     &__box{
//         // width: 100%;
//         height: 20rem;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         // background-color: #fff;
//         // box-shadow: 0 .5rem 2rem 1rem rgba($color: $color-dark-dark-1, $alpha:.3);
//     }

//     &__btn{
//         width: 10rem;
//         height: 3rem;
//         border-radius: 3rem;
//         background-color:$color-primary ;
//         color: $color-dark-light-1;
//         font-size: 1.3rem;
//         margin-top: 3rem;
    
//         &:focus,
//         &:active{
//             outline: none;
//         }

//         &:hover{
//             color:$color-primary;
//             background-color:$color-dark-light-1;
//             border: 2px solid $color-primary;
//         }
//     }

//     // &__btn:active + &__row > &__input{
//     //     &:invalid{
//     //         border-bottom: 2px solid $color-primary-light;
//     //     }
//     // }

//     &__input{
//         width: 80%;
//         border: none;
//         outline: none;
//         padding: 1rem;
//         border-bottom: 2px solid $color-dark-dark-4;
//         transition: all .3s;
//         background-color: inherit;
//         margin: 1rem auto 0 auto;
//         font-size: 1rem;

//         &:focus{
//             border-bottom: 2px solid $color-primary2-dark;
//         }

//         &:focus:invalid{
//             border-bottom: 2px solid $color-primary2-dark;
//         }

//         &:invalid{
//             border-bottom: 2px solid $color-primary2-dark;
//         }

//         &:valid{
//             border-bottom: 2px solid green;
//         }
//     }

//     &__link{
//         text-decoration: none;
//         color: $color-dark-dark-2;
//         margin-top: 1.3rem;
//         font-size: 1rem;

//         &:hover{
//             text-decoration: none;
//             color: $color-primary;
//         }
//     }
// }

import styled ,{css} from "styled-components";
import back from '../../../asset/img/back4.jpg';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';

const IconsCss = css`
    font-size:2rem !important;
    color:#fff;
`;

export const IconContainer = styled.div`
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const MyPersonOutlineIcon = styled(PersonOutlineIcon)`
   ${IconsCss}
`;

export const MyLockOutlinedIcon = styled(LockOutlinedIcon)`
    ${IconsCss}
`;
// $color-primary: #55c57a;
// $color-primary-light: #7ed56f;
// $color-primary-dark: #28b485;
// $color-primary: #55c57a;
// $color-primary-light: #7ed56f;
// $color-primary-dark: #28b485;

// $color-secondary-light: #ffb900;
// $color-secondary-dark: #ff7730;

// $color-tertiary-light: #2998ff;
// $color-tertiary-dark: #5643fa;

// $color-grey-light-1: #f7f7f7;
// $color-grey-light-2: #eee;

// $color-grey-dark: #777;
// $color-grey-dark-2: #999;
// $color-grey-dark-3: #333;

// $color-white: #fff;
// $color-black: #000;
export const TitleLogin = styled.h1`
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transition: all .2s;

    @media only screen and (max-width: 75em) {
        font-size: 3rem;
    }; 
    
    
    @media only screen and (max-width: 56.25em) {
        font-size: 2.5rem;
    };

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(#000, .2);
    }
`;

export const SectionLogin = styled.div`
    padding: 15rem 0;
    width:100%;
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    // background-image: linear-gradient(to right ,#191e3e,#242d64,#bf4f7b,#fc8d6d);
    background-image: linear-gradient(to bottom ,#fc8d6d,#bf4f7b,#242d64,#191e3e);
    // background-image: linear-gradient(105deg, 
    // #3f87a6 0%,
    // #3f87a6 50%,
    // rgba(256,256,256, .9) 50%);
    background-size: 100%;
    background-position:center;

    @media only screen and (max-width: 56.25em) {
        padding: 10rem 0;
    }; 
`;

export const LoginBox = styled.div`
    width:30%;
    // padding: 6rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    @media only screen and (max-width: 75em) {
        width: 45%;
    }; 

    @media only screen and (max-width: 56.25em) {
        width: 60%;
    };
`;


export const LoginFormContainer = styled.div`
    // width: 80%;
    // padding: 6rem;
    // display:flex;
    // justify-content:center;

    @media only screen and (max-width: 75em) {
        width: 65%;
    }; 
    
    @media only screen and (max-width: 56.25em) {
        width: 100%;
    };
    
`;

export const LoginForm = styled.form`
    width: 100%;
    // padding: 6rem;
    margin-bottom:3rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-bottom: 1px solid #fff;
    // border-bottom:1px solid #eee;
    // @media only screen and (max-width: 75em) {
    //     width: 65%;
    // }; 

    // @media only screen and (max-width: 56.25em) {
    //     width: 100%;
    // };
`;

export const FormGroup = styled.div`
    width:100%;
    margin-bottom: 2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius:5px;
    border:1px solid #fff;

    // @media only screen and (max-width: 75em) {
    //     width: 85%;
    // }; 

    // @media only screen and (max-width: 56.25em) {
    //     width: 100%;
    // };
`;

export const FormGroupBtn = styled.div`
    width:100%;
    margin:1rem 0;
    // margin-bottom: 2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    // border-radius:5px;
    // border:1px solid #fff;

    // @media only screen and (max-width: 75em) {
    //     width: 85% !important;
    // }; 

    // @media only screen and (max-width: 56.25em) {
    //     width: 100% !important;
    // };
`;

export const FormLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: .7rem;
    display: block;
    transition: all .3s;
    text-align:right;
`;

export const FormInput = styled.input`
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1rem 2rem;
    border-radius: 2px;
    background-color: rgba(256,256,256, .9);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all .3s;

    @media only screen and (max-width: 56.25em) {
        width: 100%;
    };

    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(#000, .1);
        border-bottom: 3px solid #55c57a;
    }

    &:focus:invalid {
        border-bottom: 3px solid #ff7730;
    }

    &::-webkit-input-placeholder {
        color: #999;
    }

    
    &::placeholder-shown + ${FormLabel} {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);
    }
`;

export const LoginDescContainer = styled.div`
    width: 50%;
    padding: 4rem;
    display:flex;
    flex-direction:column;
    // justify-content:flex-end;
    @media only screen and (max-width: 75em) {
        width: 35%;
    }; 

    @media only screen and (max-width: 56.25em) {
        // width: 100%;
        display:none;
    };
`;

export const LoginDesc = styled.p`
    font-size:1.6rem;
    color:#fff;
    white-space: pre-line;
    text-align:right;
    line-height: 3rem;
`;

export const LoginLink = styled(Link)`
    color:#fff;
    font-size:1.5rem;
    margin:2rem 0 4rem 0;

    &:hover{
        color:#eee;
    }
`;

export const FooterLogin = styled.div`
    width:55%;
    bottom:0;
    display: flex;
    justify-content: center;
    margin-top:auto;
    @media only screen and (max-width: 75em) {
        width: 75%;
    }; 

    @media only screen and (max-width: 56.25em) {
        width: 85%;
    };
// display:flex;
// justify-content:center;
// border-top: 1px solid $color-grey-dark;
// padding-top: 2rem;
// width: 80%;
// float: right;

// @include respond(tab-port) {
//     width: 100%;
//     float: none;
// }
`;


export const FooterLoginText = styled.p`
    width:70%;
    text-align:center;
    // border-top: 1px solid #fff;
    padding-top: 2rem;
    width: 80%;
    color:#fff;
    // @media only screen and (max-width: 56.25em) {
    //     width: 100%;
    // };
`;


export const FooterLoginLink = styled.a`
    &:link,
    &:visited {
        color: #f7f7f7;;
        background-color: #333;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        transition: all .2s;
        padding:5px;
    }

    &:hover,
    &:active {
        // color: $color-primary;
        box-shadow: 0 1rem 2rem rgba(0,0,0, .4);
        transform: rotate(5deg) scale(1.3);
    }
`;

