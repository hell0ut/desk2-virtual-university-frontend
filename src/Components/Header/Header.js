import {useState} from "react";
import logo from "../../img/logo.png";
import bell from "../../img/bell_icon.png";
import id_icon from "../../img/id_icon.png";
import {Link} from "react-router-dom";

export default function Header(){

    const [user,setName] = useState({firstname:'Daria',lastname:'Ugnivenko'});

    return (
        <header className="border-bottom m-0 border-2">

            <div className="row mt-auto">
                <div className="col-2 d-flex justify-content-center align-self-center">
                    <Link to="/home"> <img src={logo} alt="2desk" className="img-fluid ms-2"/></Link>
                </div>

                <div className="col-6 d-flex justify-content-center align-self-center">
                    <span className="hd_style learn">LEARN</span> <span className="hd_style more">MORE.</span> <span
                    className="hd_style explore">EXPLORE</span> <span className="hd_style our">OUR</span>
                    <Link to="/courses">
                        <button type="button" className="btn border border-success ms-3 align-self-center"
                                style={{height: '30px',fontSize:'9pt',borderRadius:'0.5em'}}><span className="courses" >COURSES</span>
                        </button>
                    </Link>
                </div>
                <div className="col-1 d-flex justify-content-end align-self-center"><img src={bell} alt=""/></div>
                <div className="col">
                    <div className="row justify-content-left">
                        <div className="col-4 d-flex justify-content-center align-self-center">
                            <Link to="/login"><img src={id_icon} alt="My profile" className="img-fluid float-end"/></Link>
                        </div>
                        <div className="col-4 ">
                            <div className="row">{user.lastname}</div>
                            <div className="row">{user.firstname}</div>
                        </div>

                    </div>

                </div>


                <div className="col-1"></div>
            </div>

        </header>
    );



}