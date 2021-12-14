import '../../css/profile.css'
import {useEffect, useState} from "react";
import $api from "../App/API";
import SelectForm from "../Authentification/SelectForm";
import Input from "../Authentification/Input";


export default function Profile() {

    //user obj
    const [userInfo,setUserInfo] = useState({
        "group": {
            "id": 1,
            "speciality": {
                "id": 1,
                "title": "Computer Science",
                "code": 122
            },
            "department": {
                "id": 1,
                "faculty": {
                    "id": 1,
                    "title": "Institute of Applied System Analysis",
                    "description": "",
                    "abbreviation": "IASA"
                },
                "title": "Super Pacanchiki",
                "description": "",
                "abbreviation": "SP"
            },
            "name": "ДА-92",
            "study_year": 3
        },
        "student_card_id": 12345678,
        "id": 2,
        "department": {
            "id": 1,
            "faculty": {
                "id": 1,
                "title": "Institute of Applied System Analysis",
                "description": "",
                "abbreviation": "IASA"
            },
            "title": "Super Pacanchiki",
            "description": "",
            "abbreviation": "SP"
        },
        "last_login": "2021-12-13T17:14:29.277048Z",
        "first_name": "Владислав",
        "last_name": "Поплавський",
        "middle_name": "Olegovich",
        "email": "vlad.poplavsckyi@gmail.com",
        "created": "2021-12-13T15:32:03.391825Z",
        "edited": "2021-12-13T17:14:29.277212Z",
        "is_active": true,
        "is_admin": false,
        "email_confirmed": true,
        "twoFA_enabled": true
    })
    const [message,setMessage] = useState('')

    //2FA
    const [FA,setFA] = useState('')
    const [FAeditMode,setFAeditMode] = useState(false)


    //password
    const [passwordOld,setPasswordOld] = useState('')
    const [passwordNew,setPasswordNew] = useState('')
    const [passEditMode,setPassEditMode] = useState(false)

    //email
    const [editEmailMode,setEditEmailMode] = useState(false)
    const [newEmail,setNewEmail] = useState('')
    const [token,setToken] =useState('')
    const [emailSent,setEmailSent] = useState(false)

    const editEmail = () =>{

        const handleEmailClick = () =>{

            if (!emailSent){
                $api.post('auth/token/send-token/email-confirm/',{email:newEmail})
                    .then(
                        res=>{
                            setEmailSent(true)
                        }
                    )
                    .catch(
                        err => {
                            setMessage(JSON.stringify(err.request.data))

                        }
                    )
            }
            else {
                $api.post('auth/user/change-email/',{email:newEmail,token:token})
                    .then(res=>{
                        setEditEmailMode(false)
                        setUserInfo(prev=>{return {...prev,...{email:newEmail}}})
                        setMessage('Email has been changed successfully')
                    })
                    .catch(err=>setMessage(JSON.stringify(err.request.data)))
            }
        }


        return(
            <>
                {emailSent
                    ?
                    <div className="col">
                        <div className="row">
                        <h6 className="text-muted f-w-400">
                            {newEmail}
                        </h6>
                        <button className="btn-dark" onClick={()=>setEmailSent(false)}>Edit</button>
                        </div>
                        <div className="row">
                            <Input val={token} set={setToken} name="Token" type="text"/>
                        </div>
                    </div>
                    :<Input val={newEmail} set={setNewEmail} name="New email" type="text"/>
                }
                <button className="btn-primary" onClick={handleEmailClick}>{emailSent?'Confirm email':'Send confirmation code'}</button>





            </>

        )

    }

    const edit2FA = () =>{

        const options = ['Enabled','Disabled']

        return                 (
            <>
                <select className={'form-select'} value={FA} onChange={(e)=>{

                    setFA(e.target.value)
                }} >
                    {options.map(el=><option value={el}>{el}</option>)}
                </select>

                <button type="button" className={'btn-primary'} onClick={()=>{
                    $api.patch('auth/user/edit/',{twoFA_enabled: (FA === 'Enabled')})
                        .then(res=> setFAeditMode(false))
                }}>Confirm</button>
            </>

        )


    }
    const editPassword = () =>{
        return(
            <>
                {message}
                <Input val={passwordOld} set={setPasswordOld} name="Old password" type="password"/>
                <Input val={passwordNew} set={setPasswordNew} name="New password" type="password"/>
                <button type="button" className={'btn-primary'} onClick={()=>{
                    $api.post('auth/user/change-password/',{current_password:passwordOld,new_password:passwordNew}).then(
                        res=>setMessage('Password has changed successfully')
                    ).catch(
                        err =>setMessage(JSON.stringify(err.response.data))
                    )
                }}>Confirm</button>
            </>

        )



    }



    useEffect(()=>{
        $api.get('auth/user/').then((res2)=>{
            setUserInfo(res2.data)
            setFA(res2.data.twoFA_enabled?'Enabled':'Disabled')
        });
    }, [])

    return (
    <div className="col">
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col">
                        <div className="card user-card-full">
                            <div className="row m-l-0 m-r-0">
                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                    <div className="card-block text-center text-white">
                                        <div className="m-b-25"><img
                                            src="https://img.icons8.com/bubbles/100/000000/user.png"
                                            className="img-radius" alt="User-Profile-Image"/></div>
                                        <h6 className="f-w-600">{userInfo.last_name} {userInfo.first_name} {userInfo.middle_name}</h6>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-block">
                                        {message}
                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">University Info</h6>
                                        <div className="row row-cols-3">
                                            <Record name={'Group'} val={userInfo.group.name}/>
                                            <Record name={'Department'} val={userInfo.group.department.abbreviation}/>
                                            <Record name={'Faculty'} val={userInfo.group.department.faculty.abbreviation}/>
                                            <Record name={'Study year'} val={userInfo.group.study_year}/>
                                            <Record name={'Speciality'} val={`${userInfo.group.speciality.code} ${userInfo.group.speciality.title}`}/>
                                            <Record name={'Student Card ID'} val={userInfo.student_card_id}/>
                                        </div>

                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Account settings</h6>
                                        <div className="row row-cols-2">
                                            <Record name={'Email'} val={userInfo.email} editFunc={editEmail} editMode={editEmailMode} setEditMode={setEditEmailMode}/>
                                            <Record name={'2FA Authentication'} val={FA} editFunc={edit2FA} editMode={FAeditMode} setEditMode={setFAeditMode}/>
                                            <Record name={'Password'} val={'*********'} editFunc={editPassword} editMode={passEditMode} setEditMode={setPassEditMode}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const Record = ({name,val,editFunc,editMode,setEditMode})=>{


    return (
        <div className="col">
            <p className="m-b-10 f-w-600">{name}</p>
            <div className="row justify-content-start">

                {editMode
                    ?
                    (editFunc?editFunc():'')
                    :
                    <div className="col">
                        <h6 className="text-muted f-w-400">
                            {val}

                            {editFunc
                                ?
                                <img src="https://findicons.com/files/icons/99/office/256/edit.png"
                                     alt="edit" className="img-fluid "
                                     style={{height:'20px',width:'auto',cursor:'pointer'}}
                                     onClick={() =>{setEditMode(true)}}/>

                                :''
                            }

                        </h6>
                    </div>
                }
            </div>

        </div>)
}