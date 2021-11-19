import React,{Component} from "react";

export class CourseDetail extends Component{
    render() {
        return (
            <div className="col-2 mt-4">
                <div className="row">
                    <div className="col-4">Main</div>
                    <div className="col-4">News</div>
                    <div className="col-4">Marks</div>
                </div>

                <div className="row">
                    <Chapter></Chapter>
                    <SubChapter></SubChapter>
                    <Chapter></Chapter>
                    <Chapter></Chapter>
                    <Chapter></Chapter>
                </div>

            </div>


        );

    }


}


export class Chapter extends Component{

    state = {
        opened:false,
        title:'Introduction',
        subChapters:[
            {title:'Vectors', type:'Lection'},
            {title:'Vectors', type:'Task'},

        ]

    }

    render() {
        return (

            <div className="row mt-1 mb-1 border rounded-2 ps-0">
                <div className="col-1 course-part"></div>
                <div className="col-8">
                    <div className="row">Part 1</div>
                    <div className="row">Introduction</div>
                </div>
                <div className="col"><div className="arrow up"></div></div>
            </div>


        );
    }

}

export class SubChapter extends Component{

    render() {
        return (
            <div className="row rounded-2" style={{background:'gray'}}>
                <div className="col-8">Lection. Vectors</div>
                <div className="col rounded-circle"></div>

            </div>
        );
    }
}