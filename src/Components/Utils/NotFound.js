import {Link} from "react-router-dom";

export default function NotFound() {

    return(
        <h1>OOPS PAGE NOT FOUND. GO <Link style={{color: 'red'}} to="/home">HOME</Link></h1>
    );
}