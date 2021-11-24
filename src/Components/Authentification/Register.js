import React,{Component} from "react";
import '../../css/login.css';
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class Register extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            email:'putin@gmail.com',
            password:'aboba',
            first_name:'Makuta',
            last_name:'Vitar',
            middle_name:'Kapshukovich',
            profile_type:'student',
            student_card_id:'12345678',
            position:'daun',
            redirect:false
        }

    }


    render() {
        const { redirect } = this.state;
        if (redirect) return <Navigate to={{pathname:'/confirm-email',state:{email:this.state.email}}}/>;
        return (
            <div className="col me-5">
                {this.state.message}
                <form>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.email} onChange={(event)=>{
                            this.setState({email:event.target.value})}} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label>First name</label>
                                <input className="form-control" aria-describedby="emailHelp"
                                       placeholder="Enter email" value={this.state.first_name} onChange={(event)=>{
                                    this.setState({first_name:event.target.value})}} />

                            </div>
                        </div>

                        <div className="col-4">
                            <div className="form-group">
                                <label >Middle Name</label>
                                <input className="form-control" aria-describedby="emailHelp"
                                       placeholder="Enter email" value={this.state.middle_name} onChange={(event)=>{
                                    this.setState({middle_name:event.target.value})}} />

                            </div>


                        </div>

                        <div className="col-4">
                            <div className="form-group">
                                <label >Last name</label>
                                <input className="form-control" aria-describedby="emailHelp"
                                       placeholder="Enter email" value={this.state.last_name} onChange={(event)=>{
                                    this.setState({last_name:event.target.value})}} />

                            </div>


                        </div>

                    </div>




                    <div className="form-group">
                        <label>Profile type</label>
                        <input className="form-control" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.profile_type} onChange={(event)=>{
                            this.setState({profile_type:event.target.value})}} />

                    </div>


                    <div className="form-group">
                        <label >Student Card ID</label>
                        <input className="form-control" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.student_card_id} onChange={(event)=>{
                            this.setState({student_card_id:event.target.value})}} />

                    </div>


                    <div className="form-group">
                        <label >Position</label>
                        <input className="form-control"  aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.position} onChange={(event)=>{
                            this.setState({position:event.target.value})}} />

                    </div>

                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                               value={this.state.password} onChange={(event)=>{
                                   this.setState({password:event.target.value})
                        }}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
                            <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.onLoginClick}>Submit</button>
                </form>
            </div>
        );
    }

    onLoginClick =  () =>{
        const {email,password,first_name,last_name,middle_name,profile_type,student_card_id,position} = this.state;

        axios.post('http://localhost:8000/auth/user/',{email:email,password:password,first_name:first_name,
        last_name:last_name,middle_name:middle_name,profile_type:profile_type,student_card_id:student_card_id,position:position}).
        then((res) =>{
            //this.setState({message:<h1 style={{color:'green'}}>{JSON.stringify(res.data)}</h1>});
            axios.post('http://127.0.0.1:8000/auth/token/send-token/email-confirm/',{email:this.state.email}).then(
                res2 =>{
                    this.setState({redirect:true});
                }
            )
        }).
        catch(error =>{
            this.setState({message:<h1 style={{color:'red'}}>{JSON.stringify(error.response.data)}</h1>});
        })




    }

}