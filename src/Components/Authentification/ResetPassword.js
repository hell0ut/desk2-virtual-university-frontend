import Input from "./Input";
import {useState} from "react";
import $api, {base_url} from "../App/API";
import {Link} from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {

    const [email,setEmail] = useState('')
    const [token,setToken] = useState('')
    const [password,setPassword] = useState('')

    const [emailSent,setEmailSent] = useState(false)
    const [message,setMessage] = useState('')


    const handleEmailClick = () =>{

        if (!emailSent){
            axios.post(base_url+'auth/token/send-token/password-reset/',{email:email})
                .then(
                    res=>{
                        setEmailSent(true)
                        setMessage('Verification code has been sent to your email. Please enter it below.')
                    }
                )
                .catch(
                    err => {
                        setMessage(JSON.stringify(err.response.data))
                    }
                )
        }
        else {
            axios.post(base_url+'auth/password-reset/',{email:email,token:token,password:password})
                .then(res=>{
                    setMessage(<h3>Password has been recovered. Go to <Link to={'/login'}>Login page</Link></h3>)
                })
                .catch(err=>setMessage(JSON.stringify(err.response.data)))
        }
    }



    return(
        <div className={'col'}>
            <div className="container">


                {message}
                <div className="text-center panel-body">
                    <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F180737477%2F0x0.jpg" alt="reset" className="img-fluid" style={{height:'150px'}}/>
                    <h2 className="text-center">Forgot Password?</h2>
                    <p>You can reset your password here.</p>

                    {emailSent?
                        <>
                            <p>Email: {email}</p>
                            <p>password: {password}</p>
                            <button type="button" className={'btn-dark'} onClick={()=>setEmailSent(false)}>Change data</button>
                        </>:
                        <>
                            <Input val={email} set={setEmail} name="Email" type="email"/>
                            <Input val={password} set={setPassword} name="New Password" type="password"/>
                        </>
                    }

                    {emailSent?<Input val={token} set={setToken} name="Confirmation code" type="text"/>:''}
                    <button type="button" className={'btn-primary'} onClick={handleEmailClick}>{emailSent?'Confirm new password':'Send verification code'}</button>


                </div>

            </div>
        </div>
    )

}