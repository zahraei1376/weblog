import React, { useState ,useEffect} from 'react';
import MaterialTable from 'material-table';
import { IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Grid } from '@material-ui/core';
//////////////////////////////////////////
import MySnackbar from '../../Component/messageBox/messageBox.component';
///////////////////////////////////////query
// import { useMutation} from 'react-apollo';
// import {UPDATE_EXAM_PARENT, DELETE_EXAM_PARENT} from '../../../graphql/resolver';
//////////////////
import { useHistory } from "react-router-dom";
////////////////////////////////////////
const ManagerCategoryTableWeblog = ({ getQuestionsId,DataTable , refetchFunc }) => {
  ///////////////////////////////////////////////////////
  // const [updateExamParent] = useMutation(UPDATE_EXAM_PARENT);
  // const [deleteExamParent] = useMutation(DELETE_EXAM_PARENT);
  /////////////////////////
  let history = useHistory();
  //////////////////////////
  const [showMessage,setShowMessage] = useState(false);
  const [message,setMessage] =useState('');
  const [status,setStatus] =useState(0);
  //////////////////////////
  const showTimeToTable = (start,end) => {
      if(start == end){
        return true;
      }
      return false;
  }
  ///////////////////////////////////////////////   
  const [columns, setColumns] = React.useState([
    {
      title: 'پایه',
      field: 'exam_level',
      // lookup: ['1','2','3'],
      // lookup: [1,2,3],
      lookup:{
        '1':'1',
        '2' :'2',
        '3':'3',
      },
      // appContext.initConfig.newLevel,
      render: data => {
        return (<p style={{
          fontFamily: 'Bnazanin',
          fontSize: 16,
          textAlign: 'center',
          width: '50px',
          fontSize:'1.5rem',
          textAlign:'center',
        }}>
          {parseInt(data.exam_level) === parseInt(data.exam_level, 10)
            ? 
            data.exam_level
            // appContext.initConfig.newLevel[data.exam_level]
            : data.exam_level}
        </p>)
      },
    },
    {
      title: 'کلاس',
      field: 'exam_className',
      // lookup: ['1','2','3'],
      // lookup: [1,2,3],
      lookup:{
        '1':'1',
        '2' :'2',
        '3':'3',
      },
      // appContext.initConfig.newClassName,
      render: data => {
        return (
          <p
            style={{ fontFamily: 'Bnazanin', textAlign: 'center', width: '50px',fontSize:'1.5rem',
            textAlign:'center', }}>
            {parseInt(data.exam_className) ===
              parseInt(data.exam_className, 10)
              ? 
              data.exam_className
              // appContext.initConfig.newClassName[data.exam_className]
              : data.exam_className}
          </p>)
      },
    },
    {
      title: 'موضوع', field: 'examParent_topic',
      // lookup: appContext.initConfig.newCourseName,
      render: data => {
        return (
          <p style={{ fontFamily: 'Bnazanin', textAlign: 'center', width: '15rem',fontSize:'1.5rem',
          textAlign:'center',whiteSpace: 'pre-wrap', wordWrap: 'break-word', }}>
           {data.examParent_topic}
          </p>)
      },
      editComponent: (props) => (
        <div style={{width:'14rem',textAlign:'center'}}>
          <textarea
          rows="6" cols="50"
            style={{
              width: '13rem',
              // border: "2px solid red",
              borderRadius: "4px",
              textAlign: 'center',
              whiteSpace: 'pre-wrap',
               wordWrap: 'break-word',
               padding:'5px',
            }}
          type="text"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
        </div>
      ),
    },
  ]);
  ///////////////////////////////////////////////////
  return (
    <Grid dir="rtl" xs={12} sm={12} md={11} style={{margin:'0 auto',width:'90%'}}>
      <MaterialTable
        title="امتحانات"
        columns={columns}
        data={DataTable}
        localization={{
          header: {
              actions: 'ویرایش'
          },
        }}
        options={{
          toolbar: false,
          showTitle: false,
          search: false,
          headerStyle: {
            // background:'linear-gradient(to bottom ,#fc8d6d,#bf4f7b,#242d64,#191e3e)' ,
            background:'linear-gradient(to bottom ,#bf4f7b,#242d64,#191e3e)' ,
            fontFamily: 'BTitrBold',
            textAlign: 'center',
            color: '#fff',
            lineHeight:'20px',
            zIndex: 0,
            fontSize: '12px',
          },
          rowStyle: rowData => ({
            backgroundColor: rowData.tableData.id % 2 === 0 ? '#EEE' : '#FFF',
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
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve ,reject) => {
              setTimeout(async() => {
                if (oldData) {
                  // updateExamParent({ variables: { 
                  //   userName:"211",
                  //   password: "211",
                  //   id: oldData.ParentId,
                  //   groupId: oldData.groupId,
                  //   course: newData.exam_courseName,
                  //   level: newData.exam_level,
                  //   class: newData.exam_className,
                  //   examParent_start:myExamParent_start,
                  //   examParent_end: myExamParent_end,
                  //   examParent_duration: myDuration,
                  //   examParent_start_date: myExamParent_start_date,
                  //   examParent_stop_date:  myExamParent_stop_date,
                  //   // examParent_start_date: newData.examParent_start_date,
                  //   // examParent_stop_date: newData.examParent_stop_date,
                  //   // examParent_start: newData.examParent_start,
                  //   // examParent_end: newData.examParent_end,
                  //   // examParent_duration: convertMinutesToMyFormat(newData.examParent_duration),
                  //   examParent_maxScore: newData.examParent_maxScore != '-' ? newData.examParent_maxScore : "",
                  //   examParent_method: newData.examParent_method,
                  //   examParent_topic: newData.examParent_topic != '-' ? newData.examParent_topic : "",
                  //   // examParent_random: newData.examParent_random,
                  //   // examParent_backward: newData.examParent_backward,
                  //   examParent_random: newData.examParent_random == 'true' ? true : false,
                  //   examParent_backward: newData.examParent_backward == 'true' ? true : false,
                  //   examChild_falseCoefficient: newData.examChild_falseCoefficient != '-' ? newData.examChild_falseCoefficient : "",
                  //   examChild_courseCoefficient: newData.examChild_courseCoefficient != '-' ? newData.examChild_courseCoefficient : "",
                  //  //  examChild_pdf: fileName ? `https://s3.ir-thr-at1.arvanstorage.com/raysa/${fileName}` : oldData.examChild_pdf != '-' ? oldData.examChild_pdf : "",
                  //   examChild_pdf: fileName ? fileName : oldData.examChild_pdf != '-' ? oldData.examChild_pdf : "",
                  //   examChild_id: oldData.id,
                  // }
                  // }).then(res=>{
                  //   // if(res.data && res.data.updateExamParentAndChild){
                  //   //   resolve();
                  //   //   setMessage('ثبت شد');
                  //   //   setStatus('1');
                  //   //   setShowMessage(!showMessage);
                  //   //   refetchFunc();
                  //   // }else{
                  //   //   reject();
                  //   //   setStatus('0')
                  //   //   setMessage('ثبت نشد')
                  //   //   setShowMessage(!showMessage);
                  //   // }
                  //   ///////////////////////////////
                  //   if(!res.data){
                  //     // reject();
                  //     setStatus('0')
                  //     setMessage('طراح امتحان میتواند امتحان را ویرایش کند');
                  //     setShowMessage(!showMessage);
                  //     reject();
                  //     // setTimeout(()=>{
                  //     //   refetchFunc();
                  //     // },1000);
                  //     // refetchFunc();
                  //   }else if(res.data && !res.data.updateExamParentAndChild){
                  //     // reject();
                  //     setStatus('0')
                  //     setMessage('ثبت نشد')
                  //     setShowMessage(!showMessage);
                  //     reject();
                  //     // setTimeout(()=>{
                  //     //   refetchFunc();
                  //     // },1000)
                  //   }else if(res.data && res.data.updateExamParentAndChild){
                  //     // resolve();
                  //     setMessage('ثبت شد');
                  //     setStatus('1');
                  //     setShowMessage(!showMessage);
                  //     resolve();
                  //     refetchFunc();
                  //     // reject();
                  //     // refetchFunc();
                  //     // setTimeout(()=>{
                  //     //   refetchFunc();
                  //     // },1000)
                  //   }else{
                  //     // reject();
                  //     setStatus('0')
                  //     setMessage('ثبت نشد')
                  //     setShowMessage(!showMessage);
                  //     reject();
                  //     // setTimeout(()=>{
                  //     //   refetchFunc();
                  //     // },1000)
                  //   }
                  // })
                }
              },600);
              /////////////////////////////////////////////////
            }),
          onRowDelete: oldData =>
            new Promise((resolve ,reject) => {
              setTimeout(async() => {
                // await deleteExamParent({ variables: { 
                //   userName: "211", 
                //   password: "211", 
                //   id: oldData.id,
                // }
                // }).then(res=>{
                //   if(!res.data){
                //     reject();
                //     setStatus('0')
                //     setMessage('طراح امتحان میتواند امتحان را حذف کند');
                //     setShowMessage(!showMessage);
                //   }else if(res.data && !res.data.deleteExamChild){
                //     reject();
                //     setStatus('0')
                //     setMessage('ثبت نشد')
                //     setShowMessage(!showMessage);
                //   }else if(res.data && res.data.deleteExamChild){
                //     resolve();
                //     setMessage('ثبت شد');
                //     setStatus('1');
                //     setShowMessage(!showMessage);
                //     refetchFunc();
                //   }else{
                //     reject();
                //     setStatus('0')
                //     setMessage('ثبت نشد')
                //     setShowMessage(!showMessage);
                //   }
                // })
                
              }, 600);
            }),
        }}
      />
      {
        showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
      }
    </Grid>
  );
};
export default React.memo(ManagerCategoryTableWeblog);
