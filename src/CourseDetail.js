import React,{Component} from "react";
import {RightSubMenu} from "./SubMenuRight";
export class RightVerticalTabs extends Component{

}

export class CourseDetail extends Component{


      handleClick() {
        document.getElementById("mySidenav").style.width = "500px";
        
      }
      state={
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
    }
       
    render() {
        return (
            <>
            <div className="col-2 mt-4 ">
                <div className="row course-upper mb-2">
                    <div className="col-4">Main</div>
                    <div className="col-4">News</div>
                    <div className="col-4">Marks</div>
                </div>

                
                
                {this.state.chapters.map((e) =>{
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
            <CourseDetailMain name={this.state.name} teacher={this.state.teacher} rating={this.state.rating} students={this.state.students} description={this.state.description}></CourseDetailMain>
            <div id = "puk" className="col-2  d-flex justify-content-end">

                <div className="col">
                <div class="row d-flex justify-content-end m-0 mt-3" style={{height:"50px"}}>
                        <div className=" radius_width_r_tabs deadlines" > </div>
                 </div>
                 <div class="row d-flex justify-content-end m-0" style={{height:"50px"}}>
                        <div className="radius_width_r_tabs exams"  > </div>
                </div>
                <div class="row d-flex justify-content-end m-0" style={{height:"50px"}}>
                        <div className="radius_width_r_tabs schedule"> </div>
                        </div>
                </div>

                <div  className="col border-start border-2 "> <button onClick={this.handleClick}>Нажми на меня</button> </div>

                <div id="mySidenav" class="col-4 sidenav">
                    <RightSubMenu></RightSubMenu>
        </div>
            </div>

            </>

        );

    }


}

export class CourseDetailMain extends Component{


    render() {
        return (
            <div className="col-7 ps-4 mt-4">
                <div className="row">
                    <div className="col-8 border-bottom border-1">
                        <div className="row mt-4" style={{fontWeight:"bold", fontSize:"15pt"}}>{this.props.name}</div>
                        <div className="row pt-1" style={{fontSize:"11pt"}}>Teacher : {this.props.teacher}</div>
                        <div className="row pt-4 pb-3" style={{fontSize:"11pt", color:"#666666"}}>{this.props.description}</div>
                    </div>
                    <div className="col-2 border-start ps-5 pt-5  border-bottom border-1" style={{borderColor:"#666666"}}>
                        <div className="row" style={{fontWeight:"bold", fontSize:"13pt"}}>Rating:</div>
                        <div className="row" style={{fontSize:"13pt", color:"#666666"}}>{this.props.rating}</div>
                        <div className="row pt-4" style={{fontWeight:"bold", fontSize:"13pt"}}>Students:</div>
                        <div className="row " style={{fontSize:"13pt", color:"#666666"}}>{this.props.students}</div>
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
}


export class Chapter extends Component{
    id_i(id) {
        return "p"+id;  
      }
    id_a(id) {
        return "#p"+id;  
      }
    id_ac(id) {
        return "#c"+id;  
      }
    id_cc(id) {
        return "c"+id;  
      }
    

    render() {
        const {id,chapter_name,subchapters}=this.props.props;
        return (
            <>
            <div className="row mb-1 me-1">
            <div className="col-1 chapter-left-col p-0" style={{'background':this.props.color}}></div>
            <div class="col accordion accordion-flush p-0 " id={this.id_cc(id)}>
                
                  <div class="accordion-item ">
                  
    <div class="accordion-header chapter" id={this.id_i({id})} style={{'border-color':"red", borderRadius:"0 5px 5px 0"}}>
      <div class="accordion-button m-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={this.id_a(id)} aria-expanded="false" aria-controls={this.id_i({id})} >
        <span class=" part-style p-0 m-0 ms-2" style={{'color':this.props.color}} >Part {id}<br/> <span className="chapter-style" style={{fontWeight:"normal", color:"black", fontSize:"9pt"}}>{chapter_name}</span></span>
        
      </div>
      
    </div>
    <div id={this.id_i(id)} class="accordion-collapse collapse" aria-labelledby={this.id_i(id)} data-bs-parent={this.id_ac(id)}>
      <div class="accordion-body p-0"> 


      
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

}

export class SubChapter extends Component{

    render() {
        return (
            <div class="accordion-item border-0 mt-2">
            <div class="accordion-header " id="flush-headingOe">
              <div class="accordion-button subchapter p-0 pe-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOe" aria-expanded="false" aria-controls="flush-collapseOe" style={{borderRadius: "0 10px 10px 0"}}>
              
              <div className="row">
                <div className="col-10 ps-4 mt-4 mb-4">{this.props.props.title}</div>


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
}

export class ChapterDetail extends Component{

    state = {
        opened:false,
        title:'Introduction',
        subChapters:[
            {title:'Vectors', type:'Lection'},
            {title:'Vectors', type:'Task'},

        ]

    }

    render() {
        return (
            <>
                <div className="row mt-1 chapter-detail">
                    <div className="col-8 my-auto">
                        <div className="row part-style mt-3 ps-1" style={{'color':this.props.color}}>Part {this.props.index+1}</div>
                        <div className="row chapter-style mb-3 ps-1">{this.props.title}</div>
                    </div>
                    <div className="col my-auto part-style" style={{'color':this.props.color}}><div className="row justify-content-end">50%</div></div>
                </div>
                <SubChapterDetail></SubChapterDetail>
                <div className="row last-border"></div>
                
            </>


        );
    }

}

export class SubChapterDetail extends Component{

    render() {
        return (
            <div className="row subchapter-detail">
                <div className="col-10 mt-4 mb-4">Lection. Vectors</div>
            </div>
        );
    }
}