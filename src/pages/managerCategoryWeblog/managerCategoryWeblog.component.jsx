import React , {useState} from 'react';
import ManagerCategoryTableWeblog from './managerCategoryTableWeblog.component';
import CategoryDropDown from '../../Component/categoryDropDown/categoryDropDown.component';
import SelectCategoryComponent from '../../Component/selectCategory/selectCaterory.component';
import {CateroryWeblogContainer ,CategortyContainer} from './managerCategoryWeblog.styles';

const Items = [
    {id:'1' ,title:'خودرو'},
    {id:'2' ,title:'لوازم منزل'},
    {id:'3' ,title:'لوازم آرایشی'},
    {id:'5' ,title:'محصولات غذایی'},
];
/////////////////////////////////////////
// const ItemsMaterial = {
//     '1':'خودرو',
//     '2' :'لوازم منزل',
//     '3':'لوازم آرایشی',
//     '4':'محصولات غذایی',
// }


const ItemsMaterial = {
    '{ "id":"null" , "name":"دسته بندی اولیه 1" }' :'دسته بندی اولیه 1',
    '{ "id":"304" , "name":"دسته بندی اولیه 2" }' :'دسته بندی اولیه 2',
    '{ "id":"342" , "name":"دسته بندی اولیه 3" }' :'دسته بندی اولیه 3',
    // '{id: 1, name: "خودرو"}':'خودرو',
    // '{ id: 2, name: "لوازم منزل" }' :'لوازم منزل',
    // '{ id: 3, name: "لوازم آرایشی" }':'لوازم آرایشی',
    // '{ id: 4, name: "محصولات غذایی" }':'محصولات غذایی',
}



// const ItemsMaterial = [
//     { id: 1, name: "خودرو" },
//     { id: 2, name: "لوازم منزل" },
//     { id: 3, name: "لوازم آرایشی" },
//     { id: 4, name: "محصولات غذایی" }
// ];
/////////////////////////////////////////
const ManagerCateroryWeblog = () =>{
    const [ParentCategoryId , setParentCategoryId] = useState('');
    return(
        <CateroryWeblogContainer>
            {/* <CategortyContainer>
                <CategoryDropDown 
                    setParentCategoryId={setParentCategoryId}
                    Items={Items}
                />
            </CategortyContainer> */}
            <ManagerCategoryTableWeblog
                // ParentCategoryId={ParentCategoryId}
                ItemsMaterial={ItemsMaterial}
            />
        </CateroryWeblogContainer>
    )
};


export default ManagerCateroryWeblog;
///////