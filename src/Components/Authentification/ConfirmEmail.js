import {Component} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

export class ConfirmEmail extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:props.email,
            confirmation_code:'',
            message:'',
            redirect:false
        }
    }

    render() {
        if (!this.state.email){
            console.log(this.props.location);
            return <Navigate  message="You don't have access to this page. Please first sign in pls" to={{
                pathname:'/login',
            }
            }/>;


        }

        if (this.state.redirect){
            return <Navigate to="/courses"></Navigate>;
        }

        return (
            <div className="col">
                You have successfully registered.Now enter a code from your email please.
                <p>Your email is {this.state.email}</p>
                <p></p>
                {this.state.message}
                <form>
                    <input type="text" value={this.state.confirmation_code}  onChange={(event)=>{
                        this.setState({confirmation_code:event.target.value})}}/>
                    <label>Your code</label>
                    <button className="btn-primary" type="button" onClick={this.sendConfirmationCode}>Confirm</button>
                </form>
            </div>
        );
    }

    sendConfirmationCode = () =>{
        axios.post('http://127.0.0.1:8000/auth/user/confirm-email/',{email:this.state.email,token:this.state.confirmation_code}).then(
            (res) => {
                this.setState({message:<h2 className="text-primary">{JSON.stringify(res.data)}</h2>});
            }
        ).catch(
            (error) =>{
                this.setState({message:<h2 className="text-capitalize">{JSON.stringify(error.data)}</h2>});
            }
        )

    }
}