
import React, {useState, useContext} from "react";
import Input from "../Authentification/Input";
import SelectForm from "../Authentification/SelectForm";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from 'markdown-it';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
const chapterContext = React.createContext();


export default function CreateCourse(){
    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [statusCourse, setStatusCourse] = useState("");
    const [sp, setSp] =  useState("");
    const [dep,setDep] = useState("");

    const [dataChapters, setDataChapters] = useState([]);
    
    //const [chapterList, setChapterList] = useState([]);
    
    let index = 0;
    const onAddButtonClick = () => {
        setDataChapters(dataChapters.concat({title:"", description:"", tasks:[],materials:[]}));
        
    }
    return (
      <chapterContext.Provider value={[dataChapters, setDataChapters]}>
        <div className="offset-1 col mt-5">
            
        <div className="row col-4 justify-content-start p-0  mb-5"><span className="my-courses p-0">New course</span></div>
            <div>
            <form className="row col-9 mb-2 mt-3" >
            <div  className="col p-0" style={{height: "50px"}}>  <input type="title"  maxlength="80" className="form-control search_row" id="inputTitle" aria-describedby="titleAria" placeholder="Title..." onChange={e=>setTitle(e.target.value)}></input></div>
            </form>

            <div className="form-floating col-9 mb-3 row">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={e=>setDescr(e.target.value)} style={{height: "50px"}}></textarea>
                <label for="floatingTextarea2" style={{fontSize:"10pt"}}>Description</label>
            </div>


            <div className="row">
            <div className="form-floating col-3 row">
            <SelectForm endpoint='structures/departments/' setValue={setDep} name={'department'}/>
            </div>
            <div className="form-floating col-3 row">
            <SelectForm endpoint='structures/specialities/' setValue={setSp} name={'speciality'}/>
            </div>
            <div className="offset-1 col-3 mt-4">
            <div class="form-check col-1">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                    Ongoing
                </label>
            </div>
            <div class="form-check  col-1">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                <label class="form-check-label" for="flexRadioDefault2">
                Archived
                </label>
            </div>
            </div>
            </div>


            </div>

<div className="mt-5 p-0">
<div className="row col-4 justify-content-start mb-4"><span className="my-courses chapt mb-2">Chapters</span> </div>
           

            {console.log("before ",dataChapters)}
            {dataChapters.map((e,index)=>{return(
                <AddChapter id={index}></AddChapter>)
            })}
           
           
            
            <div type="button" className="mb-5 btn btn-outline-dark btn-rounded" onClick = {onAddButtonClick} data-mdb-ripple-color="dark">
            Add chapter+
            </div>
            
            <div className="row col-10 mb-5">
            <div type="button" className="btn btn-dark btn-rounded"  data-mdb-ripple-color="dark">Create</div>
            </div>
</div>

            </div>
            </chapterContext.Provider>
           
)
/*const createCourse =()=>{
  const course = {
    title:title,
    description:confirmationCode,
    status:first_name,
    department:last_name,
    speciality:middle_name,
    
  const chapter = {
    title:
    description:
    course:
  }


}
}
*/

}






function AddChapter({id}){
    //const [chName, setChTitle]= useState();
    //const [chDescr, setChDescr] = useState();

    const [materials, setMaterials] = useState([]);
    const [tasks, setTasks] = useState(0);
    const [dataChapters, setDataChapters] = useContext(chapterContext);
    const [dict,setDict] = useState({});
    //setDataChapters(DataChapters.concat(dict));

    const [materialsData, setMaterialsData] = useState();


    const changeTitle=(new_value)=>{
      setDict(prev=>{
          return{
            ...prev,
            title: new_value
          }
      })

          if(id!==dataChapters.length-1){
            setDataChapters(dataChapters.slice(0,id).concat(dict).concat(dataChapters.slice(id+1)));
            }else{
              setDataChapters(dataChapters.slice(0,id).concat(dict));
            }
      
      }
        console.log(dataChapters);
    

    const changeDescr=(new_value)=>{
      setDict(prev=>{
          return{
            ...prev,
            description: new_value
          }
      })

      if(id!==dataChapters.length-1){
        setDataChapters(dataChapters.slice(0,id).concat(dict).concat(dataChapters.slice(id+1)));
        }else{
          setDataChapters(dataChapters.slice(0,id).concat(dict));
        }
        //console.log(dataChapters);
  
    }
  
    const deleteItem = ()=>{
    
            if(id!==dataChapters.length-1){
            setDataChapters(dataChapters.slice(0,id).concat(dataChapters.slice(id+1)));
            }else{
              setDataChapters(dataChapters.slice(0,-1));
            }
            
          
      }
    
    
    const onAddButtonClickm = () => {
      const a = dataChapters;
      a[id].materials.push({title:"", body:"", status:false, publishing:"", attachments:[]})
      setDataChapters(a);
      
      setMaterials((prev)=>prev+1);
        //setMaterials(materials.concat(<AddMaterial/>));
        if(document.getElementById(id).style.display !== "block"){
       document.getElementById(id).style.display = "block"; 
       document.getElementById(id+"_dot").style.backgroundColor = "white";
      }
    }


    const onAddButtonClick2 = () => { 
        if(document.getElementById(id).style.display !== "block"){
       document.getElementById(id).style.display = "block"; 
       document.getElementById(id+"_dot").style.backgroundColor = "white"; 
        }else{
            document.getElementById(id).style.display = "none"; 
            document.getElementById(id+"_dot").style.backgroundColor = "rgb(151, 241, 139)";
        } 
    }

    const onAddButtonClick3 = () => {
      if(document.getElementById(id+"_a").style.display !== "block"){
       document.getElementById(id+"_a").style.display = "block";
       document.getElementById(id+"_dot1").style.backgroundColor = "white"; 
      }else{
            document.getElementById(id+"_a").style.display = "none"; 
            document.getElementById(id+"_dot1").style.backgroundColor = "rgb(255, 190, 147)"; 
            
      } 
    }
    const onAddButtonClickt = () => {
      //const new_m = dataChapters;
      //const puk = new_m[id].tasks.push({});
        //console.log("pukk", puk)
        //setNotesDummyData(notesDummyData.map((x) => {
          //if (x.id !== itemId) return x;
          //return { ...x, tag: [...x.tag, selectedTag] };
        //}));
        const a = dataChapters;
        a[id].tasks.push({title:"", body:"", status:false, publishing:"", deadline:"", maxgrade:"", attachments:[]})
        setDataChapters(a);
        
        setTasks((prev)=>prev+1);
        if(document.getElementById(id+"_a").style.display !== "block"){
            document.getElementById(id+"_a").style.display = "block"; 
            document.getElementById(id+"_dot1").style.backgroundColor = "white"}
    }
    return(
      
        <div className="mb-3 mt-3 ">
{console.log(dataChapters)}
<div className="row col-4 justify-content-start p-0  w-100 border-top mb-2 mt-2"><span className="my-courses col-7 mt-3 p-0 ch-1 " style={{ color:"rgb(62, 87, 202)"}}>- Chapter</span ><a className="col mt-4 d-flex text-secondary justify-content-start" onClick={deleteItem}>delete</a></div>
            <form className="row col-8 mb-3 mt-3">
            <div  className="col p-0">  <input type="title"  maxlength="80" className="form-control search_row" id="inputTitle" aria-describedby="titleAria" placeholder="Title..." onChange={e=>changeTitle(e.target.value)}></input></div>
            </form>

            <div className="form-floating col-8 row mb-4">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "50px"}} onChange={e=>changeDescr(e.target.value)} ></textarea>
                <label for="floatingTextarea2" style={{fontSize:"10pt"}}>Description...</label>
            </div>
            <div className="row col-4 justify-content-start p-0  w-100 border-top mb-2 mt-2"><span className="my-courses comp-of-chapter mt-4  mb-3 p-0 ch-1">Components of chapter</span></div>
            <div class="accordion accordion-flush row col-10" id="accordionPanelsStayOpenExample">
                <div class="accordion-item p-0">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <div class="div-materials-tasks  row d-flex  justify-content-center" type="button" aria-expanded="false" >
                <div type="button" class="btn d-flex col-1 justify-content-center but-comp btn-rounded" onClick = {onAddButtonClickm} style={{backgroundColor:"white", border:"1px solid black"}}>
                <span className="align-self-center">Add+</span>
            </div>
                <span className="d-flex col-2 align-self-center">Materials</span>
                <div className="offset-8 col align-self-center " onClick = {onAddButtonClick2}> <div id={id+"_dot"} style={{ height: "20px",width: "20px", backgroundColor: "rgb(151, 241, 139)", borderRadius: "50%", display: "inline-block"}}></div></div>
                </div>
                </h2>
                <div id={id} class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                {dataChapters[id].materials.map((e,index)=>{return(
                <AddMaterial id_el={index} id_ch = {id}></AddMaterial>)})}
                </div>
                </div>
                </div>
                </div>

              
            <div class="mt-3 accordion accordion-flush row col-10" id="accordionPanelsStayOpenExample1">
            <div class="accordion-item p-0 mb-3 ">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne1">


                <div class="div-materials-tasks row d-flex  justify-content-center" type="button" aria-expanded="false" >
                <div type="button" class="btn d-flex col-1 justify-content-center but-comp btn-rounded" onClick = {onAddButtonClickt}  style={{backgroundColor:"white", border:"1px solid black"}}>
            <span className="align-self-center">Add+</span>
            </div>
                  <span className="col-2 d-flex align-self-center">Tasks</span>
                  <div className="offset-8 col align-self-center" onClick = {onAddButtonClick3}> <div id={id+"_dot1"} style={{ height: "20px",width: "20px", backgroundColor: "rgb(255, 190, 147)", borderRadius: "50%", display: "inline-block"}}></div></div>
                </div>

                </h2>
              <div id={id+"_a"} class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne1">
                {console.log("hereee ",dataChapters)}
                <div class="accordion-body">
               {dataChapters[id].tasks.map((e,index)=>{return(
                <AddTask id_el={index} id_ch = {id}></AddTask>)})}
            
        
                </div>
              </div>
            </div>
            </div>



        </div>
    )
}

function AddTask({id_ch, id_el}){
    console.log("in task");
    return(
      <>
      <ComponentBod id_el = {id_el} id_ch = {id_ch} name="- Task" type = "t"></ComponentBod>
      <div className="b-bottom pb-4">
      <DeadlineComp id_el = {id_el} id_ch = {id_ch}/>
      <AttachmentComponent id_el = {id_el} id_ch = {id_ch} type = "t"/>
      </div>
      </>
    
    )
}


function AddMaterial({id_ch, id_el}){
    return(
      <>
      <ComponentBod id_el = {id_el} id_ch = {id_ch} name="- Material" type = "m"></ComponentBod>
      <div className="b-bottom pb-4">
      <AttachmentComponent id_el = {id_el} id_ch = {id_ch} type = "t"/>
      </div>
      </>
    )
}
const addZero =(i)=>{
  if (i < 10) {i = "0" + i}
  return i;
}

const getTimeNow =()=>{
  const today = new Date();
  return addZero(today.getHours())+":"+addZero(today.getMinutes())+":"+addZero(today.getSeconds());
}
const getDateNow =()=>{
  const today = new Date();
  return addZero(today.getHours())+":"+addZero(today.getMinutes())+":"+addZero(today.getSeconds());
}
const getDateTimeNow =()=>{
  const d = getDateNow();
  const t = getTimeNow();
  return d+"T"+t+"Z";
}



function ComponentBod({id_el, id_ch, name, type}){
    const [dataChapters, setDataChapters] = useContext(chapterContext);
    //const [dict, setDict] = useState({});
    
    //const [compTitle, setCompTitle] = useState("");
    const [compBody, setCompBody] = useState("");
    const [isArchived, setIsArchived] = useState(false);


    //const [dateTimePublishing, setDateTimePublishing] = useState(()=>{return getDateTimeNow()});

    const [d, sd] = useState("");
    const [t,st] = useState("00:00");
 

    const mdEditor = React.useRef(null);
    const mdParser = new MarkdownIt();

    const handleEditorChange = ({ html, text }) => {
        const newValue = text.replace(/\d/g, "");
        setCompBody(newValue);
        changeBody(newValue);

      };

    const getUtcTime =(date, time, setdate, settime)=>{
      setdate(date);
      settime(time)
      const utcDateTime = date+"T"+time+":00Z";
      changePublishing(utcDateTime);
    }



    const changeTitle =(new_value)=>{
      console.log(dataChapters);
      const p = dataChapters;
      type ==="t" ? p[id_ch].tasks[id_el].title = new_value : p[id_ch].materials[id_el].title = new_value; 
      setDataChapters(p)
    }
    const changeBody =(new_value)=>{
      const p = dataChapters;
      type ==="t" ? p[id_ch].tasks[id_el].body = new_value : p[id_ch].materials[id_el].body = new_value;
      setDataChapters(p)
    }
    const changePublishing =(new_value)=>{
      const p = dataChapters;
      type ==="t" ? p[id_ch].tasks[id_el].publishing = new_value : p[id_ch].materials[id_el].publishing = new_value;
      setDataChapters(p)
    }
    const changeStatus =(new_value)=>{
     // 
      const nnv = !new_value;
      const p = dataChapters;
      type ==="t" ? p[id_ch].tasks[id_el].status = nnv : p[id_ch].materials[id_el].status = nnv;
      setDataChapters(p)
    }




    //const setTimeNow=()=>{
      //document.getElementById("")
    //}


    return(
        <div>
            <div className="component-style row  mt-3 mb-4">{name}</div>
            <form className="row col-10 mb-4 mt-3">
            <div  className="col p-0">  <input type="title"  maxlength="80" className="form-control search_row" id="inputTitle" aria-describedby="titleAria" placeholder="Title..." onChange={e=>changeTitle(e.target.value)}></input></div>
            </form>
            {console.log(dataChapters)}
          <span className="fw-bold">Body:</span>
          <div className="row p-0 mt-2 ">
            <Editor
        ref={mdEditor}
        value={compBody}
        style={{
          height: "300px"
        }}
        onChange={handleEditorChange}
        renderHTML={text => mdParser.render(text)}
      />
        </div>
<div className="row b-start ps-4  mt-4">
<div class="col-2  mt-3 form-check">
  <input class="mt-3 form-check-input" type="checkbox" onChange={()=>{setIsArchived(prev => {return(!prev)});changeStatus(isArchived)}} id="flexCheckDefault"/>
  <label class="mt-2 form-check-label" for="flexCheckDefault">
    is archived
  </label>
</div>
  </div>
  <div className="row b-start ps-4 mt-5 mb-5">
  <div  className="col-6"><span className="me-2">Date of publishing:</span><input type="date" onChange ={(ev)=>getUtcTime(ev.target.value,t, sd,st)} id="bday" style={{border:"1px solid rgb(159, 159, 167)",borderRadius:"10px", height:"40px", padding:"9px"}}/> </div>

  <div className="col-4 ">
  <label className="me-2" for="startTime">Publish time: </label>
  <input type="time" id="startTime" onChange ={(ev)=>getUtcTime(d,ev.target.value,sd,st)}  style={{border:"1px solid rgb(159, 159, 167)",borderRadius:"10px", height:"40px", padding:"7px"}}/>
  {//<div onClick ={}>now</div>
  }
  </div>
  
  </div>
        </div>
    )
}


function DeadlineComp({id_el, id_ch}){
  const [dataChapters, setDataChapters] = useContext(chapterContext);
  const [dd, sdd] = useState("");
  const [td,std] = useState("00:00");
  //const [dateTimeDeadline, setDateTimeDeadline] = useState(()=>{return getDateTimeNow()});




  const getUtcTime =(date, time, setdate, settime)=>{
    setdate(date);
    settime(time)
    const utcDateTime = date+"T"+time+":00Z";
    changeDeadline(utcDateTime);
  }

  const changeDeadline =(new_value)=>{
    const p = dataChapters;
    p[id_ch].tasks[id_el].deadline = new_value;
    setDataChapters(p)
  }

  const changeMaxGrade =(new_value)=>{
    const p = dataChapters;
    p[id_ch].tasks[id_el].maxgrade = new_value;
    setDataChapters(p)
  }
  return(
    <>
    <div className="row b-start ps-4 mb-5">
  <div  className="col-6"><span className="me-2">Deadline Date:</span><input type="date" onChange ={(ev)=>getUtcTime(ev.target.value,td,sdd,std)} id="bday" style={{border:"1px solid rgb(159, 159, 167)",borderRadius:"10px", height:"40px", padding:"9px"}}/> </div>
  <div className="col-4 ">
  <label className="me-2" for="startTime">Deadline time: </label> 
  <input type="time" id="startTime" onChange ={(ev)=>getUtcTime(dd,ev.target.value,sdd,std)} style={{border:"1px solid rgb(159, 159, 167)",borderRadius:"10px", height:"40px", padding:"7px"}}/>
  </div>
  </div>
  <div className="row mb-5 col-5 b-start"><span className="ms-3 mt-3">Define your max grade: </span><input type="text" className="form-control ms-3 mb-2 mt-2" placeholder="max grade" onChange={(ev)=>changeMaxGrade(ev.target.value)}/></div>
  </>
  )
}

function AttachmentComponent({id_ch,id_el,type}){
  const [dataChapters, setDataChapters] = useContext(chapterContext);
  const [attachments, setAttachments] = useState(0);
  const onAddButtonClick = () => {
      const a = dataChapters;
        a[id_ch].tasks[id_el].attachments.push({attachment:""})
        setDataChapters(a);
        setAttachments(prev=>prev+1);
    //setAttachments(attachments.concat(<AddAttachment/>));
  }
  
  return(
    <>
    <div type="button" class="btn btn-outline-dark btn-rounded" onClick = {onAddButtonClick} data-mdb-ripple-color="dark">+attachment</div>
    {dataChapters[id_ch].tasks[id_el].attachments.map((e,index)=>{return(
                <AddAttachment id_el_el={index} id_ch = {id_ch} id_el = {id_el} type={type}></AddAttachment>)})}
</>
  )
}

function AddAttachment({id_ch,id_el,id_el_el, type}){
  const [dataChapters, setDataChapters] = useContext(chapterContext);
 // const [attachments, setAttachments] = useState(0);
  const changeAtt =(new_value)=>{
    {console.log("s",dataChapters)}
    const p = dataChapters;
    p[id_ch].tasks[id_el].attachments[id_el_el].attachment = new_value;
    setDataChapters(p)
    {console.log("e", dataChapters)}
    //setAttachments(prev=>prev+1);
  }
    return(
      
        <div class="mb-3 mt-4">
          //{console.log(dataChapters)}
        <input class="form-control" type="file" onChange = {(ev)=>changeAtt(ev.target.value)} id="formFile"/>
      </div>
    )
}



