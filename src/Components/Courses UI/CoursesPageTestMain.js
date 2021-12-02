import {useEffect, useState} from "react";
import $api from "../App/API";

export default function CoursesPageTestMain(){

    const [courses,setCourses] = useState('')
    const [message,setMessage] = useState('')
    useEffect(()=>{
        $api.get('/courses').
        then(res=>setCourses(JSON.stringify( res.data))).catch(err=>setMessage(err.response.data))
    },[])

    return (
        <>
            {courses}
            {message}
        </>
    );
}