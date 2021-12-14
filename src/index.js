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
    SchedulePage, ProfilePage, SettingsPage, MarksPage, ResetPassPage
} from "./Components/App/Pages";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/Utils/NotFound";
import CoursesPageTestMain from "./Components/Courses UI/CoursesPageTestMain";
import $api, {base_url} from "./Components/App/API";

export const regContext = React.createContext();

export default function App (){
    const [reg, setReg] =  useState(localStorage.getItem('isLog'));


    useEffect(()=>{
        localStorage.setItem('isLog',reg);
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

                        {/*Courses*/}

                        <Route path="/courses" exact element={<CoursesMainContent></CoursesMainContent>}/>
                        <Route path="/course" exact  element={<CourseDetailMain></CourseDetailMain>}/>
                        <Route path="/schedule" exact element={<SchedulePage></SchedulePage>}/>


                        {/*Auth*/}

                        <Route path="/login" exact element={<LoginPage></LoginPage>}/>
                        <Route path="/register" exact element={<RegisterPage></RegisterPage>}/>
                        <Route path="/recovery" exact element={<ResetPassPage></ResetPassPage>}/>

                        {/*Profile*/}

                        <Route path="/profile" exact element={<ProfilePage></ProfilePage>}/>
                        <Route path="/settings" exact element={<SettingsPage></SettingsPage>}/>
                        <Route path="/marks" exact element={<MarksPage></MarksPage>}/>
                        
                        <Route element={<NotFound></NotFound>}/>

                    </Routes>
                    <Footer></Footer>
                    </regContext.Provider>
                </BrowserRouter>
               

        );
    
}





ReactDOM.render(<App/>,document.getElementById('root'))
