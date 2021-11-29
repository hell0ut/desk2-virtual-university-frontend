import React, {Component} from "react";
import banner from "../../img/banner_image.png";




export default function Home() {


    return (
       
        <div className=" cont">
        <div className="row mb-5 mt-5">
            <div className="col-9 d-flex justify-content-center">
                <img className="img-fluid" src={banner}></img>
            </div>
            <div className="col-3 banner-font align-self-center justify-content-center">
                
                <div className="row align-self-center"><div className="banner-button ">Join</div></div>
                <div className="rowalign-self-center">Gain full controll of your learning process</div>
            </div>
        </div>
        <div className="row">
            <div  className="col-4"> <div className="search_row">Search...</div></div>
            <div  className="col-2"></div>
        </div>
        <div className="row">
        <div className="row">Specialties</div>
        <div className="row">lohgkjkhgfchvgjhbkuiytugfhvjbkygujbh</div>  
        </div>
        </div>
        
    );



}