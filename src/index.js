import React from 'react';
import ReactDOM from 'react-dom';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css"
import {CourseDetailPage, CoursesPage, Header} from "./App";


var element = <button className={"btn btn-danger"}>hello</button>;



ReactDOM.render(<CourseDetailPage></CourseDetailPage>,document.getElementById('root'))
