import {useEffect, useState} from "react";
import $api from "../App/API";
import axios from "axios";
import {base_url} from "../App/API";

export default function SelectForm ({endpoint,setValue,name,filterParams}) {

    const [val,setVal] = useState(0)
    const [options,setOptions] =useState ([{id:1,name:'CHE'}])

    useEffect(()=>{
        axios.get(base_url + endpoint).then(res=>{
            let opts = res.data;
            if (filterParams) opts = opts.filter(function (el){
                console.log(el[filterParams.by].id===filterParams.id, el[filterParams.by].id,filterParams.id);
                return el[filterParams.by].id===filterParams.id;
            })
            opts.unshift({id:-1,name:'_'})
            setOptions(opts)
        })
        .catch()
        },[filterParams])

    return (
        <>
        <div className={'row mt-1'}>
            <span className={'font-monospace'}>Select your {name}</span>
        </div>
        <div className={'row ms-2 me-2'}>
                <select className={'form-select'} value={val || options[0]} onChange={(e)=>{
                    const index = e.target.selectedIndex;
                    const el = e.target.childNodes[index]
                    const option =  el.getAttribute('value');
                    setVal(e.target.value)
                    setValue(parseInt(option))
                }} >
                    {options.map(el=><option value={el.id}>{el.name || el.title}</option>)}
                </select>
        </div>
        </>

    )

}
