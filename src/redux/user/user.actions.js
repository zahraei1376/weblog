import { UserActionTypes } from './user.types';
// import axios from 'axios';

// export const setCurrentUser = (user) =>({
//     type:UserActionTypes.SET_CURRENT_USER,
//     payload:user
// });

export const fetchUserStart = () =>({
   type:UserActionTypes.FETCH_COLLECTION_START
});

export const fectchUserCuccess = (user,teacher,admin) =>({
    type:UserActionTypes.FETCH_USER_SECCUSS,
    payload:user,
    isTeacher:teacher,
    isAdmin:admin
});

export const fectchUserFailure = errorMessage =>({
    type:UserActionTypes.FETCH_USER_FAILURE,
    payload:errorMessage
});

export const fetchUserStartAsync = (data) =>{
    return dispatch => {
        console.log(data);
        // dispatch(fetchCollectionsStart());
        fetch("http://185.165.118.211:9074/api/v1/Users/Login", {
            headers: {
                'Content-Type': 'application/json'
                },
            method:"POST",
            body: JSON.stringify(data)
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{ 
            console.log(dataRes);
            // console.log(dataRes.userId);
            if(dataRes.isSuccess){
                dispatch(fectchUserCuccess(dataRes.userId,dataRes.isTeacher,dataRes.isAdmin))
            }else{
                dispatch(fectchUserFailure(dataRes.message));
            }
            
            // this.setState({
            //     errorsLog:dataRes.data,
            //     message:dataRes.message,
            //     Id:dataRes.userId,
            //     teacher:dataRes.teacher,
            //     admin:dataRes.admin,
            // })
            // sessionStorage.setItem('UserLogin',JSON.stringify({
            //     token:dataRes.token,
            //     Id:this.state.Id,
            //     teacher:this.state.teacher,
            //     admin:this.state.admin,
            // }))
        })
        .catch(err => {
            dispatch(fectchUserFailure(err.message));
        });
    }
 }