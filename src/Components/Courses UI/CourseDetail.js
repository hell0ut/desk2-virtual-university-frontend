import React, {Component, useState} from "react";
import RightSubMenu from "../Side Menus/SubMenuRight";
export class RightVerticalTabs extends Component{

}

export default function CourseDetail (){


      const handleClick =() => {
        document.getElementById("mySidenav").style.width = "500px";
        
      }
      const [state,setState] =useState({
        name:"Linear Algebra",
        teacher: "L. Baranovska",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
        rating:"8 / 10",
        students:"50",
        chapters:[
            {id:"1",chapter_name:'Introduction', subchapters:[
            {title:'Introduction', tasks:[
                {type: "Lection"},
                {type: "Homework"}
            ]},
            {title:'Vectors', tasks:[
                {type:'Task'}
            ]}
        ]
        },
        {id:"2",chapter_name:'Introduction 2', subchapters:[
            {title:'Algebra', tasks:[
                {type: "Lection"},
                {type: "Homework"}
            ]},
            {title:'Geometry', tasks:[
                {type:'Task'}
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

                
                
                {state.chapters.map((e) =>{
                            return <Chapter props={e}></Chapter>;
                        })}
 {/*               
                    <Chapter index={0} title={'Introduction'}></Chapter>
                    <SubChapter></SubChapter>
                    <Chapter color={'orange'} index={1} title={'Matrices'}></Chapter>
                    <Chapter color={'green'} index={2} title={'Kernel'}></Chapter>
                    <Chapter color={'gray'} index={3} title={'Equations'}></Chapter>
*/}
                

            </div>
            <CourseDetailMain name={state.name} teacher={state.teacher} rating={state.rating} students={state.students} description={state.description}></CourseDetailMain>
            <div id = "puk" className="col-2  d-flex justify-content-end">

                <div className="col">
                <div className="row d-flex justify-content-end m-0 mt-3" style={{height:"50px"}}>
                        <div className=" radius_width_r_tabs deadlines" > </div>
                 </div>
                 <div className="row d-flex justify-content-end m-0" style={{height:"50px"}}>
                        <div className="radius_width_r_tabs exams"  > </div>
                </div>
                <div className="row d-flex justify-content-end m-0" style={{height:"50px"}}>
                        <div className="radius_width_r_tabs schedule"> </div>
                        </div>
                </div>

                <div  className="col border-start border-2 "> <button onClick={handleClick}>Нажми на меня</button> </div>

                <div id="mySidenav" className="col-4 sidenav">
                    <RightSubMenu></RightSubMenu>
        </div>
            </div>

            </>

        );
}

function CourseDetailMain (props){


        return (
            <div className="col-7 ps-4 mt-4">
                <div className="row">
                    <div className="col-8 border-bottom border-1">
                        <div className="row mt-4" style={{fontWeight:"bold", fontSize:"15pt"}}>{props.name}</div>
                        <div className="row pt-1" style={{fontSize:"11pt"}}>Teacher : {props.teacher}</div>
                        <div className="row pt-4 pb-3" style={{fontSize:"11pt", color:"#666666"}}>{props.description}</div>
                    </div>
                    <div className="col-2 border-start ps-5 pt-5  border-bottom border-1" style={{borderColor:"#666666"}}>
                        <div className="row" style={{fontWeight:"bold", fontSize:"13pt"}}>Rating:</div>
                        <div className="row" style={{fontSize:"13pt", color:"#666666"}}>{props.rating}</div>
                        <div className="row pt-4" style={{fontWeight:"bold", fontSize:"13pt"}}>Students:</div>
                        <div className="row " style={{fontSize:"13pt", color:"#666666"}}>{props.students}</div>
                    </div>
                </div>
                <div className="row pt-3 pb-5 ">
                    <img src="" alt="" className='img-fluid'/>
                    <span>Rating system <a href="https://cdnimg.rg.ru/img/content/190/36/72/kinopoisk.ru-A-Street-Cat-Named-Bob-2889441_t_650x433.jpg" download="">текст ссылки</a> </span>
                </div>
                <ChapterDetail title={'Introduction'} index={0}></ChapterDetail>
                <ChapterDetail title={'Matrices'} index={1} color={'orange'}></ChapterDetail>
                <ChapterDetail title={'Kernel'} index={1} color={'green'}></ChapterDetail>

            </div>
            
        );
}


function Chapter (props){

    const id_i =(id) => {
        return "p"+id;  
      }
    const id_a=(id)=> {
        return "#p"+id;  
      }
    const id_ac=(id)=> {
        return "#c"+id;  
      }
    const id_cc= (id)=>{
        return "c"+id;  
      }
    

    const {id,chapter_name,subchapters}=props.props;
        return (
            <>
            <div className="row mb-1 me-1">
            <div className="col-1 chapter-left-col p-0" style={{'background':props.color}}></div>
            <div class="col accordion accordion-flush p-0 " id={id_cc(id)}>
                
                  <div class="accordion-item ">
                  
    <div className="accordion-header chapter" id={id_i({id})} style={{'border-color':"red", borderRadius:"0 5px 5px 0"}}>
      <div className="accordion-button m-0 collapsed" data-bs-toggle="collapse" data-bs-target={id_a(id)} aria-expanded="false" aria-controls={id_i({id})} >
        <span className=" part-style p-0 m-0 ms-2" style={{'color':props.color}} >Part {id}<br/> <span className="chapter-style" style={{fontWeight:"normal", color:"black", fontSize:"9pt"}}>{chapter_name}</span></span>
        
      </div>
      
    </div>
    <div id={id_i(id)} className="accordion-collapse collapse" aria-labelledby={id_i(id)} data-bs-parent={id_ac(id)}>
      <div className="accordion-body p-0">


      
      {subchapters.map((e) =>{
                            return <SubChapter props={e}></SubChapter>;
                        })}

  
  
  </div>
    </div>
  </div>
            </div>
            </div>
            </>

            
        );


}

function SubChapter (props){

        return (
            <div class="accordion-item border-0 mt-2">
            <div class="accordion-header " id="flush-headingOe">
              <div class="accordion-button subchapter p-0 pe-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOe" aria-expanded="false" aria-controls="flush-collapseOe" style={{borderRadius: "0 10px 10px 0"}}>
              
              <div className="row">
                <div className="col-10 ps-4 mt-4 mb-4">{props.props.title}</div>
            </div>
              </div>
            </div>
            <div id="flush-collapseOe" class="accordion-collapse collapse" aria-labelledby="flush-headingOe" data-bs-parent="#flush-collapseOne">
            <div class="accordion-body p-0"> 
              <div class="accordion-body">Placeholder .</div>
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
                    <div className="row part-style mt-3 ps-1" style={{'color':props.color}}>Part {props.index+1}</div>
                    <div className="row chapter-style mb-3 ps-1">{props.title}</div>
                </div>
                <div className="col my-auto part-style" style={{'color':props.color}}><div className="row justify-content-end">50%</div></div>
            </div>
            <SubChapterDetail></SubChapterDetail>
            <div className="row last-border"></div>

        </>


    );
}

function SubChapterDetail (){

        return (
            <div className="row subchapter-detail">
                <div className="col-10 mt-4 mb-4">Lection. Vectors</div>
            </div>
        );

}