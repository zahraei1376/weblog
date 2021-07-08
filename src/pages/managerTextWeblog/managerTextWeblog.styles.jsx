import styled from 'styled-components';

export const AddRowBtn = styled.button`
    border:none;
    // width:12rem;
    background-color:#3f87a6;
    padding:1rem;
    border-radius:1rem;
    color:#fff;
    cursor:pointer;
    border:1px solid transparent;
    transition:all 0.3s;
    margin-bottom: 3rem;
    position:absolute;
    left:3rem;
    top:2rem;
    z-index:100;
    font-family:Bnazanin;
    font-size:1.5rem;
    &:hover{
        border:1px solid #3f87a6;
        background-color:#eee;
        color:#546E7A;
    }
`;

export const TextWeblogContainer = styled.div`
    width: 94%;
    display:flex;
    flex-direction:column;
    // width:100%;
    // box-shadow: 0 3px 20px 3px rgba(0,0,0,0.5);
    box-shadow: 0 0px 4px 0px rgba(0,0,0,0.5);
    // border:1px solid #000;
    border-radius:3rem;
    margin:3rem;
    padding-bottom:3rem;
`;

export const TextContainer = styled.div`
width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    // display:grid;
    // grid-template-columns: repeat(7,1fr);
    // column-gap: 1rem;
    // row-gap: 3rem;
    // width:100%;
    margin:2rem 0 4rem 0;
    // text-align:center;
    // padding:2rem;
    border-bottom:1px solid #000;
    // box-sizing:border-box;
    // direction:rtl;

    // @media only screen and (max-width: 75em) {
    //     grid-template-columns: repeat(5,1fr);
    // }

    // @media only screen and (max-width: 56.25em) {
    //     grid-template-columns: repeat(4,1fr);
    // }

    // @media only screen and (max-width: 37.5em) {
    //     grid-template-columns: repeat(3,1fr);
    // }

    // @media only screen and (max-width: 281) {
    //     grid-template-columns: repeat(2,1fr);
    // }
`;

// @media only screen and (max-width: 75em) {
//     html {
//       font-size: 56.25%; } }
//   @media only screen and (max-width: 56.25em) {
//     html {
//       font-size: 50%; } }
//   @media only screen and (max-width: 37.5em) {
//     html {
//       font-size: 30%; } }
//   @media only screen and (min-width: 112.5) {
//     html {
//       font-size: 75%; } }