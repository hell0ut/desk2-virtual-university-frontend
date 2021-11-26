import React, {useState} from "react";

export default function RightSubMenu(props){

    const a = props.hh;
    const [info,setInfo] = useState(    {
        deadline : {
            deadline_a: [
                {id: 1, name: 'English3', time: 'Tomorrow'},
                {id: 2, name: 'English3', time: 'Tomorrow'}]
        },
        exam : {
            exam_a: [
                {id: 1, name: 'English', time: '8:30 - 10:53'},
                {id: 2, name: 'English', time: '8:30 - 10:53'},
                {id: 3, name: 'English', time: '8:30 - 10:53'}
            ]
        },
        schedule : {
            schedule_a: [
                {id: 1, name: 'Numerical Methods3', time: '8:30 - 10:53'},
                {id: 2, name: 'Linear Algebra', time: '8:30 - 10:53'},
            ]
        }
    });



    return (
        
        <div className="col px-4 position-relative" style={{height: a}}>
            
            <div className="pe-0 px-2 pe-4 border-start border-2 h-100">
            <div className="row d-flex justify-content-center align-self-center  pt-5 mb-5  ms-1 me-1 ">
            
                <div className="col-6 float-end  justify-content-center p-0 "><span className="float-end"
                                                                              style={{  fontSize:'12pt',color:"#660099"}}>Current Lesson?</span>
                </div>
                <div className="col-4 mx-2">
                    <button type="button" className="btn border-1 d-flex justify-content-center" style={{height: '25px',width:"100%",fontSize:'10pt',fontWeight:'bold',borderRadius:'0.5em',color:"#660099", borderColor:"#660099"}}><span className="align-self-center">Join</span></button>
                </div>
            </div>

            <div className="row mt-3 ">
                <div className="radius_width_r_tabs deadlines position-absolute  top-20 start-0" > </div>

                <div className="col-7"><span className=" deadlines  op70 d-flex align-items-center">Deadlines</span></div>
                <div className="col-5  op70 deadlines"></div>
            </div>

            {info.deadline.deadline_a.map((d)=>{
                    return <RightTabItem props={d}></RightTabItem>
                })}



            <div className="row mt-3">
            <div className="radius_width_r_tabs exams position-absolute top-20 start-0" > </div>
                <div className="col-7"><span className="exams d-flex align-items-center op70">Exams</span></div>
                <div className="col-5 exams op70"></div>
            </div>

            {info.exam.exam_a.map((e)=>{
                    return <RightTabItem props={e}></RightTabItem>
                })}


            <div className="row mt-3">
                <div className="radius_width_r_tabs schedule position-absolute top-20 start-0" > </div>
                <div className="col-7 op70"><span className="schedule d-flex align-items-center">Schedule</span></div>
                <div className="col-5 op70 schedule"></div>
            </div>

            {info.schedule.schedule_a.map((s)=>{
                    return <RightTabItem props={s}></RightTabItem>
                })}

            </div>
            </div>
        
    );



}

function RightTabItem (props){
        const {id,name,time}=props.props;
        return (
            <div className="row mt-3 key={id}">
            <div className="col-7 "><span className="lists h30 d-flex align-items-center">{name}</span></div>
            <div className="col-5 p-0"> <span className="lists h30 d-flex align-items-center ">{time}</span></div>
        </div>
        );

    }

