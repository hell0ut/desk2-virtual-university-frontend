import React, {Component, useState} from "react";
import RightSubMenu from "../Side Menus/SubMenuRight";
import RightActive from "../Side Menus/SideMenuRightActive";
import button_right from "../../img/button_icon.png";
import paper from "../../img/paperclip.png";
import done from "../../img/done.png";
export class RightVerticalTabs extends Component{

}

export default function CourseDetail (){


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
      const [state,setState] =useState({
        name:"Linear Algebra",
        teacher: "L. Baranovska",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        rating:"8 / 10",
        students:"50",
        chapters:[
            {id:0,chapter_name:'Introduction', subchapters:[
            {id:0,title:'Introduction', tasks:[
                {id:0,type: "Lection"},
                {id:1, type: "Homework"}
            ]},
            {id:1,title:'Vectors', tasks:[
                {id:2,type:'Task'}
            ]}
        ]
        },
        {id:1,chapter_name:'Introduction 2', subchapters:[
            {id:2,title:'Algebra', tasks:[
                {id:3,type: "Lection"},
                {id:4,type: "Homework"}
            ]},
            {id:3,title:'Geometry', tasks:[
                {id:5,type:'Task'}
            ]}
        ]
        },
        {id:2,chapter_name:'Introduction', subchapters:[
            {id:4,title:'Introduction', tasks:[
                {id:6,type: "Lection"},
                {id:7, type: "Homework"}
            ]},
            {id:5,title:'Vectors', tasks:[
                {id:8,type:'Task'}
            ]}
        ]
        },
        {id:3,chapter_name:'Introduction', subchapters:[
            {id:6,title:'Introduction', tasks:[
                {id:9,type: "Lection"},
                {id:10, type: "Homework"}
            ]},
            {id:7,title:'Vectors', tasks:[
                {id:11,type:'Task'}
            ]}
        ]
        }
        ]
    });

        return (
            <>
            <div className="col-2 mt-4 ">
                <div className="row course-upper mb-2">
                    <div className="col-4">Main</div>
                    <div className="col-4">News</div>
                    <div className="col-4">Marks</div>
                </div>

                
                <div className="row mb-1 me-1">
    
    <div class="col accordion accordion-flush p-0 " id="main">
                {state.chapters.map((e) =>{
                            return <Chapter props={e}></Chapter>;
                        })}
</div>
</div>
                

            </div>
            <CourseDetailMain props = {state}></CourseDetailMain>
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
                <RightActive hh = {"100%"}></RightActive>
 
            </div>

            </>

        );
}

function CourseDetailMain (props){


        return (
            <div className="col-8 ps-4 mt-4">
                <div className="row">
                    <div className="col-8 border-bottom border-1">
                        <div className="row mt-4" style={{fontWeight:"bold", fontSize:"15pt"}}>{props.props.name}</div>
                        <div className="row pt-1" style={{fontSize:"11pt"}}>Teacher : {props.props.teacher}</div>
                        <div className="row pt-4 pb-3" style={{fontSize:"11pt", color:"#666666"}}>{props.props.description}</div>
                    </div>
                    <div className="col-2 border-start ps-5 pt-5  border-bottom border-1" style={{borderColor:"#666666"}}>
                        <div className="row" style={{fontWeight:"bold", fontSize:"13pt"}}>Rating:</div>
                        <div className="row" style={{fontSize:"13pt", color:"#666666"}}>{props.props.rating}</div>
                        <div className="row pt-4" style={{fontWeight:"bold", fontSize:"13pt"}}>Students:</div>
                        <div className="row " style={{fontSize:"13pt", color:"#666666"}}>{props.props.students}</div>
                    </div>
                </div>
                <div className="row pt-3 pb-5 ">
                    
                    <span> <a href="https://cdnimg.rg.ru/img/content/190/36/72/kinopoisk.ru-A-Street-Cat-Named-Bob-2889441_t_650x433.jpg" download="" style={{fontWeight:"bold", fontSize:"15px", color:"#0d0b94"}}> - Rating system </a> </span>
                </div>
                <div className="mb-5">
                {props.props.chapters.map((s)=>{
                    return <ChapterDetail props={s}></ChapterDetail>
                })}

                </div>

            </div>
            
        );
}

const idd=(id, type=0)=>{
    if(type===0){
    return "id"+id;  
    }
    return "#id"+id;
}
const color_main = {0:"#e988d1",1:"orange",2:"green", 3:"black"}

function Chapter (props){



    

    const {id,chapter_name,subchapters}=props.props;
        return (
            <>

            
                
                  <div className="border-0 mb-2  accordion-item ">
                  
    <div className="accordion-header chapter" id={idd(id)} style={{'border-color':color_main[id%4], borderWidth:"1px 1px 1px 10px",borderRadius:"0 4px 4px 0"}}>
    
      <div className="accordion-button border-0 m-0 collapsed" data-bs-toggle="collapse" data-bs-target={idd(id+"_collapse",1)} aria-expanded="false" aria-controls={idd(id+"_collapse")}  >
     
        <span className=" part-style p-0 m-0 ms-2" style={{'color':color_main[id%4]}} ><a href="">Part {id+1}</a><br/> <span className="chapter-style" style={{fontWeight:"normal", color:"black", fontSize:"9pt"}}>{chapter_name}</span></span>
        
      </div>
      
    </div>
    <div id={idd(id+"_collapse")} className="accordion-collapse collapse" aria-labelledby={idd(id)} data-bs-parent="#main">
      <div className="accordion-body p-0">


      <div class="col accordion accordion-flush p-0 " id={"pik"+id}>
      {subchapters.map((e) =>{
                            return <SubChapter id_p={id} id = {e.id} title={e.title} tasks = {e.tasks}></SubChapter>;
                        })}

  
  
  </div>
    </div>
  </div>
  </div>

            </>

            
        );


}

function SubChapter (props){
        const id=props.id;
        return (
           
            <div class="accordion-item border-0 mt-2">
            <div class="accordion-header " id={idd(id+"sub")}>
              <div class="accordion-button subchapter p-0 pe-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={idd(id+"_collapse_sub",1)} aria-expanded="false" aria-controls={idd(id+"_collapse_sub")} style={{borderRadius: "0 10px 10px 0"}}>
              
              <div className="row">
                <div className="col-10 ps-4 mt-4 mb-4"><a href="">{props.title}</a></div>
            </div>
              </div>
            </div>
            <div id={idd(id+"_collapse_sub")} class="accordion-collapse collapse" aria-labelledby={idd(id+"sub")} data-bs-parent={"#pik"+props.id_p}>



            <div className="accordion-body p-0">


      
            {props.tasks.map((e) =>{
                      return <SubChapterTasks props={e}></SubChapterTasks>;
                  })}



</div>


              </div>
            </div>

        );

}

function ChapterDetail (props){

    const [state,setState] = useState(    {
        opened:false,
        title:'Introduction',
        subChapters:[
            {title:'Vectors', type:'Lection'},
            {title:'Vectors', type:'Task'},

        ]

    });

    return (
        <>
            <div className="row mt-1 chapter-detail">
                <div className="col-8 my-auto">
                    <div className="row part-style mt-3 ps-3" style={{'color':color_main[props.props.id%4],fontWeight: "bold", fontSize:"18px"}}>Part {props.props.id+1}</div>
                    <div className="row mb-3 ps-3" style = {{fontSize:"16px"}}>{props.props.chapter_name}</div>
                </div>
                <div className="col my-auto part-style" style={{'color':color_main[props.props.id%4],fontSize:"18px"}}><div className="row justify-content-end pe-4">50%</div></div>
            </div>
            {props.props.subchapters.map((e) =>{
                            return <SubChapterDetail props={e}></SubChapterDetail>;
                        })}
            <div className="row mb-3 last-border"></div>

        </>


    );
}

function SubChapterDetail (props){

        return (
            <div className="row subchapter-detail">
                <div className="col-10 subchapter-detail_font pt-2 pb-2  w-100 border-bottom ps-3 mb-3" style={{'backgroundColor':"#c6d4ff3a"}}>{"- " + props.props.title}</div>
                {props.props.tasks.map((e) =>{
                            return <SubChapterTasksDetail props={e}></SubChapterTasksDetail>;
                        })}
            </div>
        );

}

function SubChapterTasksDetail (props){

    return (
        <div className="row subchapter_tasks-detail">
            <div className="col-10 ps-3 mb-3">{props.props.type}</div>
            <div className="offset-1 col d-flex justify-content-end ">
            <div className="chapter" style={{borderRadius:"100%",borderColor:"grey", width:"25px", height:"25px"}}><img style={{transform:"translate(0px, -30%) scale(0.7)"}} src={done}></img></div>
            </div>
        </div>
    );

}

function SubChapterTasks(props){

    return (
        
        <div className="row mt-3 subchapter_tasks">
            <a className="col-12 d-flex" href="">
            <div className="col ps-2 mb-3">{props.props.type}</div>
            <div className="col d-flex justify-content-end me-3 ">
            <div className=" chapter" style={{borderWidth:"1px", borderColor:"grey", borderRadius:"100%", width:"20px", height:"20px"}}><img style={{transform:"translate(-2px, -30%) scale(0.6)"}} src={done}></img></div>
            </div>
            </a>
        </div>
    );

}