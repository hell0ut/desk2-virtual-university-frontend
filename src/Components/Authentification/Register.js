import React, {Component, useState} from "react";
import '../../css/login.css';
import $api, {base_url} from "../App/API";
import {Navigate, useNavigate} from "react-router-dom";
import Input from "./Input";
import SelectForm from "./SelectForm";
import axios from "axios";


const states = {
    0:'select account type',
    1:'enter reg info',
    2:'enter confirm code and register'}

export default function Register()
{
    const [groupID,setGroupID] = useState(-1)
    const [specID,setSpecID] = useState(-1)
    const [facID,setFacID] = useState(-1)
    const [depID,setDepID] = useState(-1)
    const [renderTokenForm,setRenderTokenForm] = useState(false)
    const [renderRegForm,setRenderRegForm] = useState(false)
    const [renderAccType,setRenderAccType] = useState(true)
    const [regState,setRegState] = useState(0)
    const navigate = useNavigate()
    const [emailSent,setEmailSent] = useState(false)
    const [emailConfirmed, setEmailConfirmed] = useState(false)
    const [message,setMessage] = useState('')
    const [buttonMessage,setButtonMessage] = useState('Continue')

    const [confirmationCode,setConfirmationCode] = useState('');

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [first_name,setFirstName] = useState('')
    const [last_name,setLastName] = useState('')
    const [middle_name,setMiddleName] = useState('')
    const [profile_type,setProfileType] = useState('student')
    const [student_card_id,setStudentCardId] = useState('')
    const [positionID,setPositionID] = useState(-1)
    const [degreeID,setDegreeID] = useState(-1)


    const typeForm = (
        <div className="col my-auto mt-3">
            <input type="radio" value="student" name="profile_type" className="form-check-input ms-5"
                   checked={profile_type==='student'} onChange={e=>setProfileType(e.target.value)}/> Student
            <input type="radio" value="teacher" name="profile_type" className="form-check-input ms-5"
                   checked={profile_type==='teacher'} onChange={e=>setProfileType(e.target.value)}/> Teacher
        </div>
    )

    const TeacherFilds = (
        <>
            <div className={'col'}>
                <SelectForm endpoint='structures/positions/' setValue={setPositionID} name={'position'}/>
            </div>
            <div className={'col'}>
                <SelectForm endpoint='structures/degrees/' setValue={setDegreeID} name={'degree'}/>
            </div>
        </>
    )

    const StudentFields = (
        <>

            <div className="col">
                <Input val={student_card_id} set={setStudentCardId} name="student card ID"/>
            </div>
            {depID!==-1?
                <div className="col">
                    <SelectForm endpoint='structures/groups/' setValue={setGroupID} name={'group'} filterParams={{by:'department',id:depID}}/>
                </div>
            :''
            }




        </>
    )

    const goBack = ()=>{
        setRegState(0)
        setRenderRegForm(false)
        setRenderAccType(true)
        setButtonMessage('Continue')
    }

    const regForm = (
        <>


            <div className="col">
                <Input val={email} set={setEmail} name="email" type="email"/>
            </div>

            <div className="col">
                <Input val={password} set={setPassword} name="password" type="password"/>
            </div>

            <div className="col">
                <Input val={first_name} set={setFirstName} name="first name" type="text"/>
            </div>

            <div className="col">
                <Input val={middle_name} set={setMiddleName} name="Middle name" type="text"/>
            </div>

            <div className="col">

                <Input val={last_name} set={setLastName} name="Last name" type="text"/>

            </div>

            <div className="col">
                <SelectForm endpoint='structures/faculties/' setValue={setFacID} name={'faculty'}/>
            </div>
            {facID!==-1?
                <div className="col">
                    <SelectForm endpoint='structures/departments/' setValue={setDepID} name={'department'} filterParams={{by:'faculty',id:facID}}/>
                </div>
                :''
            }

            {profile_type==='student' ? StudentFields :''}
            {profile_type==='teacher' ? TeacherFilds :''}
        </>
    )

    const registerUser = () => {
        const user = {
            email:email,
            'email-token':confirmationCode,
            first_name:first_name,
            last_name:last_name,
            middle_name:middle_name,
            password:password,
            department:depID,
            profile_type:profile_type
        }
        if (profile_type==='student'){
            user.student_card_id = student_card_id
            user.group = groupID
        }
        else{
            user.position = positionID
            user.scientific_degree = degreeID
        }

        axios.post(base_url+'auth/user/',user).then(res=>{
            navigate('/login',{state:{email:email,message:'You are successfully registered. Please log in=)'}})
        }).catch(err=>{
            setMessage(<h1 style={{color: 'red'}}>{JSON.stringify(err.response.data)}</h1>);
        })
    }



    const handleClick = () => {
        switch (regState){
            case 0:
                setRenderRegForm(true)
                setRenderAccType(false)
                setButtonMessage('Send Registration Code')
                setRegState(1)
                break;
            case 1:
                console.log('I M HERE')
                sendEmail()
                break;
            case 2:
                registerUser()
                break;
            default:

                break;
        }
    }



    const sendEmail = () => {
        axios.post(base_url+'auth/token/send-token/email-confirm/',{email:email}).
        then(res=>{
            setMessage(JSON.stringify(res.data))
            setEmailSent(true);
            setRenderTokenForm(true)
            setButtonMessage('Confirm Code');
            setRegState(2);
        }).catch(err =>{
            setMessage(JSON.stringify(err.data))
            }
        )

    }

    const confirmEmail = () =>{
        $api.post('auth/token/check-token/email-confirm/').then(res=>{
            setEmailConfirmed(true);
            setButtonMessage('Register');
        })


    }

    return (
        <div className="col">
            {message}
            {renderRegForm?
                <div className="row mt-2">
                    <p>You are registering as {profile_type} .Click
                        <button type="button" className="btn btn-dark ms-2 me-2" onClick={goBack}>here</button> to change this
                    </p>
                </div>:
                ''}
            <form>
                <div className="row row-cols-3">
                    {renderAccType ? typeForm :''}
                    {renderRegForm ? regForm :''}
                    {renderTokenForm ? <Input val={confirmationCode} set={setConfirmationCode} name="Email token" type="text"/>: ''}
                </div>

                <button type="button" className="btn btn-primary mt-3" onClick={handleClick}>{buttonMessage}</button>
            </form>
        </div>
    );


}