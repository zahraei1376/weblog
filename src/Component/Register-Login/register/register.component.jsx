import React , {useState , useEffect} from 'react';
import {IconContainer,MyLockOutlinedIcon,MyPersonOutlineIcon,MyGenderIcon,MyAgeIcon,MyEmailIcon,MyFullNameIcon,SectionRegister ,RegisterBox ,TitleRegister,RegisterFormContainer,
    RegisterForm ,FormGroupContainer,FormGroup,FormGroupBtn,FormInput,RegisterLink,FormLabel,RegisterDescContainer ,RegisterDesc ,FooterRegister,FooterRegisterText ,FooterRegisterLink} from './register.styles';
import {Title ,MarginBottomRightMedium ,Btn} from '../../../generalCss/generalCss.styles';
import MyDropDown from '../myDropDown.component';
import MySnackbar from '../../messageBox/messageBox.component';
import { useHistory } from "react-router-dom";
import MySpinner from '../../MySpinner/MySpinner.component';

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
    const [status,setStatus] = useState(0);
    const [loading,setLoading] = useState(false);
    /////////////////////////
    let history = useHistory();
    /////////////////////////

    const handleSetFeild = (val , param) =>{
        setFiels({...fiels, [param] : val});
    }


    const submitRegister = async(e)=>{
        e.preventDefault();
        setLoading(true);
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
                    setStatus('1')
                    setMessage('موفقیت آمیز بود');
                    setShowMessage(true);
                    setLoading(false);
                    setTimeout(()=>{
                        history.push('/');
                    },1000);
                }else{
                    setStatus('0')
                    setMessage(dataRes.Message)
                    setShowMessage(true);
                    setLoading(false);
                }

            })
            .catch(err => {
                setStatus('0')
                setMessage(err.Message)
                setShowMessage(true);
                setLoading(false);
            });
        }
        else{
            setStatus('0')
            setMessage('ابتدا مقادیر خواسته شده را پر کنید');
            setShowMessage(true);
            setLoading(false);
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
                                <MyDropDown handleOnChangeSelect={handleOnChangeSelect} />
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
            {
                loading ? <MySpinner/> : ''
            }
        </SectionRegister>
    )
}

export default RegisterPage;