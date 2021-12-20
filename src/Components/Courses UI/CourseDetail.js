import React, {Component, useEffect, useState} from "react";
import RightActive from "../Side Menus/SideMenuRightActive";
import done from "../../img/done.png";
import $api from "../App/API";
import {Link, useParams} from "react-router-dom";
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

    const [course,setCourse] = useState({owner:{first_name:'Lesya',last_name:'Baranovska'},title:'Linal',description:'Pohui'})
    const [chapters,setChapters] = useState([{title:'Intro',description:'Lalala',material_set:[{title:'Lec1',body:'This is lec1'}],task_set:[{title:'Lec1',body:'This is lec1'}]}])
    const params = useParams()
    const courseId= params.course_id
    const chapterId = params.chapter_id
    const materialId=params.material_id
    const taskId= params.task_id


    useEffect(()=>{
        $api.get(`courses/${courseId}`).then(res=>{setCourse(res.data)})
        $api.get(`${courseId}/chapters/`).then(res=>{
            setChapters(res.data)
        }).catch(err=>console.log(err.response.data))
    },[])

        return (
            <>
            <div className="col-2 mt-4 ">
                <div className="row course-upper mb-2">
                   <div className="col-4"><Link to={'/courses/'+courseId}>Main</Link></div>
                    <div className="col-4">News</div>
                    <div className="col-4">Marks</div>
                </div>
                <div className="row mb-1 me-1">
    
    <div className="col accordion accordion-flush p-0 " id="main">
                {chapters.map((e,index) =>{
                            return <Chapter props={e}></Chapter>;
                        })}
</div>
</div>
            </div>
                {materialId?<MaterialDetail props={params}></MaterialDetail>:taskId?<TaskDetail props={params}></TaskDetail>:<CourseDetailMain course={course} props={state} chapters={chapters}></CourseDetailMain>}
            <RightActive hh = {"100%"}></RightActive>

            </>

        );
}

function CourseDetailMain (props){
    const {owner,title,description} = props.course
        return (
            <div className="col-8 ps-4 mt-4">
                <div className="row">
                    <div className="col-8 border-bottom border-1">
                        <div className="row mt-4" style={{fontWeight:"bold", fontSize:"15pt"}}>{title}</div>
                        <div className="row pt-1" style={{fontSize:"11pt"}}>Teacher : {owner.last_name+' '+owner.first_name}</div>
                        <div className="row pt-4 pb-3" style={{fontSize:"11pt", color:"#666666"}}>{description}</div>
                    </div>
                    <div className="col-2 border-start ps-5 pt-5  border-bottom border-1" style={{borderColor:"#666666"}}>
                        <div className="row" style={{fontWeight:"bold", fontSize:"13pt"}}>Rating:</div>
                        <div className="row" style={{fontSize:"13pt", color:"#666666"}}>8 / 10</div>
                        <div className="row pt-4" style={{fontWeight:"bold", fontSize:"13pt"}}>Students:</div>
                        <div className="row " style={{fontSize:"13pt", color:"#666666"}}>50</div>
                    </div>
                </div>
                <div className="row pt-3 pb-5 ">

                    <span> <a href="https://cdnimg.rg.ru/img/content/190/36/72/kinopoisk.ru-A-Street-Cat-Named-Bob-2889441_t_650x433.jpg" download="" style={{fontWeight:"bold", fontSize:"15px", color:"#0d0b94"}}> - Rating system </a> </span>
                </div>
                <div className="mb-5">
                {props.chapters.map((s,index)=>{
                    return <ChapterDetail props={s} ind={index}></ChapterDetail>
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

function Chapter ({props}){

    const {title,description,material_set,task_set,id}=props;
        return (
            <>


                
                  <div className="border-0 mb-2  accordion-item ">
                  
    <div className="accordion-header chapter" id={idd(id)} style={{'border-color':color_main[id%4], borderWidth:"1px 1px 1px 10px",borderRadius:"0 4px 4px 0"}}>
    
      <div className="accordion-button border-0 m-0 collapsed" data-bs-toggle="collapse" data-bs-target={idd(id+"_collapse",1)} aria-expanded="false" aria-controls={idd(id+"_collapse")}  >
     
        <span className=" part-style p-0 m-0 ms-2" style={{'color':color_main[id%4]}} ><a href="">{title}</a><br/> <span className="chapter-style" style={{fontWeight:"normal", color:"black", fontSize:"9pt"}}>{description}</span></span>
        
      </div>
      
    </div>
    <div id={idd(id+"_collapse")} className="accordion-collapse collapse" aria-labelledby={idd(id)} data-bs-parent="#main">
      <div className="accordion-body p-0">


      <div className="col accordion accordion-flush p-0 " id={"pik"+id}>
      {material_set.map((e) =>{
                            return <SubChapter id_p={id} id = {e.id} title={e.title} chapter_id={id} props={e}></SubChapter>;
                        })}

          {task_set.map((e) =>{
              return <SubChapter id_p={id} id = {e.id} title={e.title} chapter_id={id} props={e}></SubChapter>;
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
           
            <div className="border-0 mt-2">
            <div className="" id={idd(id+"sub")}>
              <div className="subchapter p-0 pe-3 collapsed" data-bs-toggle="collapse" data-bs-target={idd(id+"_collapse_sub",1)} aria-expanded="false" aria-controls={idd(id+"_collapse_sub")} style={{borderRadius: "0 10px 10px 0"}}>
              
              <div className="row">
                <div className="col-10 ps-4 mt-4 mb-4"><Link to={`/courses/${useParams().course_id}/${props.chapter_id}/${props.props.deadline?'tasks':'materials'}/${id}`}>{props.title}</Link></div>
            </div>
              </div>
            </div>
            <div id={idd(id+"_collapse_sub")} className="accordion-collapse collapse" aria-labelledby={idd(id+"sub")} data-bs-parent={"#pik"+props.id_p}>





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
                    <div className="row part-style mt-3 ps-3" style={{'color':color_main[props.props.id%4],fontWeight: "bold", fontSize:"18px"}}>{props.props.title}</div>
                    <div className="row mb-3 ps-3" style = {{fontSize:"16px"}}>{props.title}</div>
                </div>
                <div className="col my-auto part-style" style={{'color':color_main[props.props.id%4],fontSize:"18px"}}><div className="row justify-content-end pe-4">50%</div></div>
            </div>
            {props.props.material_set.length>0?<SubChapterDetail props={props.props.material_set} title={'Materials'} chapter_id={props.props.id}></SubChapterDetail>:''}
            {props.props.task_set.length>0?<SubChapterDetail props={props.props.task_set} title={'Tasks'} chapter_id={props.props.id}></SubChapterDetail>:''}



            <div className="row mb-3 last-border"></div>

        </>


    );
}

function SubChapterDetail (props){

        return (
            <div className="row subchapter-detail">
                <div className="col-10 subchapter-detail_font pt-2 pb-2  w-100 border-bottom ps-3 mb-3" style={{'backgroundColor':"#c6d4ff3a"}}>{"- " + props.title}</div>
                {props.props.map((e)=>{
                    return <SubChapterTasksDetail props={e} chapter_id={props.chapter_id}></SubChapterTasksDetail>
                })}
            </div>
        );
}

function SubChapterTasksDetail (props){
    const courseId=useParams().course_id
    return (
        <Link to={`/courses/${courseId}/${props.chapter_id}/${props.props.deadline?'tasks':'materials'}/${[props.props.id]}`}>
        <div className="row subchapter_tasks-detail">
                <div className="col-10 ps-3 mb-3">{props.props.title}</div>
                <div className="offset-1 col d-flex justify-content-end ">
                <div className="chapter" style={{borderRadius:"100%",borderColor:"grey", width:"25px", height:"25px"}}>
                    <img style={{transform:"translate(0px, -30%) scale(0.7)"}} src={done}></img>
                </div>
                </div>

        </div>
        </Link>
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


function MaterialDetail(props){
    const {course_id,chapter_id,material_id} = props.props

    const [material,setMaterial] = useState({})
    useEffect(()=>{
        $api.get(`${course_id}/${chapter_id}/materials/${material_id}/`).then(

            res=>{setMaterial(res.data)
                console.log(res.data)}
        )
    },[])


    return (
        <div className="col-8 ps-4 mt-4">
            <h1>{material.title}</h1>
            <p>{material.body}</p>


        </div>
    )

}



function TaskDetail(props){
    const {course_id,chapter_id,task_id} = props.props

    const [task,setTask] = useState({})
    useEffect(()=>{
        $api.get(`${course_id}/${chapter_id}/tasks/${task_id}/`).then(
                        res=>{setTask(res.data)
                            console.log(res.data)
                }
        )
    },[])



    return (
        <div className="col-8 ps-4 mt-4">
            <h1>{task.title}</h1>
            <p>{task.body}</p>
            <p>Till {task.deadline}</p>


        </div>
    )

}
