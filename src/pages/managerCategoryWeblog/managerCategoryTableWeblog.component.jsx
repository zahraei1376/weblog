import React, { useState ,useEffect} from 'react';
import MaterialTable from 'material-table';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
//////////////////////////////////////////
import MySnackbar from '../../Component/messageBox/messageBox.component';
///////////////////////////////////////
import { useHistory } from "react-router-dom";
import MySpinner from '../../Component/MySpinner/MySpinner.component';
////////////////////////////////////////
import {AddRowBtn} from './managerCategoryWeblog.styles';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
////////////////////////////////////////
const ManagerCategoryTableWeblog = ({ currentUser,ParentCategoryId , ItemsMaterial , }) => {
  /////////////////////////
  let history = useHistory();
  //////////////////////////
  const [dataTable,setDataTable] = useState([]);
  //////////////////////////
  const [showMessage,setShowMessage] = useState(false);
  const [message,setMessage] = useState('');
  const [status,setStatus] = useState(0);
  const [loading,setLoading] = useState(0);
  ////////////////////////////////////////////////
  useEffect(()=>{
    //////////////////////////////////////
    setLoading(true);
    console.log('currentUser',currentUser);
    const data = {
    }
    fetch("http://185.165.118.211:9074/api/v1/Categories", {
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
        console.log('dataRes',dataRes);
        if(dataRes.isSuccess){
          if(dataRes.data){
            setDataTable(dataRes.data.results);
            
          }
          
        }else{
            setStatus('0')
            setMessage(dataRes.message)
            setShowMessage(true);
        }

        setLoading(false);

    })
    .catch(err => {
        setStatus('0')
        setMessage(err.Message)
        setShowMessage(true);
        setLoading(false);
    });
  },[])
  ///////////////////////////////////////////////   
  const [columns, setColumns] = useState([
    {
      title: 'شماره' , field: 'questionID', textAlign: 'center',
      // editable: 'never',
       render : rowData => rowData && (rowData.tableData.id + 1),
      
    },
    {
      title: 'نام دسته',
      field: 'name',
      render: data => {
        return (<p style={{
          fontFamily: 'Bnazanin',
          textAlign: 'center',
          width: '100%',
          fontSize:'1.5rem',
          textAlign:'center',
        }}>
          {data.name}
        </p>)
      },
    },
    {
      title: 'نام سر دسته',
      field: 'parentCategoryName',
      lookup:ItemsMaterial,
      render: data => {
        return (
          <div style={{ display:'flex',justifyContent:'center', textAlign: 'center', width: '100%', }}>
            <p
              style={{ display:'flex',justifyContent:'center', fontFamily: 'Bnazanin', textAlign: 'center',fontSize:'1.5rem', }}>
              {data.parentCategoryName}
            </p>
          </div>)
      },
    },
  ]);
  ///////////////////////////////////////////////////
  const sendDataToServer = async(data,url , method) =>{
    await fetch(url, {
        headers: {
          'Authorization': currentUser ? `Bearer ${currentUser} `: '',
            'Content-Type': 'application/json'
            },
        method: method,
        body: JSON.stringify(data)
    })
    .then((response)=>{ 
        return response.json();   
    })
    .then((dataRes)=>{ 
        console.log(dataRes);
        if(dataRes.isSuccess){
            setStatus('1')
            setMessage('انجام شد');
            setShowMessage(true);
            return true;
        }else{
            setStatus('0')
            setMessage(dataRes.Message)
            setShowMessage(true);
            return false;
        }

    })
    .catch(err => {
        setStatus('0')
        setMessage(err.Message)
        setShowMessage(true);
        return false;
    });

  }
  //////////////////////////////////////////////////
  const handleAddRow = () =>{
    document.querySelector("[data-mycustomid='add-icon-handler']").parentNode.click();
  }
  ///////////////////////////////////////////////////
  return (
    <Grid dir="rtl" item xs={12} sm={12} md={11} 
    style={{margin:'0 auto',width:'90%',
    position:'relative',}}>
      {
          loading ? <MySpinner/> : ''
      }
      <div style={{width:'100%', position:'relative',}}>
      <AddRowBtn onClick={handleAddRow}>
        <AddIcon style={{fontSize:'3rem'}} />
      </AddRowBtn>
      <MaterialTable
        title="دسته بندی ها"
        columns={columns}
        data={dataTable}
        icons={{
          Add: props => <Icon data-mycustomid={"add-icon-handler"} />
        }}
        localization={{
          header: {
              actions: 'ویرایش'
          },
        }}
        options={{
          headerStyle: {
            // background:'linear-gradient(to bottom ,#242d64,#242d64)' ,
            background:'#EEE',
            fontFamily: 'BTitrBold',
            textAlign: 'center',
            color: '#000',
            zIndex: 0,
            fontSize: '12px',
            width:20,
            maxWidth: 20
          },
          rowStyle: rowData => ({
            backgroundColor: rowData.tableData.id % 2 === 0 ? '#FFF' : '#EEE',
            fontFamily: 'Bnazanin',
            fontSize: 24,
            marginTop: '2px',
            marginTop: '2px',
            overflowY:'scroll',
          }),
          cellStyle: {
            fontFamily: 'Bnazanin',
            fontSize: 16,
            textAlign: 'center',
            width: 20,
            maxWidth: 20
          },
        }}

        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(async() => {
                  // if(ParentCategoryId && ParentCategoryId.id && ParentCategoryId.name){
                    console.log('datadata' ,JSON.parse(newData.parentCategoryName));  
                  const data = {
                      name: newData.name,
                      parentCategoryId: JSON.parse(newData.parentCategoryName).id,
                      parentCategoryName: JSON.parse(newData.parentCategoryName).name,
                      // parentCategoryName: ParentCategoryId.name,
                      id:0,
                    }

                  var promise = new Promise( (resolve2, reject2) => {
                      var callBack = sendDataToServer(data , 'http://185.165.118.211:9074/api/v1/Categories' ,"POST");
                      if(callBack){
                        resolve2();
                      }else{
                        reject2();
                      }
                  });
             
                   promise.then( callBack => {
                      resolve();
                   }).catch(err =>{
                      reject();
                   });
                    // console.log('datadata' ,data);
                    // var callBack = await sendDataToServer(data , 'http://185.165.118.211:9074/api/v1/Categories' ,"POST");
                    // console.log('callBack',callBack);
                    // if(callBack){
                    //   resolve();
                    // }else{
                    //   reject();
                    // }

                    // resolve();
                  // }
                  // else{
                  //   setStatus('0')
                  //   setMessage('ابتدا سر دسته را مشخص کنید');
                  //   setShowMessage(true);
                  // reject();
                  // }
                    

                    
                }, 1000);
            }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(async() => {
                    // const data = {
                    //   name: newData.name,
                    //   parentCategoryId: JSON.parse(newData.parentCategoryName).id,
                    //   parentCategoryName: JSON.parse(newData.parentCategoryName).name,
                    //   id:oldData.id,
                    // }
                    // var callBack = await sendDataToServer(data , "http://185.165.118.211:9074/api/v1/Categories", "PUT");
                    // if(callBack){
                    //   resolve();
                    // }else{
                    //   reject();
                    // }

                    resolve();
                }, 1000);
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                setTimeout(async() => {
                  
                    // var callBack = await sendDataToServer(data , `http://185.165.118.211:9074/api/v1/Categories/${oldData.id}`, "DELETE");
                    // if(callBack){
                    //   resolve();
                    // }else{
                    //   reject();
                    // }

                    resolve();
                }, 1000);
            })
        }}
      />
      </div>
      {
        showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
      }
      {/* {
          loading ? <MySpinner/> : ''
      } */}
    </Grid>
  );
};
// export default React.memo(ManagerCategoryTableWeblog);
const mapStateToProps = state => ({
  currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(ManagerCategoryTableWeblog);
