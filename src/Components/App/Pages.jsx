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
import {Login} from "../Authentification/Login";
import {ConfirmEmail} from "../Authentification/ConfirmEmail";


export class RegisterPage extends Component{

    render(){
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
            <div className="row">
                <SubMenu needToRender={false}></SubMenu>
                <Register regSuccess={this.props.regSuccess}></Register>
            </div>
            </div>

        );
    }
}


export class ConfirmEmailPage extends Component{

    render(){
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
            <div className="row">
                <SubMenu needToRender={false}></SubMenu>
                <ConfirmEmail></ConfirmEmail>
            </div>
            </div>
        );
    }
}


export class LoginPage extends Component{

    render(){
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
            <div className="row">
                <SubMenu needToRender={false}></SubMenu>
                <Login></Login>
            </div>
            </div>

        );
    }
}


export class CourseDetailMain extends Component{
    render() {
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
                <div className="row">
                    <SubMenu needToRender={false}></SubMenu>
                    <CourseDetail></CourseDetail>
                </div>
            </div>
        );
    }
}


export class CoursesMainContent extends Component{

    render() {
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
                <div className="row">
                    <SubMenu needToRender={true}></SubMenu>
                    <CoursesList></CoursesList>
                    <RightSubMenu></RightSubMenu>
                </div>
            </div>
        );
    }
}



export class HomePage extends Component{

    render() {
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
                <div className="row">
                    <SubMenu needToRender={false}></SubMenu>
                    <Home></Home>
                </div>
            </div>
        );
    }
}

export class SchedulePage extends Component{
    render() {
        return (
            <div style={{'margin-left': '1%', 'margin-right': '1%'}}>
                <div className="row">
                    <SubMenu needToRender={true}></SubMenu>
                    <Schedule/>
                </div>
            </div>
        );
    }

}








