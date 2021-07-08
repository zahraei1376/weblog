import styled from "styled-components";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const MySelect = styled(Select)`
    color:#000 !important;
    border:none !important;
    width:100% !important;
    padding: 1rem 2rem;
    background-color:rgba(256,256,256,.9)!important;
    height:100% !important;
    text-align:center;
    
    &:focus{
        border:none !important;
    }

    &:focus:invalid {
        border-bottom: 3px solid #ff7730 !important;
    }

`;

export const MyMenuItem = styled(MenuItem)`
    width:100% !important;
    font-size:1.4rem !important;
    text-align:right !important;
`;