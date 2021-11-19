import React,{Component} from "react";

export class RightSubMenu extends Component{

    render() {
        return (
            <div className="col">
                <div className="row justify-content-end mt-2 mb-5 border ms-1 me-1 rounded">
                    <div className="col-6 float-end align-self-center p-0 "><span className="float-end"
                                                                                  style={{'font-weight': 'bold'}}>Current Lesson?</span>
                    </div>
                    <div className="col-4 align-self-center ps-1">
                        <button type="button" className="btn btn-secondary rounded mt-1 mb-1 ps-4 pe-4">Join</button>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-7"><span className="deadlines rounded-top">Deadlines</span></div>
                    <div className="col-5 deadlines rounded-top"></div>
                </div>

                <div className="row mt-3  lists">
                    <div className="col-7">English. Homework 3</div>
                    <div className="col-5">Tomorrow</div>
                </div>

                <div className="row mt-3  lists">
                    <div className="col-7">English. Homework 3</div>
                    <div className="col-5">Tomorrow</div>
                </div>

                <div className="row mt-3">
                    <div className="col-7"><span className="exams rounded-top">Exams</span></div>
                    <div className="col-5 exams rounded-top"></div>
                </div>

                <div className="row mt-3 lists">
                    <div className="col-7">English. Homework 3</div>
                    <div className="col-5">Tomorrow</div>
                </div>

                <div className="row mt-3 lists">
                    <div className="col-7">English. Homework 3</div>
                    <div className="col-5">Friday</div>
                </div>


                <div className="row mt-3">
                    <div className="col-7 "><span className="schedule rounded-top ">Schedule</span></div>
                    <div className="col-5 schedule rounded-top"></div>
                </div>

                <div className="row mt-3  lists">
                    <div className="col-7">English</div>
                    <div className="col-5">8:30 - 10:05</div>
                </div>

                <div className="row mt-3  lists">
                    <div className="col-7">Linear Algebra</div>
                    <div className="col-5">10:25 - 12:00</div>
                </div>

                <div className="row mt-3  lists">
                    <div className="col-7">Numerical Methods</div>
                    <div className="col-5">12:20 - 13:55</div>
                </div>

            </div>
        );
    }
}