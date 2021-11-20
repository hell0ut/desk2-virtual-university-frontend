import React,{Component} from "react";

export class CourseDetail extends Component{
    render() {
        return (
            <>
            <div className="col-2 mt-4">
                <div className="row course-upper">
                    <div className="col-4">Main</div>
                    <div className="col-4">News</div>
                    <div className="col-4">Marks</div>
                </div>

                <div className="row">
                    <Chapter index={0} title={'Introduction'}></Chapter>
                    <SubChapter></SubChapter>
                    <Chapter color={'orange'} index={1} title={'Matrices'}></Chapter>
                    <Chapter color={'green'} index={2} title={'Kernel'}></Chapter>
                    <Chapter color={'gray'} index={3} title={'Equations'}></Chapter>
                </div>

            </div>
            <CourseDetailMain></CourseDetailMain>
            </>

        );

    }


}

export class CourseDetailMain extends Component{


    render() {
        return (
            <div className="col mt-3">
                <div className="row">
                    <div className="col-8 border-bottom border-3">
                        <div className="row">Linear Algebra</div>
                        <div className="row">Teacher: L</div>
                        <div className="row">В очень приятной и уютной атмосфере задумчивая пара проводит прекрасный вечер. Парню стало немного скучно и он решил заняться сексом с прекрасной девушкой. Сучка была не против, и всего спустя некоторое время молодая девушка раздвинула ноги и дала партнеру отлизать по полной. Пару минут спустя, девушка сняла штаны с возлюбленного и принялась сосать член. Закончив все прелюдии, пара перешла к основному процессу, занимаясь сексом в разных позах. Блондинке очень нравится когда её трахают раком. Став на колени, она жадно сосала член в ожидании спермы в свой рот.</div>
                    </div>
                    <div className="col border-start border-bottom border-3">
                        <div className="row">Rating:</div>
                        <div className="row">8/10</div>
                        <div className="row">Students</div>
                        <div className="row">50</div>
                    </div>
                </div>
                <div className="row">
                    <img src="" alt="" className='img-fluid'/>
                    <span>Rating system</span>
                </div>
                <ChapterDetail title={'Introduction'} index={0}></ChapterDetail>
                <ChapterDetail title={'Matrices'} index={1} color={'orange'}></ChapterDetail>
                <ChapterDetail title={'Kernel'} index={1} color={'green'}></ChapterDetail>

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

            <div className="row mt-1 mb-1 ps-0 chapter" style={{'border-color':this.props.color}}>
                <div className="chapter-left-col p-0 me-2" style={{'background':this.props.color}}></div>
                <div className="col-8 my-auto">
                    <div className="row part-style mt-3 ps-1" style={{'color':this.props.color}}>Part {this.props.index+1}</div>
                    <div className="row chapter-style mb-3 ps-1">{this.props.title}</div>
                </div>
                <div className="col my-auto"><div className="arrow up"></div></div>
            </div>


        );
    }

}

export class SubChapter extends Component{

    render() {
        return (
            <div className="row rounded-2 subchapter">
                <div className="col-10 mt-4 mb-4">Lection. Vectors</div>
                <div className="col"></div>

            </div>
        );
    }
}

export class ChapterDetail extends Component{

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
            <>
                <div className="row mt-1 chapter-detail">
                    <div className="col-8 my-auto">
                        <div className="row part-style mt-3 ps-1" style={{'color':this.props.color}}>Part {this.props.index+1}</div>
                        <div className="row chapter-style mb-3 ps-1">{this.props.title}</div>
                    </div>
                    <div className="col my-auto part-style" style={{'color':this.props.color}}><div className="row justify-content-end">50%</div></div>
                </div>
                <SubChapterDetail></SubChapterDetail>
                <div className="row last-border"></div>
            </>


        );
    }

}

export class SubChapterDetail extends Component{

    render() {
        return (
            <div className="row subchapter-detail">
                <div className="col-10 mt-4 mb-4">Lection. Vectors</div>
                <div className="col"></div>

            </div>
        );
    }
}