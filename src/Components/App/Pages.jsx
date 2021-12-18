import React,{Component} from "react";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/style.css"
import Home from "../Home/Home"
import SubMenu from "../Side Menus/SideMenuLeft";
import CoursesList from "../Courses UI/Courses";
import RightSubMenu from "../Side Menus/SubMenuRight";
import CourseDetail from "../Courses UI/CourseDetail";
import Register from "../Authentification/Register";
import Schedule from "../Courses UI/Schedule";
import Login from "../Authentification/Login";
import {ConfirmEmail} from "../Authentification/ConfirmEmail";
import CoursesPageTestMain from "../Courses UI/CoursesPageTestMain";
import CreateCourse from "../Teacher/CreateCourse";


export function CoursesPageTest (){
    return (
        <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
            <div className="row">
                <SubMenu needToRender={false}></SubMenu>
                <CoursesPageTestMain></CoursesPageTestMain>
            </div>
        </div>
    );
}


export function RegisterPage (){

        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
            <div className="row">
                <SubMenu needToRender={false}></SubMenu>
                <Register></Register>
            </div>
            </div>

        );
    
}


export function ConfirmEmailPage (){
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
            <div className="row">
                <SubMenu needToRender={false}></SubMenu>
                <ConfirmEmail></ConfirmEmail>
            </div>
            </div>
        );
}


export function LoginPage (){

    
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
            <div className="row">
                <Login></Login>
            </div>
            </div>

        );
    
}


export function CourseDetailMain (){
    
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
                <div className="row">
                    <SubMenu needToRender={false}></SubMenu>
                    <CourseDetail></CourseDetail>
                </div>
            </div>
        );
    
}


export function CoursesMainContent (){

    
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
                <div className="row">
                    <SubMenu needToRender={true}></SubMenu>
                    <CoursesList></CoursesList>
                    <RightSubMenu hh = {"auto"}></RightSubMenu>
                </div>
            </div>
        );
    
}



export function HomePage (){

    
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
                <div className="row">
                    
                    <Home></Home>
                </div>
            </div>
        );
    
}

export function SchedulePage (){
    
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
                <div className="row">
                    <SubMenu needToRender={true}></SubMenu>
                    <Schedule/>
                </div>
            </div>
        );
    

}

export function CreateCoursePage (){
    return (
        <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
            <div className="row">
            <SubMenu needToRender={true}></SubMenu>
            <CreateCourse/>
            </div>
        </div>
    );
}








