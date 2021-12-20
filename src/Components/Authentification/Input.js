import $api from "../App/API";


export default function Input(props){
    return (
        <div className="form-group">
            <label>{props.name}</label>
            <input className="form-control" type={props.type}
                   placeholder={"Enter "+props.name} value={props.val} onChange={e=>props.set(e.target.value)} />
            {props.children}
        </div>
    );
}
