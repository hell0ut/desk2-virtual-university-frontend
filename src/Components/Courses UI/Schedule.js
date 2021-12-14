
import RightActive from "../Side Menus/SideMenuRightActive";
import React, {Component, useContext, useEffect, useState} from "react";
import axios from "axios";


Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"."+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"."+ this.getFullYear();
}

export default function Schedule (){

    const [courses,setCourses] = useState()
    const [state,setState] =useState({
        monday:[{name:'Algebra'},{name:'Algebra'},{name:''},{name:'Algebra'}],
    tuesday:[{name:'Algebra'},{name:'Algebra'},{name:''},{name:'Algebra'}],
    wedenesday:[{name:'Algebra'},{name:'Algebra'},{name:''},{name:'Algebra'}],
    thursday:[{name:'Algebra'},{name:'Algebra'},{name:''},{name:'Algebra'}],
    friday:[{name:'Algebra'},{name:'Algebra'},{name:''},{name:'Algebra'}]
    });
    var newDate = new Date();
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay()+1; // First day is the day of the month - the day of the week



var firstday = new Date(curr.setDate(first)).toUTCString();
function DayWeek(i){
    var last = first + i; // last day is the first day + 6
    return new Date(curr.setDate(last)).toUTCString()};

        return (
            <>
            <div className="col">
                <div className="row justify-content-around hat">
                    <div className="col-3"><span className="my-courses">My Schedule</span></div>

                    <div className="col-9">
                        <div className="row justify-content-end">
                            <div className="box border border-2 rounded justify-content-center me-2"><a href=""
                                                                                                        className=""><img
                                src="../../img/arrow_left.png" alt="" className="img-fluid ms-1 mt-2"/></a></div>
                            <div className="box border border-2 rounded justify-content-center me-3"><a href=""><img
                                src="../../img/arrow_right.png" alt="" className="img-fluid ms-1 mt-2"/></a></div>

                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col ms-1 me-1 ">
                        <div className="row schedule rounded-top justify-content-between p-1">
                            <div className="col-5">Monday</div>
                            <div className="col-5">{firstday}</div>
                        </div>


                        {state.monday.map((e,index) =>{
                            return <Class name={e.name} num={index}></Class>;
                        })}

                    </div>


                    <div className="col ms-1 me-1 ">
                        <div className="row exams rounded-top justify-content-between p-1">
                            <div className="col-5">Tuesday</div>
                    <div className="col-5">{DayWeek(1)}</div>
                        </div>
                        {state.tuesday.map((e,index) =>{
                            return <Class name={e.name} num={index}></Class>;
                        })}
                        </div>
                    
                    <div className="col ms-1 me-1 ">
                        <div className="row deadlines rounded-top justify-content-between p-1">
                            <div className="col-5">Wednesday</div>
                            <div className="col-5">{DayWeek(2)}</div>
                        </div>
                        {state.tuesday.map((e,index) =>{
                            return <Class name={e.name} num={index}></Class>;
                        })}
                    </div>

                    </div>
                <div className="row mt-3">
                    <div className="col ms-1 me-1 ">
                        <div className="row schedule rounded-top justify-content-between p-1">
                            <div className="col-5">Wednesday</div>
                            <div className="col-5">{DayWeek(3)}</div>
                        </div>
                        {state.tuesday.map((e,index) =>{
                            return <Class name={e.name} num={index}></Class>;
                        })}

                    </div>


                    <div className="col ms-1 me-1 ">
                        <div className="row exams rounded-top justify-content-between p-1">
                            <div className="col-5">Friday</div>
                            <div className="col-5">{DayWeek(4)}</div>
                        </div>

                        {state.tuesday.map((e,index) =>{
                            return <Class name={e.name} num={index}></Class>;
                        })}
 
                    </div>
                    <div className="col ms-1 me-1"></div>

                </div>
                
            </div>
            <RightActive hh = {"100%"}></RightActive>
            </>
    );

}
const time = ['8:30-10:05','10:05-10:25','8:30-10:05','8:30-10:05','8:30-10:05','8:30-10:05'];
function Class(props){
    return (
        <div className="row border-bottom border-2 mt-1 mb-1">
        <div className="col-3">{time[props.num]}</div>
        <div className="col-7  ms-3 me-0"><span className="dot ms-1 me-1"></span>{props.name}
        </div>
        <div className="col ps-0 pe-1"><img src="../../img/link.png" alt=""
                                            className="img-fluid float-end border rounded border-2"/>
        </div>
    </div>
    )
}