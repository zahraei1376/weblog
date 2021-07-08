// import React from 'react';
// import '../login/login.scss';
// import '../register/register.scss';

// class Register extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             errors:[],
//             usernameReg:"",
//             passwordReg:"",
//             passwordConfirmReg:"",
//             name:"",
//             mobileNumber:"",
//             email:"",
//             message:"",
//             status:"",
//         };
//     }
    

//     submitRegister = (e)=>{
//         e.preventDefault();  
//         var data = {
//             username: this.state.usernameReg,
//             password:this.state.passwordReg,
//             confirmPassword:this.state.passwordConfirmReg,
//             name:this.state.name,
//             mobileNumber:this.state.mobileNumber,
//             email:this.state.email
//         }
//         fetch("http://localhost:7000/register", {
//             headers: {
//                 'Content-Type': 'application/json'
//                 },
//             method:"POST",
//             body: JSON.stringify(data)
//         })
//         .then((response)=>{ 
//             this.setState({status:response.status})
//             return response.json();   
//         })
//         .then((dataRes)=>{ 
//             console.log(dataRes);
//             console.log(dataRes.data)
//             this.setState({errors:dataRes.data,message:dataRes.message});
//         })
//         .catch(
//             console.log('err')
//         )
//     }

//     handleUsername = (e)=>{
//         this.setState({usernameReg: e.target.value});
//     }
//     handlePass = (e)=>{
//         this.setState({passwordReg: e.target.value});
//      }
//     handleConfirmPass = (e)=>{
//         this.setState({passwordConfirmReg: e.target.value});
//     }
//     handleName = (e)=>{
//         this.setState({name: e.target.value});
//     }
//     handlemobileNumber = (e)=>{
//         this.setState({mobileNumber: e.target.value});
//     }
//     handleEmailChange = (e)=>{
//         this.setState({email: e.target.value});
//     }

//     render(){
//         const styleError={
//             color:"red",
//             textAlign:"right"
//         };
//         const styleSeccess={
//             color:"green",
//             textAlign:"center",
//             marginBottom: "2rem",
//             fontSize:"2rem"
//         };

//         return(
//             <div>
//                 <div style={styleError}>
//                     {this.state.errors ?  
//                         this.state.errors.map(element => (element.msg))
//                         :""
//                     }
//                 </div>
//                 {/* <div style={styleSeccess}> */}
//                     {this.state.status==200 || this.state.status==201 ? <div style={styleSeccess}>{this.state.message}</div>:""}
//                 {/* </div> */}
//                 <div className="login">
//                     <div className="login__header">
//                         ثبت نام
//                     </div>
//                     <form className="needs-validation login__box register__box" id="myRegisterForm">
//                         <div className="row">
//                             <input className='login__input' type="text" name="username" placeholder="نام کاربری" required  minLength="5" value={this.state.usernameReg} onChange={this.handleUsername} />
//                             <input className='login__input' type="password" name="password" placeholder="پسورد" required  minLength="5" value={this.state.passwordReg} onChange={this.handlePass} />
//                             <input className='login__input' type="password" name="confirmPassword" placeholder="تایید پسورد" required  minLength="5" value={this.state.passwordConfirmReg} onChange={this.handleConfirmPass} />
//                             <input className='login__input' type="text" name="name" placeholder="نام و نام خوانوادگی" required value={this.state.name} onChange={this.handleName} />
//                             <input className='login__input' type="text" name="mobileNumber" placeholder="شماره موبایل" required  minLength="11" value={this.state.mobileNumber} onChange={this.handlemobileNumber} />
//                             <input className='login__input' type="email" name="email" placeholder="ایمیل" required value={this.state.email} onChange={this.handleEmailChange} />
//                         </div>
//                         <button className="login__btn" onClick={this.submitRegister.bind(this)}>ثبت نام</button>
//                     </form>
//                 </div>
//             </div>
                
//         )
//     }
// }
// export default Register;

import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchUserStartAsync } from '../../../redux/user/user.actions';
import { Redirect } from 'react-router-dom';
import {connect } from 'react-redux';
// //////////////////

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import img from '../../../asset/img/back4.jpg';
// import './login.scss';
import {IconContainer,MyLockOutlinedIcon,MyPersonOutlineIcon,MyGenderIcon,MyAgeIcon,MyEmailIcon,MyFullNameIcon,SectionRegister ,RegisterBox ,TitleRegister,RegisterFormContainer,
    RegisterForm ,FormGroupContainer,FormGroup,FormGroupBtn,FormInput,RegisterLink,FormLabel,RegisterDescContainer ,RegisterDesc ,FooterRegister,FooterRegisterText ,FooterRegisterLink} from './register.styles';

import {Title ,MarginBottomRightMedium ,Btn} from '../../../sass/generalCss.styles';

import MyDropDown from '../myDropDown.component';
import MySnackbar from '../../messageBox/messageBox.component';
const RegisterPage = (props) =>{

    const [fiels,setFiels] = useState({
        username:'',
        pass:'',
        email:'',
        fullName:'',
        age:'',
        gender:'',
    });
    /////////////////////////
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] =useState(0);
    /////////////////////////

    const handleSetFeild = (val , param) =>{
        setFiels({...fiels, [param] : val});
    }


    const submitRegister = async(e)=>{
        e.preventDefault();

        console.log('data',{
            username: fiels.username,
            password:fiels.pass,
            email:fiels.email,
            fullName:fiels.fullName,
            age:fiels.age,
            gender:fiels.gender,
        });
        if(fiels.username !=""  && fiels.pass !="" && fiels.email !=""  && fiels.fullName !=""){
            const data = {
                username: fiels.username,
                password:fiels.pass,
                email:fiels.email,
                fullName:fiels.fullName,
                age:fiels.age,
                gender:fiels.gender,
            }
            
            await fetch("http://185.165.118.211:9074/api/v1/Users", {
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
                if(dataRes.isSuccess){
                    setStatus('0')
                    setMessage('موفقیت آمیز بود');
                    setShowMessage(true);
                    return <Redirect to={{
                        pathname: '/'
                    }}/>
                }else{
                    setStatus('0')
                    setMessage(dataRes.message)
                    setShowMessage(true);
                }

            })
            .catch(err => {
                setStatus('0')
                setMessage(err.message)
                setShowMessage(true);
            });
        }
        else{
            // const errorMessage="نام کاربری و رمز عبور باید ارای حداقل 5 کارکتر باشد";
            // alert("ابتدا مقادیر خواسته شده را پر کنید");
            setStatus('0')
            setMessage('ابتدا مقادیر خواسته شده را پر کنید');
            setShowMessage(true);
        }


    }

    const handleOnChangeSelect = (val) =>{
        setFiels({...fiels, ['gender'] : val});
    }

    return(
        <SectionRegister>
            <RegisterBox>
                    <RegisterForm action="#">
                        <FormGroupContainer>
                            <FormGroup>
                                <IconContainer>
                                    <MyPersonOutlineIcon/>
                                </IconContainer>   
                                <FormInput type="text"  placeholder="نام کاربری" id="username" required onChange={e => handleSetFeild(e.target.value , 'username')} />
                            </FormGroup>

                            <FormGroup>
                                <IconContainer>
                                    <MyLockOutlinedIcon/>
                                </IconContainer>
                                <FormInput type="password" placeholder="پسورد" id="pass" required onChange={e => handleSetFeild(e.target.value , 'pass')} />
                            </FormGroup>
                        </FormGroupContainer>


                        <FormGroupContainer>
                            <FormGroup>
                                <IconContainer>
                                    <MyEmailIcon/>
                                </IconContainer>
                                <FormInput type="email" placeholder="ایمیل" id="email" required onChange={e => handleSetFeild(e.target.value , 'email')} />
                            </FormGroup>

                            <FormGroup>
                                <IconContainer>
                                    <MyFullNameIcon/>
                                </IconContainer>
                                <FormInput type="text" placeholder="نام و نام خوانوادگی" id="fullName" required onChange={e => handleSetFeild(e.target.value , 'fullName')} />
                            </FormGroup>
                        </FormGroupContainer>

                        <FormGroupContainer>
                            <FormGroup>
                                <IconContainer>
                                    <MyAgeIcon/>
                                </IconContainer>
                                <FormInput type="number" min="0" placeholder="سن" id="age" required onChange={e => handleSetFeild(e.target.value , 'age')} />
                            </FormGroup>

                            <FormGroup>
                                <IconContainer>
                                    <MyGenderIcon/>
                                </IconContainer>
                                {/* <select name="cars" id="cars">
                                    <option value="volvo">زن</option>
                                    <option value="saab">مرد</option>
                                </select> */}
                                <MyDropDown handleOnChangeSelect={handleOnChangeSelect} />
                                {/* <FormInput type="text" placeholder="جنسیت" id="gender" required onChange={e => handleSetFeild(e.target.value , 'email')} /> */}
                            </FormGroup>
                        </FormGroupContainer>
                
                        <FormGroupBtn>
                            <Btn variant="contained" bgColor="#bf4f7b" color="#fff" onClick={e => submitRegister(e)}>
                            &rarr; ورود 
                            </Btn>
                        </FormGroupBtn>

                    </RegisterForm>
               
            </RegisterBox>
            <FooterRegister>
                <FooterRegisterText>
                    Built by <FooterRegisterLink href="#">Zahra Alipour</FooterRegisterLink>.
                    Copyright &copy; by Zahra Alipour
                </FooterRegisterText>
            </FooterRegister>
            {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            }
        </SectionRegister>
    )
}

export default RegisterPage;
// const mapStateToProps = (state)=>({
//     currentUser:state.user.currentUser
// })

// const mapDispatchToProps = (dispatch) => ({
//     setCurrentUser: (data) => dispatch(fetchUserStartAsync(data))
// });
// export default connect(mapStateToProps , mapDispatchToProps)(RegisterPage);


// class Login extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             UsernameLog:"",
//             PassLog:"",
//         };
//     }
    
//     submitLogin = (e)=>{
//         e.preventDefault();
//         if((this.state.UsernameLog !="" && this.state.UsernameLog.length >= 5 ) && (this.state.PassLog!="" && this.state.PassLog.length >= 5)){
//             const data = {
//                 username: this.state.UsernameLog,
//                 password:this.state.PassLog,
//             }
//             const {setCurrentUser} = this.props;
//             // console.log(data);
//             setCurrentUser(data);
//         }
//         else{
//             // const errorMessage="نام کاربری و رمز عبور باید ارای حداقل 5 کارکتر باشد";
//             alert("نام کاربری و رمز عبور باید دارای حداقل 5 کارکتر باشد")
//         }
//     }


//     handleUsername = (e)=>{
//         this.setState({UsernameLog: e.target.value});
//     }

//     handlePass = (e)=>{
//         this.setState({PassLog: e.target.value});
//     }

    
//     render(){

//         if(this.props.currentUser){
//             return <Redirect to={{
//                 pathname: '/'
//             }}/>
//         }

//         return(
//             <div>
//                 <div className="login">
//                     <div className="login__header">
//                         ورود
//                     </div>
//                     {/* <form className="needs-validation login__box" id="mtLoginForm">
//                         <div className="row login__row">
//                             <input className='login__input' type="text" name="username" placeholder="نام کاربری" required  minLength="5" value={this.state.UsernameLog} onChange={this.handleUsername} />
//                             <input className='login__input' type="password" name="password" placeholder="پسورد" required  minLength="5" value={this.state.PassLog} onChange={this.handlePass} />
//                         </div>
//                         <button className="login__btn" onClick={this.submitLogin.bind(this)}>ورود</button>
//                         <Link to='/ChangePass' className="login__link">فراموشی پسورد</Link>
//                     </form> */}
//                 </div>
//             </div>
                
//         )
//     }
// };


// const mapStateToProps=(state)=>({
//     currentUser:state.user.currentUser
// })

// const mapDispatchToProps = (dispatch) => ({
//     setCurrentUser: (data) => dispatch(fetchUserStartAsync(data))
// });
// export default connect(mapStateToProps , mapDispatchToProps)(Login);