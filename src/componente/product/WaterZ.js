
import React,{Component} from 'react';
import  "../../asste/css/product/WaterZ.css"

import { Divider ,Menu,Pagination,Image} from 'antd';
const data = [
            {ul: require("../../asste/images/WaterZ/product1.jpg").default,
                texth1:"水污染源在线监测系统",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/WaterZ/product2.jpg").default,
                texth1:"QCD系列水质在线监测远程质控仪",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/WaterZ/product3.jpg").default,
                texth1:"SIA-3000(TCr)水质在线分析仪",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/WaterZ/product3.jpg").default,
                texth1:"SIA-3000(TMn)水质在线分析仪",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/WaterZ/product3.jpg").default,
                texth1:"SIA-3000(TNi)水质在线分析仪",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/WaterZ/product3.jpg").default,
                texth1:"SIA-3000(TN)水质在线分析仪",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/WaterZ/product3.jpg").default,
                texth1:"SIA-3000(TP)水质在线分析仪",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
            ]
class WaterZ extends Component {
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
            <div className="WaterZ-div">
                <div className="WaterZ-div-backg" > 
                <img src={require("../../asste/images/AirZ/AirZ-b.png").default} ></img>
                </div>
                <div className ="WaterZ-div-ul" >
                 <ul style={{ listStyle: "none" }} >
                    {this.state.dataList.map((item, index) => {
                    return (
                        <li key={index}>
                        <div className="WaterZ-div-ul-li" >
                            <div className="WaterZ-div-ul-li-img">
                            <Image width={300} height={200} src={item.ul} />
                            </div>
                            <div className="WaterZ-div-ul-li-text">
                                <h2  style={ {whiteSpace:"nowrap"}}>{item.texth1}</h2>
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
                <div className ="WaterZ-div-fy">
                <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                </div>
            </div>
        );
    }
}

export default WaterZ;