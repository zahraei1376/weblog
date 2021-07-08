import React , {useState} from 'react';
import ManagerCategoryTableWeblog from './managerCategoryTableWeblog.component';
import CategoryDropDown from '../../Component/categoryDropDown/categoryDropDown.component';
import SelectCategoryComponent from '../../Component/selectCategory/selectCaterory.component';
import {CateroryWeblogContainer ,CategortyContainer} from './managerCategoryWeblog.styles';

const Items = [
    {id:'1' ,title:'خودرو'},
    {id:'2' ,title:'خودرو'},
    {id:'3' ,title:'خودرو'},
    {id:'5' ,title:'خودرو'},
    {id:'5' ,title:'خودرو'},
];

const ManagerCateroryWeblog = () =>{
    const [ParentCategoryId , setParentCategoryId] = useState('');
    return(
        <CateroryWeblogContainer>
            <CategortyContainer>
                <CategoryDropDown 
                    setParentCategoryId={setParentCategoryId}
                    Items={Items}
                />
                {/* {
                    Items && Items.length > 0 ?
                    Items.map((item ,index) => (
                        <SelectCategoryComponent 
                            key={index}
                            item={item}
                            setParentCategoryId={setParentCategoryId}
                            ParentCategoryId={ParentCategoryId}
                        />
                    ))
                    : ''
                } */}
            </CategortyContainer>

            {/* <SelectCategoryComponent 
                setParentCategoryId={setParentCategoryId}
                ParentCategoryId={ParentCategoryId}
            /> */}

            <ManagerCategoryTableWeblog
                ParentCategoryId={ParentCategoryId}
            />
        </CateroryWeblogContainer>
    )
};


export default ManagerCateroryWeblog;
///////