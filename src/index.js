import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css"
import {
    LoginPage,
    RegisterPage,
    HomePage,
    CoursesMainContent,
    CourseDetailMain,
    SchedulePage, ConfirmEmailPage
} from "./Components/App/Pages";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/Utils/NotFound";
import CoursesPageTestMain from "./Components/Courses UI/CoursesPageTestMain";
import $api, {base_url} from "./Components/App/API";

export const regContext = React.createContext();


export default function App (){
    const [reg, setReg] =  useState('true');
    useEffect(()=>{
        console.log(reg)
        console.log("changing reg")
        setReg(localStorage.getItem('islog'));
    },[]);

    useEffect(()=>{
        localStorage.setItem('islog',reg);
        if(reg==="false"){
            console.log("hereeeeeeee")
            return <Navigate to="/login"/> 
        }
    },[reg]);


    console.log("hi from index");
        return (
            
                <BrowserRouter>
                    <regContext.Provider value={[reg,setReg]}>
                    <Header></Header>
                    
                    
                    <Routes>
                        <Route path='*' element={<HomePage></HomePage>} />
                        <Route path="/courses_test" exact element={<CoursesPageTestMain></CoursesPageTestMain>}/>
                        <Route path="/home" exact element={<HomePage></HomePage>}/>
                        <Route path="/courses" exact element={<CoursesMainContent></CoursesMainContent>}/>
                        <Route path="/course" exact  element={<CourseDetailMain></CourseDetailMain>}/>
                        <Route path="/register" exact element={<RegisterPage></RegisterPage>}>
                        </Route>
                        <Route path="/schedule" exact element={<SchedulePage></SchedulePage>}/>
                        <Route path="/login" exact element={<LoginPage></LoginPage>}/>
                        
                        <Route element={<NotFound></NotFound>}/>

                    </Routes>
                    <Footer></Footer>
                    </regContext.Provider>
                </BrowserRouter>
               

        );
    
}





ReactDOM.render(<App/>,document.getElementById('root'))
