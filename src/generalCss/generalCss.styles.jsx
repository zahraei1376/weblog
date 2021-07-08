import styled from 'styled-components';
import Button from '@material-ui/core/Button';


export const MarginBottomSmall = styled.div`
    margin-bottom: 1.5rem !important;
`;

export const MarginBottomRightMedium = styled.div`
    margin-bottom: 4rem !important;
    text-align:right;

    @media only screen and (max-width: 56.25em) {
        margin-bottom: 3rem !important;
    };
`;

export const MarginBottomBig = styled.div`
    margin-bottom: 8rem !important;

    @media only screen and (max-width: 56.25em) {
        margin-bottom: 5rem !important;
    };
`;

export const MarginTopBig = styled.div`
    margin-top: 8rem !important;
`;

export const MarginTopHuge = styled.div`
    margin-top: 10rem !important;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    display: inline-block;
    background-image: ${props => props.color1 && props.color2 ? `linear-gradient(to right,${props.color1} , ${props.color2});` : "linear-gradient(to right, #3f87a6 ,#084159 );"};
    // background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent;
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

export const Btn = styled(Button)`
    background-color:${props => props.bgColor ? props.bgColor : '#084159'} !important;
    color:${props => props.color ? props.color : '#fff'} !important;
    font-size:1.7rem !important;
    font-family:Bnazanin !important;
    
    direction:rtl;
    transition:all 0.2s;
    // margin-bottom: 1.5rem !important;
    width: 100% !important;
    // background-color:#084159 !important;
    // color:#fff !important;

    &:hover{
        background-color:#191e3e !important;
        color:#fff !important;
    }

   
`;