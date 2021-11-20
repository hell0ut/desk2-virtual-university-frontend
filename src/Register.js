import React,{Component} from "react";
import './css/login.css';

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
        }

    }


    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.email} onChange={(event)=>{
                            this.setState({email:event.target.value})}} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">First name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                       placeholder="Enter email" value={this.state.first_name} onChange={(event)=>{
                                    this.setState({first_name:event.target.value})}} />

                            </div>
                        </div>

                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Middle Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                       placeholder="Enter email" value={this.state.middle_name} onChange={(event)=>{
                                    this.setState({middle_name:event.target.value})}} />

                            </div>


                        </div>

                        <div className="col-4">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Last name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                       placeholder="Enter email" value={this.state.last_name} onChange={(event)=>{
                                    this.setState({last_name:event.target.value})}} />

                            </div>


                        </div>

                    </div>




                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Profile type</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.profile_type} onChange={(event)=>{
                            this.setState({profile_type:event.target.value})}} />

                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Student Card ID</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.student_card_id} onChange={(event)=>{
                            this.setState({student_card_id:event.target.value})}} />

                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Position</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.position} onChange={(event)=>{
                            this.setState({position:event.target.value})}} />

                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                               value={this.state.password} onChange={(event)=>{
                                   this.setState({password:event.target.value})
                        }}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onLoginClick}>Submit</button>
                </form>
            </div>
        );
    }

    onLoginClick = async () =>{
        const response = await fetch('http://127.0.0.1:8000/auth/user/',{method:'POST',
            mode:"cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify(this.state)
            }
            );
        const content = await response.json();
        console.log(response);


    }

}