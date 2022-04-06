import React ,{Component} from 'react';
import { Divider, Space,Input,Image ,Pagination} from 'antd';
import {ArrowRightOutlined,AudioOutlined } from '@ant-design/icons';
import "../../asste/css/new/Hot.css"
const data=[
    {
    ul:require("../../asste/images/hot/hot1.jpg").default,
    theme:"在钢铁企业超低改造的政策压力下，仁和嘉境科技有限公司推出智慧“测、管、治”一体化钢铁企业服务平台，在全域监测基础上，融合大数据，云计算、物联网等先进技术，打通监测-管制-治理全流程闭环，以自动化、智慧化决策技术提升钢铁企业运行效率，助力钢铁企业达成“超低”验收评级目标。",
    time:"2021-12-28",
    src:""
    },

    {
        ul:require("../../asste/images/hot/hot3.jpg").default,
        theme:"助力“3060目标”仁和嘉境科技“数智双碳”平台 数字化赋能减污降碳",
        time:"2021-10-26",
        src:""
        },

    {
        ul:require("../../asste/images/hot/hot2.jpg").default,
        theme:"助力“碳达峰”、“碳中和”， 仁和能做什么呢？ 用智能化的监测仪器，准确监测环境空气中C02，CH4和CO，利用综合信息平台软件，准确的计算和评价一个区域或城市的碳达峰和碳中和的总量。",
        time:"2021-6-5",
        src:""
        },
        {
            ul:require("../../asste/images/hot/hot4.jpg").default,
            theme:"世界地球日| 保护物种多样性",
            time:"2021-4-22",
            src:""
            },

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
class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 1,
            pageCount: 3,
            dataHeadlineList: [
                {
                    ul:require("../../asste/images/hot/product1.jpg").default,
                    theme:"2022年3月22日是第三十届“世界水日”，联合国确定其宣传主题为“珍惜地下水，珍视隐藏的资源”。3月22日—3月28日是我国第三十五届“中国水周”，今年的活动主题为“推进地下水超采综合治理，复苏河湖生态环境”。",
                    time:"2022-3-22",
                    src:"/Video"
                },
                {
                    ul:require("../../asste/images/hot/product2.jpg").default,
                    theme:"2021年11月8日 深刻学习《中共中央 国务院关于深入打好污染防治攻坚战的意见》",
                    time:"20221-11-8",
                    src:"/Video"
                } ,
            ],
             serch:"",  
            dataList:[]
         };
    }

     /**
 * 改变分页
 */
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
            <div className="Hot-div">
                    <div  className="Hot-div-headline">
                        {
                            this.state.dataHeadlineList.map((item,index) => {
                                return( 
                                   
                                       <div className="Hot-div-headline-one" key ={index}> 
                                            <div  className="Hot-div-headline-one-img"> <img src={item.ul} width="600px" height="500px" ></img> </div>
                                            <div className="Hot-div-headline-one-text" > 
                                            <div className="Hot-div-headline-one-text-top"> <a >{item.theme}</a> </div>
                                            </div>
                                            <div className="Hot-div-headline-one-time">  
                                                <Divider />
                                                <span className="Hot-div-headline-one-time-span" >{item.time} <span className="Hot-div-headline-one-time-padding" ></span> <ArrowRightOutlined /> </span>
                                            </div>
                                        </div>
                            )
                            })
                        }
                    </div>

                    <div  className="Hot-div-search">
                            <span className="Hot-div-search-span">  
                                <Space direction="vertical">
                                    <Search  placeholder="请输入关键字"  enterButton="Search"  size="large"  
                                    suffix={suffix}  onSearch={onSearch} />
                                </Space>
                            </span>
                     </div>
                        <div className="Hot-div-hotList" >   
                            {
                                this.state.dataList.map((items,key)=>{
                                    return(
                                        <div className="Hot-div-hotList-list" >
                                            <div className="Hot-div-hotList-list-img" > 
                                                <Image width={200}  height={200} src={items.ul} />
                                             </div>
                                             <div  className="Hot-div-hotList-list-headline" ><span className="Hot-div-hotList-list-headline-span" >{items.theme}</span> </div>
                                             <div  className="Hot-div-hotList-list-time">   <span className="Hot-div-hotList-list-time-span">{items.time}</span></div> 
                                        </div>
                                    )

                                })
                            }                    
                          
                        </div>
                        <div className="Hot-div-hotList-fy" >  
                            <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                        </div>
             </div>
        );
    }
}

export default Hot;