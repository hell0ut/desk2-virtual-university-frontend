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
                <div className="col">
                    <div className="row vtabs"><span
                        className="tabs tabs1 pt-1 pb-3 ps-0 ms-0 rounded-end"> My Courses</span></div>
                    <div className="row vtabs"><span
                        className="tabs tabs2 pt-1 pb-3 ps-0 ms-0 rounded-end"> To do List</span></div>

                    <div className="row vtabs"><span
                        className="tabs tabs3 pt-1 pb-3 ps-0 ms-0 rounded-end"> My Schedule</span></div>
                </div>
            );

        } else return '';

    }
    render() {
        return (
            <div className="col-1">
                <div className="row">
                    <div className="col-8">
                        {this.state.icons.map((but,index) =>{
                            return <SideMenuButton props={but} index = {index} func={this.updatePhoto}></SideMenuButton>;
                        })}
                    </div>



                    {this.renderTabs(this.props.needToRender)}


                </div>
            </div>
        );
    }
}

export class SideMenuButton extends Component{



    render() {
        const {icon,name} = this.props.props;
        const index = this.props.index;
        return (
            <div className="row justify-content-center side_menu_el" key={name}>
                <div className="col-12"><a href=""><img src={icon} alt={name} onClick={()=>{this.props.func(index)}}
                                                        className="img-fluid float-end"/></a></div>
            </div>
        );
    }
}
