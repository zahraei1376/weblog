import React, { useState ,useEffect} from 'react';
import MaterialTable from 'material-table';
import { createMuiTheme, IconButton, MuiThemeProvider } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
//////////////////////////////////////////
import MySnackbar from '../../Component/messageBox/messageBox.component';
import {AddRowBtn} from './managerTextWeblog.styles';
import AddIcon from '@material-ui/icons/Add';
///////////////////////////////////////query
// import { useMutation} from 'react-apollo';
// import {UPDATE_EXAM_PARENT, DELETE_EXAM_PARENT} from '../../../graphql/resolver';
//////////////////
import { useHistory } from "react-router-dom";
import MySpinner from '../../Component/MySpinner/MySpinner.component';
////////////////////////////////////////
const ManagerTextTableWeblog = ({ currentUser,categoryId , ItemsMaterial , }) => {
  ///////////////////////////////////////////////////////
  // const [updateExamParent] = useMutation(UPDATE_EXAM_PARENT);
  // const [deleteExamParent] = useMutation(DELETE_EXAM_PARENT);
  /////////////////////////
  let history = useHistory();
  //////////////////////////
  const [dataTable,setDataTable] = useState([]);
  //////////////////////////
  const [showMessage,setShowMessage] = useState(false);
  const [message,setMessage] = useState('');
  const [status,setStatus] = useState(0);
  const [loading,setLoading] = useState(false);
  ////////////////////////////////////////////////
  useEffect(()=>{
    refreshData();
  },[categoryId])
  ///////////////////////////////////////////////   
  const refreshData = () =>{
    setLoading(true);
    fetch(`http://185.165.118.211:9074/api/v1/Posts`, {
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
        console.log(dataRes);
        if(dataRes.isSuccess){
            // setStatus('0')
            // setMessage('وارد شدید');
            // setShowMessage(true);
            var getData = dataRes.data.results;
            var myData= [];
            for (let index = 0; index < getData.length; index++) {
              console.log('getData[index].categoryId',getData[index].categoryId);
              console.log('categoryId',categoryId);
                if(getData[index].categoryId == categoryId){
                  myData.push(getData[index])
                }
            }
            setDataTable(myData);
            setLoading(false);
        }else{
            setStatus('0')
            setMessage(dataRes.Message)
            setShowMessage(true);
            setLoading(false);
        }

    })
    .catch(err => {
        setStatus('0')
        setMessage(err.message)
        setShowMessage(true);
        setLoading(false);
    });
  }
  ///////////////////////////////////////////////
  const themeTable = createMuiTheme({
    overrides: {
      MuiTableCell: {
        root: {
          textAlign: 'center !important',
        }
      },
      MuiTableCellBody:{
        textAlign: 'center !important',
      }
    }
  });
  /////////////////////////////////////////////////
  const [columns, setColumns] = useState([
    {
      title: 'شماره' , field: 'questionID', textAlign: 'center',
       render : rowData => rowData && (rowData.tableData.id + 1),
      // editable: 'never'
    },
    {
      title: 'عنوان',
      field: 'title',
      render: data => {
        return (<p style={{
          fontFamily: 'Bnazanin',
        //   fontSize: 16,
          textAlign: 'center',
          width: '100%',
          fontSize:'1.5rem',
          textAlign:'center',
        }}>
          {data.title}
        </p>)
      },
    },
    {
      title: 'توضیحات',
      field: 'description',
      render: data => {
        return (<p style={{
          fontFamily: 'Bnazanin',
        //   fontSize: 16,
          textAlign: 'center',
          width: '100%',
          fontSize:'1.5rem',
          textAlign:'center',
        }}>
          {data.description}
        </p>)
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
    <Grid dir="rtl" item xs={12} sm={12} md={11} style={{margin:'0 auto',width:'90%',position:'relative'}}>
      {
          loading ? <MySpinner/> : ''
      }
      <div style={{width:'100%', position:'relative',}}>
        <MuiThemeProvider theme={themeTable}>
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
            // toolbar: false,
            showTitle: false,
            // search: false,
            headerStyle: {
              // background:'linear-gradient(to bottom ,#fc8d6d,#bf4f7b,#242d64,#191e3e)' ,
              // background:'linear-gradient(to bottom ,#242d64,#242d64)' 
              background:'#EEE',
              fontFamily: 'BTitrBold',
              textAlign: 'center',
              color: '#000',
              lineHeight:'20px',
              zIndex: 0,
              fontSize: '12px',
            },
            rowStyle: rowData => ({
              backgroundColor: rowData.tableData.id % 2 === 0 ? '#FFF' : '#EEE',
              fontFamily: 'Bnazanin',
              fontSize: 24,
              marginTop: '2px',
              marginTop: '2px',
            }),
            cellStyle: {
              fontFamily: 'Bnazanin',
              fontSize: 16,
              textAlign: 'center',
            },
            
          }}

          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                  setTimeout(async() => {
                    if(categoryId){
                      const data = {
                        title: newData.title,
                        description: newData.description,
                        categoryId: categoryId,
                        authorId: 0,
                        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                      }
                      var callBack = await sendDataToServer(data , "http://185.165.118.211:9074/api/v1/Posts" ,"POST");
                      if(callBack){
                        resolve();
                      }else{
                        reject();
                      }
                    }else{
                      setStatus('0')
                      setMessage('ابتدا دسته را مشخص کنید');
                      setShowMessage(true);
                      reject();
                    }
                      

                      
                  }, 1000);
              }),
            // onRowUpdate: (newData, oldData) =>
            //     new Promise((resolve, reject) => {
            //         setTimeout(async() => {
            //           // if(categoryId){
            //           //   const data = {
            //           //     title: newData.title,
            //           //     description: newData.description,
            //           //     categoryId: categoryId,
            //           //     authorId: 0,
            //           //     id: oldData.id,
            //           //   }
            //           //   var callBack = await sendDataToServer(data , `http://185.165.118.211:9074/api/v1/Posts?id=${oldData.id}` ,"PUT");
            //           //   if(callBack){
            //           //     resolve();
            //           //     // refreshData();
            //           //   }else{
            //           //     reject();
            //           //   }
            //           // }else{
            //           //   setStatus('0')
            //           //   setMessage('ابتدا دسته را مشخص کنید');
            //           //   setShowMessage(true);
            //           //   reject();
            //           // }
                      
            //         }, 1000);
            //     }),
            // onRowDelete: oldData =>
            //     new Promise((resolve, reject) => {
            //         setTimeout(async() => {
            //             // const data = {
                          
            //             // }
            //             // var callBack = await sendDataToServer(data , `http://185.165.118.211:9074/api/v1/Posts/${oldData.id}`, "DELETE");
            //             // if(callBack){
            //             //   resolve();
            //             //   refreshData();
            //             // }else{
            //             //   reject();
            //             // }

            //             // resolve();
            //         }, 1000);
            //     })
          }}
        />
      </MuiThemeProvider>
      </div>
      {
        showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
      }
      
    </Grid>
  );
};
// export default React.memo(ManagerTextTableWeblog);
const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(ManagerTextTableWeblog);
