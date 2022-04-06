import React ,{Component} from 'react';
import { Divider, Space,Input,Image ,Pagination} from 'antd';
import {ArrowRightOutlined,AudioOutlined } from '@ant-design/icons';
import "../../asste/css/new/Video.css"

const data=[{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},
{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},{
    ul:require("../../asste/images/huiyi.png").default,
    videoul:"E:\e7d760c83240a552cee4d2b9deb07b75.mp4",
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},

]
class Video extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 1,
            pageCount: 6,
            dataList:[],
         };
    }

    onChangePage(pageNumber, pageSize) {
        const { currentPage, pageCount } = this.state
        const page = pageNumber - 1
        let tempList = []
        data.forEach((item, index) => {
        if (index >= page * pageCount && index < pageNumber * pageCount) {
            tempList.push(item)
        }
        })
        this.setState({ dataList: tempList, currentPage: pageNumber })
    }

    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    componentDidMount() {
        const { currentPage, pageCount } = this.state
        const page = currentPage - 1
        let tempList = []
        data.forEach((item, index) => {
        if (index >= page * pageCount && index < currentPage * pageCount) {
            tempList.push(item)
        }
        })
        this.setState({ dataList: tempList })
    }

    render() {
        return (
            <div className="Video-div" >
              {
                 
                 this.state.dataList.map((item,index) => {
                    return( 
                           <div className="Video-div-headline-one" key ={index}> 
                                <div  className="Video-div-headline-one-img"><a href={item.videoul}> <img src={item.ul} width="400px" height="400px" ></img></a> </div>
                                <div className="Video-div-headline-one-text" > 
                                <div className="Video-div-headline-one-text-top"> <span>{item.theme}</span></div>
                                </div>
                                <div className="Video-div-headline-one-time">  
                                    <Divider />
                                    <span className="Video-div-headline-one-time-span" >{item.time} <span className="Video-div-headline-one-time-padding" ></span> <ArrowRightOutlined /> </span>
                                </div>
                            </div>
                )
                })
             
              }
                 <div className="Video-div-VideoList-fy" >  
                <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Video;