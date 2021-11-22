import React,{Component} from "react";
import settings from "./img/settings.png";
import profile from "./img/profile.png"
import back from "./img/log out.png"
import marks from "./img/marks.png"



export class SubMenu extends Component{
    state = {icons: [
                {icon:settings,name:'settings'},
                {icon:marks,name:'marks'},
                {icon:profile,name:'profile'},
                {icon:back,name:'back'}
        ]};


    updatePhoto = (idx)=>{
        let arr = this.state.icons;
        arr[idx].icon=back;
        this.setState({icons:arr});
    }

    renderTabs = (needToRender) => {
        if (needToRender) {
            return (
                <div className="col-1 p-0">
                    <div className="pt-5 me-4 h-100 border-end border-2">
                    <div className="vtabs1 d-flex justify-content-end"><span
                        className="tabs tabs1 d-flex justify-content-center align-items-center  "> My Courses</span></div>
                    <div className="vtabs d-flex justify-content-end"><span
                        className="tabs tabs2 d-flex justify-content-center align-items-center "> To do List</span></div>

                    <div className="vtabs d-flex justify-content-end"><span
                        className="tabs tabs3 d-flex justify-content-center align-items-center "> My Schedule</span></div>
                </div>
                </div>
            );

        } else return "";
        

    }
    render() {
        return (
            <>
            <div className="col-1">
                    <div className="ps-1 col-12">
                        {this.state.icons.map((but,index) =>{
                            return <SideMenuButton props={but} index = {index} func={this.updatePhoto}></SideMenuButton>;
                        })}
                    </div>
                    

                    </div>

                    {this.renderTabs(this.props.needToRender)}


                </>
            
        );
    }
}

export class SideMenuButton extends Component{



    render() {
        const {icon,name} = this.props.props;
        const index = this.props.index;
        return (
            <div className="row side_menu_el" key={name}>
                <div className="col-12 d-flex justify-content-center" ><a href=""><img src={icon} alt={name} onClick={()=>{this.props.func(index)}}
                                                        className="img-fluid float-end"/></a></div>
            </div>
        );
    }
}
