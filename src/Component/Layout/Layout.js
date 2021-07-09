import React ,{lazy ,Suspense} from 'react';
import  {Switch,Route ,BrowserRouter as Router,} from 'react-router-dom';
// //////////////////////////////////////
import MySpinner from '../MySpinner/MySpinner.component';
// //////////////////////////////////////
import MyNavbar from '../Menu/Navbar.component';
const LoginPage = lazy( () => import('../Register-Login/login/login.component'));
const RegisterPage = lazy( () => import('../Register-Login/register/register.component'));
const GenericNotFound = lazy( () => import('../notFound/notFound.component'));
const ManagerCateroryWeblog = lazy( () => import('../../pages/managerCategoryWeblog/managerCategoryWeblog.component'));
const ManagerTextWeblog = lazy( () => import('../../pages/managerTextWeblog/managerTextWeblog.component'));
// /////////////////////////////////////////////////////
const Layout = () => (
    <div>
        <MyNavbar/>
        <Router>
            <Switch>
                <Suspense fallback={<MySpinner/>}>
                    <Route exact path="/" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route exact path="/managerCateroryWeblog"  component={ManagerCateroryWeblog}/>
                    <Route exact path="/managerTextWeblog" component={ManagerTextWeblog}/>
                    {/* <Redirect to="/404" /> */}
                    {/* <Route component={GenericNotFound} /> */}
                </Suspense>
            </Switch>
        </Router>
    </div>
    
    )
export  default Layout;