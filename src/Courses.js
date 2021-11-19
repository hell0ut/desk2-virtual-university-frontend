import React,{Component} from "react";
import course_image1 from "./img/prev.png";
import course_image2 from "./img/prev2.png";
import course_image3 from "./img/prev3.png";
import course_image4 from "./img/prev4.png";
import course_image5 from "./img/prev5.png";
import course_image6 from "./img/prev6.png";




export class CoursesList extends Component{
    state = {courses:[
            {id:1,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image1},
            {id:2,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image2},
            {id:3,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image3},
            {id:4,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image4},
            {id:5,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image5},
            {id:6,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image6},
            {id:7,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image3},
            {id:8,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image4},
            {id:9,subject:'Linear Algebra',teacher:'L. Baranovska',image:course_image5}
        ]};




    render() {
        return (
            <div className="col-7 border-start border-end border-2">
                <div className="row justify-content-around hat">
                    <div className="col-3"><span className="my-courses">My courses</span></div>
                    <div className="col-2"></div>
                    <div className="col-1"></div>
                    <div className="col"></div>
                    <div className="col-3">
                        <div className="row justify-content-end">

                            <div className="box border border-2 rounded justify-content-center me-5">
                                <a href="">
                                    <img src="img/Search_Icon.svg.png" alt="search" className="img-fluid ms-1 mt-1"/>
                                </a>
                            </div>

                            <div className="box border border-2 rounded justify-content-center me-2">
                                <a href="" className="">
                                    <img src="img/arrow_left.png" alt="" className="img-fluid ms-1 mt-2"/>
                                </a>
                            </div>

                            <div className="box border border-2 rounded justify-content-center me-3">
                                <a href="">
                                    <img src="img/arrow_right.png" alt="" className="img-fluid ms-1 mt-2"/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row row-cols-3">
                    {this.state.courses.map((course)=>{
                        return <CourseCard props={course}></CourseCard>
                    })}
                </div>


                <div className="row">

                    <div className="col mt-2 mb-4 rounded border border-1 ms-2 me-2">
                        <div className="row">
                            <div className="col-1">
                                <span className="digit">1</span>
                            </div>
                            <div className="col">
                                tasks completed today
                            </div>

                        </div>

                    </div>
                    <div className="col mt-2  mb-4 rounded  border border-1 ms-2 me-2">
                        <div className="row info">
                            <div className="col-1">
                                <span className="digit">5</span>
                            </div>

                            <div className="col">
                                tasks completed for tomorrow
                            </div>

                        </div>
                    </div>
                    <div className="col mt-2  mb-4 rounded border border-1 ms-2 me-2">
                        <div className="row  info">
                            <div className="col-1">
                                <span className="digit">2</span>
                            </div>

                            <div className="col">
                                exams for this week
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        );
    }
}



export class CourseCard extends Component{
    render() {
        const {id,subject,teacher,image}=this.props.props;
        return (
            <div className="col mt-2 card_size" key={id}>
                <div className="card card_size">
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title titlecard">{subject}</h5>
                        <p className="card-text">{teacher}</p>
                    </div>
                </div>
            </div>
        );
    }
}