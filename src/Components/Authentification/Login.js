import {useState, useContext} from "react";
import {Link, useLocation,useNavigate} from "react-router-dom";
import axios from "axios";
import $api, {base_url} from "../App/API";
import {regContext} from "../../index.js";

export default function Login() {

    const location = useLocation()
    const [email,setEmail] =useState(location.state?location.state.email:'')
    const  [password,setPassword] = useState('')
    const [twoFA,setTwoFA] = useState('')
    const [renderTokenField,setRenderTokenField] = useState(false)
    const [message,setMessage] = useState('')

    const [reg, setReg] = useContext(regContext);
    const navigate = useNavigate()



    const loginUser = () => {
        const user = {email:email,password:password}
        if (twoFA) user['2FA_code'] = twoFA;
        axios.post(base_url+'auth/token/obtain/',user).
        then(res=>{
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);
            setReg('true');
            navigate('/courses')
        }).catch(err=>{
            if (err.response.status===401){
                setRenderTokenField(true);
                setMessage('Code sent to ur email. Confirm pls')
            }

        })

    }

    return (
        <div className="col">
            <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/lotus.png"
                                                    style={{width: '185px'}} alt="logo"/>
                                                    <h4 className="mt-1 mb-5 pb-1">We are 2Desk</h4>
                                            </div>

                                            <form>
                                                <p>{location.state?location.state.message:'Please login to your account'}</p>
                                                <p>{message}</p>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                           placeholder="Phone number or email address" value={email} onChange={(event)=>{
                                                        setEmail(event.target.value)}}/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example11">Username</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22"
                                                           className="form-control" value={password} onChange={(event)=>{
                                                        setPassword(event.target.value)}}/>
                                                    <label className="form-label"
                                                           htmlFor="form2Example22">Password</label>
                                                </div>

                                                {renderTokenField?
                                                    <div className="form-outline mb-4">
                                                        <input type="text" className="form-control"
                                                               placeholder="Your 2FA confirmation code" value={twoFA} onChange={(event)=>{
                                                            setTwoFA(event.target.value)}}/>
                                                        <label className="form-label"
                                                               htmlFor="form2Example11">2FA Token</label>
                                                    </div>
                                                    :''}

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button
                                                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                        type="button" onClick={loginUser}>Log in
                                                    </button>
                                                    <Link to={'/recovery'} className="text-muted">Forgot password?</Link>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <Link to="/register">
                                                        <button type="button" className="btn btn-outline-danger">Create new</button>
                                                    </Link>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">The peoples will soon
                                                that Germany under National Socialism does not desire the
                                                enmity of other peoples. I want once again to be a prophet.
                                                If the international Finance-Jewry inside and outside of Europe
                                                should succeed in plunging the peoples of the earth once again into a world
                                                war, the result will be not the Bolshevization of earth, and thus a Jewish
                                                victory, but the annihilation of the Jewish race in Europe.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}