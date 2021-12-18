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
    SchedulePage, CreateCoursePage 
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
    const [status, setStatus] = useState(localStorage.getItem('isTeacher'));



  
    useEffect(()=>{
        localStorage.setItem('isLog',reg);
    },[reg]);
    
    useEffect(()=>{
       
        localStorage.setItem('isTeacher',status);
    },[status]);
    
    const privateComponents = {components:[
    {path:"/courses",el:<CoursesMainContent/>},
    {path:"/course",el:<CourseDetailMain/>},
    {path:"/schedule",el:<SchedulePage/>},
    {path:"/create_course",el:<PrivateRouteTeacher status = {status}><CreateCoursePage/></PrivateRouteTeacher>}
]}
        return (
           
                <BrowserRouter>
                    <regContext.Provider value={[reg,setReg,setStatus]}>
                    <Header></Header>
                    <Routes>
                        <Route path='*' element={<HomePage></HomePage>} />
                        <Route path="/login" exact element={<LoginPage></LoginPage>}/>
                        <Route path="/home" exact element={<HomePage></HomePage>}/>
                        <Route path="/register" exact element={<RegisterPage></RegisterPage>}/>
                        <Route element={<NotFound></NotFound>}/>
                        {privateComponents.components.map((c)=>{
                            return(<Route path={c.path} exact element = {<PrivateRoute auth  = {reg}>{c.el}</PrivateRoute>}></Route>)
                        })}
  
                    </Routes>
                    <Footer></Footer>
                    </regContext.Provider>
                </BrowserRouter>
               

        );
    
}



function PrivateRoute({ children, auth}) {
    
    return auth === 'true' ? children : <Navigate to="/login" />;
  }
function PrivateRouteTeacher({ children, status}) {
    console.log("iiiiiii",status)
    return status === 'true' ? children : <Navigate to="/home" />;
  } 

ReactDOM.render(<App/>,document.getElementById('root'))
