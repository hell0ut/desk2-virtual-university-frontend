import {Component} from "react";

export class Footer extends Component{

    render() {
        return(
            <footer className="border-top border-2 mt-5">
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-1">
                            <div className="row fw-bold">Courses</div>
                            <div className="row">Catalog</div>
                            <div className="row">My courses</div>
                        </div>
                        <div className="col-1">
                            <div className="row fw-bold">Profile</div>
                            <div className="row">Settings</div>
                            <div className="row">My profile</div>
                            <div className="row">Log out</div>
                        </div>
                        <div className="col-1">
                            <div className="row fw-bold">Marks</div>
                            <div className="row">My marks</div>
                        </div>
                        <div className="col-2">
                            <div className="row fw-bold">Contacts</div>
                            <div className="row">E-mail :2desk@gmail.com</div>
                        </div>


                    </div>


                </div>


            </footer>
        );
    }

}