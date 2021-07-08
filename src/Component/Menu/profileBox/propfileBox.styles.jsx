import styled ,{keyframes} from "styled-components";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export const MyUserIconButton = styled(IconButton)`
    font-size:2.5rem !important;
    color:#fff;

    &:focus{
        outline:none !important;
    }
`;

export const MyUserIcon = styled(AssignmentIndIcon)`
    font-size:2.5rem !important;
    color:#fff;
`;

export const MyTypography = styled(Typography)`
    font-size:2rem !important;
    font-family:Bnazanin !important;
    color:#999;
    text-align:right;
    padding:1rem !important;
`;