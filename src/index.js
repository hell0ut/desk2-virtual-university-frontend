import React, {Component} from 'react';
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
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";



class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            registered:false
        }
    }

    userLogged = () => {
        this.setState({registered:true});
    }


    render() {
        return (
                <BrowserRouter>
                    <Header></Header>
                    <Routes>

                        <Route path="/home" exact element={<HomePage></HomePage>}/>
                        <Route path="/courses" exact element={<CoursesMainContent></CoursesMainContent>}/>
                        <Route path="/course" exact  element={<CourseDetailMain></CourseDetailMain>}/>
                        <Route path="/register" exact element={<RegisterPage regSuccess={this.userLogged}></RegisterPage>}>
                        </Route>
                        <Route path="/schedule" exact element={<SchedulePage></SchedulePage>}/>
                        <Route path="/login" exact element={<LoginPage></LoginPage>}/>
                        <Route path="/confirm-email" exact element={<ConfirmEmailPage email={this.props.email}/>}/>

                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>

        );
    }
}





ReactDOM.render(<App/>,document.getElementById('root'))
