import React, {useEffect, useState} from "react";
import course_image1 from "../../img/prev.png";
import course_image2 from "../../img/prev2.png";
import course_image3 from "../../img/prev3.png";
import course_image4 from "../../img/prev4.png";
import course_image5 from "../../img/prev5.png";
import course_image6 from "../../img/prev6.png";
import search_im from "../../img/search_Icon.png";
import arrow_left from "../../img/arrow_left.png";
import arrow_right from "../../img/arrow_right.png";
import {Link} from "react-router-dom";
import $api from "../App/API";


const images = [course_image1,course_image2,course_image3,course_image4,course_image5,course_image6]


export default function CoursesList (){

    const [coursesList,setCoursesList] = useState([
        {id:1,subject:'Linear Algebra',owner:{first_name:'L. Baranovska',last_name:'Chelka'},image:course_image1},
    ])


    useEffect(()=>{
        $api.get('courses/?enrolled=true').then(res=>{
            setCoursesList(res.data)
            console.log(res.data)
        })
    },[])



    return (

        <div className="col-6 px-5">
            <div className="row d-flex justify-content-around hat mb-1">
                <div className="col-4 justify-content-start"><span className="my-courses">My courses</span></div>
                <div className="dropdown col-1 align-self-center">
    <a className="btn dropdown_button dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    in progress
    </a>

    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" style={{fontSize:"9pt"}} href="#">finished</a></li>
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
                {coursesList.map((course)=>{
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


function CourseCard (props){
    const {id,title,owner} = props.props
        return (
            <div className="col mt-2 card_size p-1" key={id}>
                <Link to={'/courses/'+id}>
                    <div className="card card_size">
                        <img className="card-img-top" src={images[id%6]} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title titlecard">{title}</h5>
                            <p className="card-text description_font">{owner.last_name} {owner.first_name[0]+'.'}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
}