import React from 'react';
import {ImageContainer ,Image} from './notFound.styles';
import NotFound from '../../asset/img/notFound.jpg';
const GenericNotFound = () =>{
    return(
        <ImageContainer>
            <Image src={NotFound}/>
        </ImageContainer>
    )
};


export default GenericNotFound;