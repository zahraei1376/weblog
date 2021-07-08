import React , {useEffect,useState} from 'react';
import ManagerTextTableWeblog from './managerTextTableWeblog.component';
import CategoryDropDownForText from '../../Component/categoryDropDown/categoryDropDownForText.component';
import {TextWeblogContainer ,TextContainer} from './managerTextWeblog.styles';
import { connect } from 'react-redux';
import MySnackbar from '../../Component/messageBox/messageBox.component';
/////////////////////////////////////////
const ManagerTextWeblog = ({currentUser}) =>{
    const [categoryId , setCategoryId] = useState('');
    const [items,setItems] = useState([]);
    //////////////////////////
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] = useState('');
    const [status,setStatus] = useState(0);
    ////////////////////////////////////////////////

    useEffect(()=>{
        fetch('http://185.165.118.211:9074/api/v1/Categories', {
            headers: {
                'Authorization': currentUser ? `Bearer ${currentUser} `: '',
                'Content-Type': 'application/json'
                },
            method:"GET",
            // body: JSON.stringify(data)
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{ 
            console.log("dataResdataRes",dataRes);
            if(dataRes.isSuccess){
                // setStatus('0')
                // setMessage('وارد شدید');
                // setShowMessage(true);
                setItems(dataRes.data.results);
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
    },[]);

    return(
        <TextWeblogContainer>
            <TextContainer>
                <CategoryDropDownForText 
                    setCategoryId={setCategoryId}
                    Items={items}
                />
            </TextContainer>

            <ManagerTextTableWeblog
                categoryId={categoryId}
                // ItemsMaterial={ItemsMaterial}
            />
            {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            }
        </TextWeblogContainer>
    )
};


// export default ManagerTextWeblog;
const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(ManagerTextWeblog);
/////////////////////////////////////////