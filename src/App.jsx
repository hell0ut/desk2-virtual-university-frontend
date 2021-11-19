import React,{Component} from "react";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css"
import {Header} from "./Header";
import {SubMenu} from "./SideMenuLeft";
import {CoursesList} from "./Courses";
import {RightSubMenu} from "./SubMenuRight";
import {Footer} from "./Footer";
import {CourseDetail} from "./CourseDetail";

export class CoursesPage extends Component{

    render(){
        return (
            <>
            <Header></Header>
            <CoursesMainContent></CoursesMainContent>
            <Footer></Footer>
            </>
        );
    }
}


export class CourseDetailPage extends Component{

    render(){
        return (
            <>
                <Header></Header>
                <CourseDetailMain></CourseDetailMain>
                <Footer></Footer>
            </>
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













