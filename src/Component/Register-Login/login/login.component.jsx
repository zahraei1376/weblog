import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { fetchUserStartAsync } from '../../../redux/user/user.actions';
import { Redirect } from 'react-router-dom';
import {connect } from 'react-redux';
// //////////////////

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MySnackbar from '../../messageBox/messageBox.component';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import img from '../../../asset/img/back4.jpg';
// import './login.scss';
import {IconContainer,MyLockOutlinedIcon,MyPersonOutlineIcon,SectionLogin ,LoginBox ,TitleLogin,LoginFormContainer,
    LoginForm ,FormGroup,FormGroupBtn,FormInput,LoginLink,FormLabel,LoginDescContainer ,LoginDesc ,FooterLogin,FooterLoginText ,FooterLoginLink} from './login.styles';

import {Title ,MarginBottomRightMedium ,Btn} from '../../../sass/generalCss.styles';
const LoginPage = (props) =>{
    /////////////////////////
    const [fiels,setFiels] = useState({
        username:'',
        pass:'',
    });
    /////////////////////////
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] =useState(0);
    /////////////////////////
    const handleSetFeild = (val , param) =>{
        setFiels({...fiels, [param] : val});
    }
    /////////////////////////
    const submitLogin = async(e)=>{
        e.preventDefault();
        if(fiels.username !=""  && fiels.pass){
            const data = {
                username: fiels.username,
                password:fiels.pass,
            }

            await fetch("http://185.165.118.211:9074/api/v1/Users/Login", {
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
                    setMessage('وارد شدید');
                    setShowMessage(true);
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
            // const {setCurrentUser} = props;
            // // console.log(data);
            // setCurrentUser(data);
        }
        else{
            setStatus('0')
            setMessage('ابتدا مقادیر خواسته شده را پر کنید')
            setShowMessage(true);
        }
    }
    /////////////////////////
    return(
        <SectionLogin>
            <LoginBox>
                {/* <LoginFormContainer> */}
                    <LoginForm action="#">
                        {/* <MarginBottomRightMedium>
                            <Title color1="#fff" color2="#fff">
                                ورود به وبلاگ
                            </Title>
                        </MarginBottomRightMedium> */}
                        <FormGroup>
                            <FormInput type="text"  placeholder="نام کاربری" id="username" required onChange={e => handleSetFeild(e.target.value , 'username')} />
                            <IconContainer>
                                <MyPersonOutlineIcon/>
                            </IconContainer>
                            
                            {/* <FormLabel for="username">نام کاربری</FormLabel> */}
                        </FormGroup>

                        <FormGroup>
                            <FormInput type="password" placeholder="پسورد" id="pass" required onChange={e => handleSetFeild(e.target.value , 'pass')} />
                            <IconContainer>
                                <MyLockOutlinedIcon/>
                            </IconContainer>
                            
                            {/* <FormLabel for="pass" >پسورد</FormLabel> */}
                        </FormGroup>

                        {/* <FormGroup>
                            <FormInput type="text"  placeholder="Full name" id="name" required />
                            <FormLabel for="name">Full name</FormLabel>
                        </FormGroup>

                        <FormGroup>
                            <FormInput type="email" placeholder="Email address" id="email" required />
                            <FormLabel for="email" >Email address</FormLabel>
                        </FormGroup> */}

                        {/* <div class="form__group u-margin-bottom-medium">
                            <div class="form__radio-group">
                                <input type="radio" class="form__radio-input" id="small" name="size" />
                                <label for="small" class="form__radio-label">
                                    <span class="form__radio-button"></span>
                                    Small tour group
                                </label>
                            </div>

                            <div class="form__radio-group">
                                <input type="radio" class="form__radio-input" id="large" name="size" />
                                <label for="large" class="form__radio-label" >
                                    <span class="form__radio-button"></span>
                                    Large tour group
                                </label>
                            </div>
                        </div> */}

                        <FormGroupBtn>
                        <Btn variant="contained" bgColor="#bf4f7b" color="#fff" onClick={e => submitLogin(e)}>
                        &rarr; ورود 
                        </Btn>
                            {/* <button class="btn btn--green">Next step &rarr;</button> */}
                        </FormGroupBtn>
                        <LoginLink to='/register' >برای ثبت نام کلیک کنید</LoginLink>
                    </LoginForm>
                    

                    {/* <LoginDescContainer>
                        <MarginBottomRightMedium>
                            <Title>
                                ورود به وبلاگ
                            </Title>
                            <Link to='/ChangePass' className="login__link">ثبت نام</Link>
                        </MarginBottomRightMedium>
                        
                        
                    </LoginDescContainer> */}
                {/* </LoginFormContainer> */}
               
            </LoginBox>
            <FooterLogin>
                <FooterLoginText>
                    Built by <FooterLoginLink href="#">Zahra Alipour</FooterLoginLink>.
                    Copyright &copy; by Zahra Alipour
                </FooterLoginText>
            </FooterLogin>
            {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            }
        </SectionLogin>
    )
    /////////////////////////
}

export default LoginPage;

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