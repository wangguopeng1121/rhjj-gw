import React ,{Component} from 'react';
import { Divider, Space,Input,Image ,Pagination} from 'antd';
import {ArrowRightOutlined,AudioOutlined } from '@ant-design/icons';
import "../../asste/css/new/Characters.css"
const data=[{
    ul:require("../../asste/images/huiyi.png").default,
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},
{
    ul:require("../../asste/images/huiyi.png").default,
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},
{
    ul:require("../../asste/images/huiyi.png").default,
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},
{
    ul:require("../../asste/images/huiyi.png").default,
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
},
{
    ul:require("../../asste/images/huiyi.png").default,
    theme:"仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障仁和科技助力2022北京冬奥会环境空气质量保障",
    time:"2022-1-28",
    src:"/Video"
}
]
const { Search } = Input;
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
 
const onSearch = value => console.log(value);
class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 1,
            pageCount: 3,
            dataHeadlineList: [
                {
                    ul:require("../../asste/images/huiyi.png").default,
                    theme:"仁和科技助力2022北京冬奥会环境空气质量保障",
                    time:"2022-1-28",
                    src:"/Video"
                },
                {
                    ul:require("../../asste/images/huiyi.png").default,
                    theme:"仁和科技助力2022北京冬奥会环境空气质量保障，仁和科技助力2022北京冬奥会环境空气质量保障，仁和科技助力2022北京冬奥会环境空气质量保障",
                    time:"2022-1-28",
                    src:"/Video"
                } ,
            ],
             serch:"",  
            dataList:[]
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

          /**
 * 改变分页
 */

        return (
            
            <div className="Characters-div">
                <div  className="Characters-div-headline">
                    {
                        this.state.dataHeadlineList.map((item,index) => {
                            return( 
                               
                                   <div className="Characters-div-headline-one" key ={index}> 
                                        <div  className="Characters-div-headline-one-img"> <img src={item.ul} width="600px" height="500px" ></img> </div>
                                        <div className="Characters-div-headline-one-text" > 
                                        <div className="Characters-div-headline-one-text-top"> <a href={item.src} >{item.theme}</a> </div>
                                        </div>
                                        <div className="Characters-div-headline-one-time">  
                                            <Divider />
                                            <span className="Characters-div-headline-one-time-span" >{item.time} <span className="Characters-div-headline-one-time-padding" ></span> <ArrowRightOutlined /> </span>
                                        </div>
                                    </div>
                        )
                        })
                    }
                </div>

                <div  className="Characters-div-search">
                        <span className="Characters-div-search-span">  
                            <Space direction="vertical">
                                <Search  placeholder="请输入关键字"  enterButton="Search"  size="large"  
                                suffix={suffix}  onSearch={onSearch} />
                            </Space>
                        </span>
                 </div>
                  

                    <div className="Characters-div-CharactersList" >   
                        {
                            this.state.dataList.map((items,key)=>{
                                return(
                                    <div className="Characters-div-CharactersList-list" >
                                        <div className="Characters-div-CharactersList-list-img" > 
                                            <Image width={200}  height={200} src={items.ul} />
                                         </div>
                                         <div  className="Characters-div-CharactersList-list-headline" ><span className="Characters-div-CharactersList-list-headline-span" >{items.theme}</span> </div>
                                         <div  className="Characters-div-CharactersList-list-time">   <span className="Characters-div-CharactersList-list-time-span">{items.time}</span></div> 
                                    </div>
                                    
                                )

                            })
                        }                    
                    </div>
                    {/* <div className="Characters-div-CharactersList-fy" >  
                        <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                    </div> */}
         </div>
        );
    }
}

export default Characters;