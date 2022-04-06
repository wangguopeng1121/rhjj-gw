import React,{Component} from 'react';
import  "../../asste/css/product/WaterY.css"

import { Divider ,Menu,Pagination,Image} from 'antd';
const data = [
            {ul: require("../../asste/images/WaterY/product1.jpg").default,
                texth1:"MiniStation-2100小型水质自动监测系统",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/WaterY/product2.jpg").default,
             texth1:"MiniStation-3100微型水质自动监测系统",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
            {ul: require("../../asste/images/WaterY/product3.jpg").default,
            texth1:"MBoat-3000浮船式水质自动监测系统",
            textp2:"",
            texta:"了解更多",
            hrefa:""
            },
            {ul: require("../../asste/images/WaterY/product4.jpg").default,
            texth1:"WCS-3000水质五参数自动监测仪",
            textp2:"",
            texta:"了解更多",
            hrefa:""
            },
            {ul: require("../../asste/images/WaterY/product5.jpg").default,
            texth1:"COD-2000型COD在线分析仪",
            textp2:"",
            texta:"了解更多",
            hrefa:""
             },
            {ul: require("../../asste/images/WaterY/product6.jpg").default,
            texth1:"VOC-3000 型水中挥发性有机物在线分析仪",
            textp2:"",
            texta:"了解更多",
            hrefa:""
            },
            ]

class WaterY extends Component {
    constructor(props) {
        super(props);
        this.state = {
        currentPage: 1,
        pageCount: 9,
        dataList: [],
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
            <div className="WaterY-div">
                <div className="WaterY-div-backg" > 
                <img src={require("../../asste/images/AirZ/AirZ-b.png").default} ></img>
                </div>
                <div className ="WaterY-div-ul" >
                <ul style={{ listStyle: "none" }} >
                    {this.state.dataList.map((item, index) => {
                    return (
                        <li key={index}>
                        <div className="WaterY-div-ul-li" >
                            <div className="WaterY-div-ul-li-img">
                            <Image width={300} height={200} src={item.ul} />
                            </div>
                            <div className="WaterY-div-ul-li-text">
                                <h2 >{item.texth1}</h2>
                                <p style={ {whiteSpace:"pre-wrap"}}>{item.textp2}</p>
                                <Divider />
                                <a width="30px" height="20px"  > {item.texta}</a>
                            </div>
                        </div>
                        </li>
                    )
                    })}
                </ul>
                    
                </div>
                <div className ="WaterY-div-fy">
                <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                </div>
            </div>
        );
    }
}

export default WaterY;