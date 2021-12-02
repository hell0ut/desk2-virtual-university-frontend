import React, {useState} from "react";
import banner from "../../img/banner_image.png";
import search_im from "../../img/search_Icon.png";
import arrow_left from "../../img/arrow_left.png";
import arrow_right from "../../img/arrow_right.png";
import koren from "../../img/koren.png";
import leaf from "../../img/leaf.png";
import mc2 from "../../img/mc2.png";
import card_search from "../../img/card_search.png";
export default function Home() {

    const [state,setState] =useState({courses:[
        {
        name:"Cell Biology",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor incididunt",
        color:"#d2ffc8",
        image:"",
        students:"30",
        rating:"8/10"
        },
        {
            name:"Cell Biology",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor incididunt",
            color:"#e8e5ff",
            image:"",
            students:"30",
            rating:"8/10"
        },
        {
            name:"Cell Biology",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor incididunt",
            color:"#fdffc6",
            image:"",
            students:"30",
            rating:"8/10"
        },
        {
            name:"Cell Biology",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor incididunt",
            color:"#ffe4ff",
            image:"",
            students:"30",
            rating:"8/10"
        },
        {
            name:"Cell Biology",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor incididunt",
            color:"#d2ffc8",
            image:"",
            students:"30",
            rating:"8/10"
            },
            {
                name:"Cell Biology",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor incididunt",
                color:"#e8e5ff",
                image:"",
                students:"30",
                rating:"8/10"
            },
            {
                name:"Cell Biology",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor incididunt",
                color:"#fdffc6",
                image:"",
                students:"30",
                rating:"8/10"
            },
            {
                name:"Cell Biology",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor cing elit, sed do eiusmod tempor incididunt",
                color:"#ffe4ff",
                image:"",
                students:"30",
                rating:"8/10"
            }
    ]});


    return (
       
        <div className="cont mb-4">
        <div className="row mb-0 mt-0">
            <div className="col-12 d-flex justify-content-center" style={{height:"100vh", backgroundColor:"rgba(250,250,255,1)", backgroundSize:"cover", position:"relative"}} >
                <div className=" d-flex justify-content-center">
                <span className="align-self-center mb-5"><img src={banner}></img></span>
                </div>

            </div>
            
            <div className="row banner-font  hh"style={{transform:"translate(0,-80%)"}} >
            <div className="w-100 hhh mb-4"style={{height:"2px"}}></div>
                <div className="d-flex col-6  banner-text"><span style={{color:"#61d650"}} className="d-flex justify-content-center col-4 align-self-center ">Gain </span> <span style={{color:"#fedb5f"}} className="d-flex justify-content-center col-4">full controll</span><span style={{color:"#ff8ed0"}} className="col-4 d-flex justify-content-center">of your </span></div>
                <div className="d-flex col-6  banner-text"> <span  className="col-4 d-flex justify-content-center">learning</span> <span style={{color:"#e99f32"}} className="col-4 d-flex justify-content-center">{"process"}</span> <div className="col-4 d-flex justify-content-center  "><div className="banner-button d-flex justify-content-center"><a href="" className="align-self-center">Join</a></div></div></div> 
                <div className="w-100 hhh mt-4"style={{height:"2px"}}></div>
            </div>

           
        </div>
        <div className="offset-1 col-10">
        <div  className="row mb-5 pb-5">
            <div className="col-5">
            <form className="row">
            <label for="inputSearch" className="visually-hidden">Search</label>
            <div  className="col-11">  <input type="search" className="form-control search_row" id="inputSearch" aria-describedby="searchHelp" placeholder="Search..."></input></div>
            <div className="col-1 p-0"> <button  className=" btn search_row search_w_h ms-3 d-flex justify-content-center" type="submit"> <img className=" align-self-center" src={search_im}></img></button> </div>
            </form>
            </div>
            <div className="col ms-5">
            <div className="dropdown">
            <button className="btn  dropdown-toggle" type="button" id="dropdownSearchLink" data-bs-toggle="dropdown" aria-expanded="false">
    Specialties 
  </button>
  <div className="dropdown-menu list-font row w-100" aria-labelledby="dropdownSearchLink">
  <div className="row mt-2 ms-2 me-1">
    <span className="col"><a className="" href="#">Math</a></span>
    <span className="col"><a className="" href="#">Literature</a></span>
    <span className="col"><a className="" href="#">Biology</a></span>
    </div>
    <div className="row mt-2 ms-2 me-1">
    <span className="col"><a className="" href="#">Biology</a></span>
    <span className="col"><a className="" href="#">Literature</a></span>
    <span className="col"><a className="" href="#">Computer Science</a></span>
    </div>
    <div className="row mt-2 ms-2 me-1 mb-2">
    <span className="col"><a className="" href="#">Biology</a></span>
    <span className="col"><a className="" href="#">Literature</a></span>
    <span className="col"><a className="" href="#">Computer Science</a></span>
    
    </div>
   
    
  </div>
</div>
</div>
        </div>
        <div className="row mb-5 pb-5 mt-5 pt-5">
        <div className="row main-header">Specialties</div>
        <div className="row p-0 mt-2 mb-5 pb-5"><span className="col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span></div>  
            <div id="carouselExampleControls" style={{height:"200px"}} className="carousel slide row" data-bs-ride="carousel">
  <div className="carousel-inner row h-100 ">
    <div className=" carousel-item active h-100">
    <div className="blocks row offset-1 col-10 ps-4">
            <SpecialityItem color="black" name ="Math" image={koren}></SpecialityItem>
            <SpecialityItem color="#60d64f" name="Biology" image={leaf}></SpecialityItem>
            <SpecialityItem color="#9d96d4"  name="Computer Science"></SpecialityItem>
            <SpecialityItem color="#ff87ff"  name="Physics" image={mc2}></SpecialityItem>
            <SpecialityItem color="#ffd13d" name="Data Analysis" image={card_search}></SpecialityItem>
            </div>
    </div>
    <div className="carousel-item h-100">
    <div className=" blocks row offset-1 col-10 ps-4 ">
    <SpecialityItem color="black" name ="Math" image={koren}></SpecialityItem>
            <SpecialityItem color="#60d64f" name="Biology" image={leaf}></SpecialityItem>
            <SpecialityItem color="#9d96d4" name="Computer Science"></SpecialityItem>
            <SpecialityItem color="#ff87ff" name="Physics" image={mc2}></SpecialityItem>
            <SpecialityItem color="#ffd13d" name="Data Analysis" image={card_search}></SpecialityItem>
            </div>
    </div>
  </div>
  <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span> <img src={arrow_left}></img></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className=" carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span> <img src={arrow_right}></img></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className="row mt-5 pt-5 mb-5">
            <div className="row main-header">Popular courses</div>
            <div className="row p-0 mt-2 mb-5 pb-5"><span className="col-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span></div>  
            <div className="row p-0">
            {state.courses.map((course)=>{
                    return <PopCoursesItem props={course}></PopCoursesItem>
                })}
            </div>
        </div>
        </div>
        </div>
        
  
    );
}

function SpecialityItem(props){
    return (
        <div className="col d-flex justify-content-center">
            <div className="b3 b" style={{"backgroundColor":props.color}}>
                <span className="subject_font row mt-2">
                    <span className="col-7 ms-2 ">{props.name}</span> 
                    <span className="col d-flex justify-content-end"> 
                    <div className="circle me-2 mt-1 d-flex img-fluid align-self-right" >
                        <img  className="img-fluid align-self-center" src={props.image}></img>
                        </div>
                        </span>
                        </span> 
                        <span className="row see_more"><a href="">See more</a></span>
                        </div>
                        </div>
    );

}

function PopCoursesItem(props){
    const {name,description, color, image, students, rating}=props.props;
    return (  
        <div className="col-3 mb-5">
            <a href="">
        <div className="w-100 pop-hov px-1" style={{'borderColor':color}}>
        <div className="row d-flex" style={{"backgroundColor":color, borderRadius:"0 0 10px 10px ", height:"60px"}}>
           
            <span className="col-9 ms-2 pop-courses-header align-self-center ">{name}</span>
            <div className="circle col-1 d-flex justify-content-center" style={{"border":"1px solid "+ color, transform:"translate(0,105%)", height:"30pt", width:"30pt"}}><div className="circle_c align-self-center" style={{"backgroundColor":color}}></div></div>
            
        </div>
        <div className="row">
            
            <div  className="mt-3">
                <span className="row fw-bold ms-1 mb-1" style={{fontSize:"10pt"}}>About:</span>
                <span className="row ms-1 col-11" style={{fontSize:"9pt", color:"grey"}}>{description} </span>
            </div>
        </div>
        <div className="row ms-2 mt-4 mb-2">
            <span className="col-6 fw-bold" style={{fontSize:"10pt"}}>Students:<br/>{students}</span>
            <span className="col-6 fw-bold" style={{fontSize:"10pt"}}>Rating:<br/>{rating}</span>
        </div>
        </div>
        </a>
    </div>
    );

}