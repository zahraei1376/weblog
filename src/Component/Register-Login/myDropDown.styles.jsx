import styled from "styled-components";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const MySelect = styled(Select)`
    color:#000 !important;
    border:none !important;
    width:100% !important;
    // padding: 1rem 2rem;
    padding: 8px 2rem;
    background-color:rgba(256,256,256,.9)!important;
    height:100% !important;
    text-align:right;
    font-size:1.4rem !important;
    
    &:focus{
        border:none !important;
    }

    &:focus:invalid {
        border-bottom: 3px solid #ff7730 !important;
    }

    // @media only screen and (max-width: 75em){
    //     padding: 4px 2rem;
    // }

    // @media only screen and (max-width: 56.25em){
    //     padding: 3px 2rem;
    // }

    @media only screen and (max-width: 37.5em){
        padding: 1px 2rem;
    }

    // @media only screen and (max-width: 75em) {
    //     html {
    //       font-size: 56.25%; } }
    //   @media only screen and (max-width: 56.25em) {
    //     html {
    //       font-size: 50%; } }
    //   @media only screen and (max-width: 37.5em) {
    //     html {
    //       font-size: 30%; } }
    //   @media only screen and (min-width: 112.5)

`;

export const MyMenuItem = styled(MenuItem)`
    width:100% !important;
    font-size:1.4rem !important;
    text-align:right !important;
`;