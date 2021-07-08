import React ,{lazy ,Suspense} from 'react';
import  {Switch,Route} from 'react-router-dom';
// //////////////////////////////////////
import Spinner from '../UI/spinner/spinner.jsx';
// //////////////////////////////////////
import MyNavbar from '../Menu/Navbar.component';
// import RegLog from '../Register-Login/Register-Login';
// import Teachers from '../Teachers/Teachers';
// import MainPage from '../MainPage/MainPage';
// import Profile from '../Profile/Profile';
// import ChangePass from '../Profile/ForgotPassword/changePassword';
// import ChangeProfile from '../Profile/changeProfile/changeProfile';
// import NewTeacher from '../NewTeacher/NewTeacher';
// import getCourses from '../getCourses/getCourses';
// import UploadFile from '../UploadFile/UploadFile';
// import GetFilePage from '../getFilesPage/getFilesPage';
// import AdminPanel from '../Admin/AdminPanel/admin';
// /////////////////////////////////////////////////////
// const Menu = lazy(() => import('../Menu/Menu'));
// const RegLog = lazy( ()=> import('../Register-Login/Register-Login'));
const LoginPage = lazy( () => import('../Register-Login/login/login.component'));
const RegisterPage = lazy( () => import('../Register-Login/register/register.component'));
const GenericNotFound = lazy( () => import('../notFound/notFound.component'));
const ManagerCateroryWeblog = lazy( () => import('../../pages/managerCategoryWeblog/managerCategoryWeblog.component'));
const MainPage = lazy( ()=> import('../MainPage/MainPage'));
const Profile = lazy(() => import('../Profile/Profile'));
const ChangePass = lazy( ()=> import('../Profile/ForgotPassword/changePassword'));
const ChangeProfile = lazy( ()=> import('../Profile/changeProfile/changeProfile'));
const NewTeacher = lazy( ()=> import('../NewTeacher/NewTeacher'));
const getCourses = lazy(() => import('../getCourses/getCourses'));
const UploadFile = lazy( ()=> import('../UploadFile/UploadFile'));
const GetFilePage = lazy( ()=> import('../getFilesPage/getFilesPage'));
const AdminPanel = lazy( ()=> import('../Admin/AdminPanel/admin'));
// /////////////////////////////////////////////////////
const Layout = () => (
    <div>
        <MyNavbar/>
        <Switch>
            <Suspense fallback={<Spinner/>}>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/register" exact component={RegisterPage}/>
                <Route path="/managerCateroryWeblog" exact component={ManagerCateroryWeblog}/>
                <Route path="*" component={GenericNotFound} />
                {/* <Redirect to="/404" /> */}
                {/* <Route path="/" exact component = {MainPage}/>
                <Route path="/ShowTeacher" exact component={Teachers}/>
                <Route path="/RegLog" exact component={RegLog}/>
                <Route path="/Profile" exact component={Profile}/>
                <Route path="/ChangePass" exact component={ChangePass}/>
                <Route path="/ChangePrpfile" exact component={ChangeProfile}/>
                <Route path="/NewTeacher" exact component={NewTeacher}/>
                <Route path="/getCourses" exact component={getCourses}/>
                <Route path="/UploadFile" exact component={UploadFile}/>
                <Route path="/AdminPanel" exact component={AdminPanel}/>
                <Route path="/getFilePage" exact component={GetFilePage}/> */}
                {/* <Route 
                    path="/getFilePage" 
                    render={(props) => <GetFilePage {...props} CourseName={props.CourseName}/>} 
                /> */}
            </Suspense>
        </Switch>
    </div>
    
    )
export  default Layout;