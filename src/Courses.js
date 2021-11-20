import React,{Component} from "react";
import course_image1 from "./img/prev.png";
import course_image2 from "./img/prev2.png";
import course_image3 from "./img/prev3.png";
import course_image4 from "./img/prev4.png";
import course_image5 from "./img/prev5.png";
import course_image6 from "./img/prev6.png";
import search_im from "./img/search_Icon.png";
import arrow_left from "./img/arrow_left.png";
import arrow_right from "./img/arrow_right.png";




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
            
            <div className="col-6 px-5">
                <div className="row d-flex justify-content-around hat mb-1">
                    <div className="col-4 justify-content-start"><span className="my-courses">My courses</span></div>
                    <div class="dropdown col-1 align-self-center">
  <a class="btn dropdown_button dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    in progress
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" style={{fontSize:"9pt"}} href="#">finished</a></li>
  </ul>
</div>
        
                    <div className="col">
                        <div className="row justify-content-end">

                            <div className="box border border-1  d-flex border_arrows_search justify-content-center me-5">
                                    <a href="" className="p-0 m-0 d-flex justify-content-center">
                                    <img src= {search_im} alt="" className="img-fluid align-self-center"/>
                                    </a>
                                
                            </div>

                            <div className="box border border-1 d-flex border_arrows_search justify-content-center me-2">
                                    <a href="" className="p-0 m-0 d-flex justify-content-center">
                                    <img src={arrow_left} alt="" className="img-fluid align-self-center"/>
                                    </a>
                               
                            </div>

                            <div className="box border border_arrows_search d-flex justify-content-center ">
                                <a href="" className="p-0 m-0 d-flex justify-content-center">
                                    <img src={arrow_right} alt="" className="img-fluid align-self-center"/>
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


                <div className="row pb-4">

                    <div className="col mt-2 mb-4 rounded border border-1 ms-2 me-2">
                        <div className="row  pt-1 pb-1">
                            <div className="col-4 d-flex justify-content-center">
                                <span className="digit align-self-center">1</span>
                            </div>
                            <div className="col text_digit">
                                tasks<br/>completed<br/>today
                            </div>

                        </div>

                    </div>
                    <div className="col mt-2  mb-4 rounded  border border-1 ms-2 me-2">
                        <div className="row info  pt-1 pb-1">
                            <div className="col-4 d-flex justify-content-center">
                                <span className="digit align-self-center ">5</span>
                            </div>

                            <div className="col text_digit">
                            tasks<br/>for<br/>tomorrow
                            </div>

                        </div>
                    </div>
                    <div className="col mt-2  mb-4 rounded border border-1 ms-2 me-2">
                        <div className="row  info pt-1 pb-1">
                            <div className="col-4 d-flex justify-content-center">
                                <span className="digit align-self-center">25</span>
                            </div>

                            <div className="col text_digit">
                            exams<br/>for this<br/>week
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
            <div className="col mt-2 card_size p-1" key={id}>
                <div className="card card_size">
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body ">
                        <h5 className="card-title titlecard">{subject}</h5>
                        <p className="card-text description_font">{teacher}</p>
                    </div>
                </div>
            </div>
        );
    }
}