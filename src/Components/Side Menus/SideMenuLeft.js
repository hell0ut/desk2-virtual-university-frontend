import React, {useState,useContext} from "react";
import {regContext} from "../../index.js";
import settings from "../../img/settings.png";
import profile from "../../img/profile.png"
import back from "../../img/log out.png"
import marks from "../../img/marks.png"
import {Link} from "react-router-dom";
import {useNavigate } from "react-router-dom";


export default function SubMenu (props) {
    const [reg, setReg,setStatus] = useContext(regContext);
    const nav = useNavigate();
    const LogOut = ()=>{
        setReg('false');
        setStatus('f');
        nav('/login');
        localStorage.clear();
    }

    const Profile = () =>{
        nav('/profile')

    }

    const Settings = () =>{
        nav('/profile')
    }

    const Marks = () =>{
        nav('/marks')
        setStatus('f');
        nav('/login');
        localStorage.clear();
    }



    const [icons,setIcon] = useState(    {icons: [
            {icon:settings,name:'settings',link:Settings},
            {icon:marks,name:'marks',link:Marks},
            {icon:profile,name:'profile',link:Profile},
            {icon:back,name:'back', link:LogOut}
        ]});

    const renderTabs = (needToRender) => {
        if (needToRender) {
            return (
                <div className="col-1 p-0">
                    <div className="pt-5 me-4 h-100 border-end border-2">
                        <Link to="/courses">
                            <div className="vtabs1 d-flex justify-content-end">
                                <span className="tabs tabs1 d-flex justify-content-center align-items-center  "> My Courses</span>
                            </div>
                        </Link>
                        <Link to="/kanban">
                            <div className="vtabs d-flex justify-content-end">
                                <span className="tabs tabs2 d-flex justify-content-center align-items-center "> To do List</span>
                            </div>
                        </Link>
                        <Link to="/schedule">
                            <div className="vtabs d-flex justify-content-end">
                                <span className="tabs tabs3 d-flex justify-content-center align-items-center "> My Schedule</span>
                            </div>
                        </Link>
                    </div>
                </div>
            );

        } else return "";
        

    }

    return (
        <>
            <div className="col-1">
                    <div className="ps-1 col-12">
                        {icons.icons.map((but,index) =>{
                            return <SideMenuButton icon={but.icon} name={but.name} link={but.link}/>;
                        })}
                    </div>
                    </div>
                    {renderTabs(props.needToRender)}
        </>

    );

}

function SideMenuButton(props){
        return (
            <div className="row side_menu_el" key={props.name}>
                <div className="col-12 d-flex justify-content-center">
                    <img src={props.icon} alt={props.name} onClick = {props.link} className="img-fluid float-end"/>
                </div>
            </div>
        );
}
