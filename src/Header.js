import {Component} from "react";
import logo from "./img/logo.png";
import bell from "./img/bell_icon.png";
import id_icon from "./img/id_icon.png";

export class Header extends Component{

    state = {firstname:'Daria',lastname:'Ugnivenko'};

    render() {
        return (
            <header className="border-bottom border-2">

                <div className="row mt-auto">
                    <div className="col-2 d-flex justify-content-center align-self-center">
                        <a href="#"> <img src={logo} alt="2desk" className="img-fluid ms-2"/></a>
                    </div>

                    <div className="col-6 d-flex justify-content-center align-self-center">
                        <span className="hd_style learn">LEARN</span> <span className="hd_style more">MORE.</span> <span
                        className="hd_style explore">EXPLORE</span> <span className="hd_style our">OUR</span>
                        <button type="button" className="btn border border-success ms-3 align-self-center"
                                style={{height: '30px',fontSize:'9pt',borderRadius:'0.5em'}}><span className="courses" >COURSES</span>
                        </button>
                    </div>
                    <div className="col-1 d-flex justify-content-end align-self-center"><img src={bell} alt=""/></div>
                    <div className="col">
                        <div className="row justify-content-left">
                            <div className="col-4 d-flex justify-content-center align-self-center">
                                <img src={id_icon} alt="My profile" className="img-fluid float-end"/>
                            </div>
                            <div className="col-4 ">
                                <div className="row">{this.state.lastname}</div>
                                <div className="row">{this.state.firstname}</div>
                            </div>

                        </div>

                    </div>


                    <div className="col-1"></div>
                </div>

            </header>
        );
    }


}