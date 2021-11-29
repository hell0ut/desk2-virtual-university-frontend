import React, {Component} from "react";
import RightSubMenu from "../Side Menus/SubMenuRight";
import button_right from "../../img/button_icon.png";

export default function SideMenuRightActive() {
    const handleClick =() => {
        document.getElementById("mySidenav").style.display = "";
        document.getElementById("mySidenav").style.width = "500px";
        changeVis(document.getElementsByClassName("display_mode"), "hidden");
      }
      const handleClickClose =() => {
        document.getElementById("mySidenav").style.display = "none";
        
        changeVis(document.getElementsByClassName("display_mode"), "visible");  
      }
      function changeVis(els, type){
        for(var i=0, len=els.length; i<len; i++)
        {
            els[i].style["visibility"] = type;
        }
    }
    return (
    
                <div id = "puk" className="col-1 p-0 d-flex justify-content-end">
            
            <div  className="col display_mode">
            <div className="row d-flex justify-content-end m-0 mt-3" style={{height:"30px"}}>
                    <div className=" radius_width_r_tabs deadlines_min" > </div>
             </div>
             <div className="row d-flex justify-content-end m-0" style={{height:"30px"}}>
                    <div className="radius_width_r_tabs exams_min"  > </div>
            </div>
            <div className="row d-flex justify-content-end m-0" style={{height:"30px"}}>
                    <div className="radius_width_r_tabs schedule_min"> </div>
                    </div>
            </div>
            <div  className="col display_mode border-start border-2 d-flex justify-content-center "> <button className="mt-3 border button_right_hover button_open_right_menu_style" onClick={handleClick}><img src={button_right}></img></button> </div>
                
    <div id="mySidenav" className="p-0 col-4 sidenav position-relative">

    <div  className="radius_width_r_tabs side_nav_close position-absolute  top-0 start-0" > <div className=" cl-btn-7" onClick={handleClickClose}></div></div>

        <RightSubMenu hh = {"100%"}></RightSubMenu>
        
</div>

        </div>
 

    )
}