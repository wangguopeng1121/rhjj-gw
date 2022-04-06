import React,{Component} from 'react';
import  "../../asste/css/product/SafetyZ.css"
import { Divider ,Menu,Pagination,Image} from 'antd';
const data = [
    {ul: require("../../asste/images/SafetyZ/product1.jpg").default,
        texth1:"短信电话报警主机ROC-K6-4G",
        textp2:"",
        texta:"了解更多",
        hrefa:"",
     },
     {ul: require("../../asste/images/SafetyZ/product2.jpg").default,
     texth1:"智能声光报警器ROC-M10",
     textp2:"",
     texta:"了解更多",
     hrefa:"",
  },
  {ul: require("../../asste/images/SafetyZ/product3.jpg").default,
  texth1:"嵌入式动力环境监控主机ROC-T系列",
  textp2:"",
  texta:"了解更多",
  hrefa:"",
},
{ul: require("../../asste/images/SafetyZ/product4.jpg").default,
texth1:"指纹密码刷卡门禁一体机ROC-F12",
textp2:"",
texta:"了解更多",
hrefa:"",
},
{ul: require("../../asste/images/SafetyZ/product5.jpg").default,
texth1:"ETC智能机柜",
textp2:"",
texta:"了解更多",
hrefa:"",
},
{ul: require("../../asste/images/SafetyZ/product6.jpg").default,
texth1:"门禁密码刷卡读卡器ROC-ACC-A104",
textp2:"",
texta:"了解更多",
hrefa:"",
},
{ul: require("../../asste/images/SafetyZ/product7.jpg").default,
texth1:"防爆摄像头",
textp2:"",
texta:"了解更多",
hrefa:"",
},
{ul: require("../../asste/images/SafetyZ/product8.jpg").default,
texth1:"防爆摄像头",
textp2:"",
texta:"了解更多",
hrefa:"",
},
    ]

class SafetyZ extends Component {
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
            <div className="SafetyZ-div">
                <div className="SafetyZ-div-backg" > 
                <img src={require("../../asste/images/AirZ/AirZ-b.png").default} ></img>
                </div>
                <div className ="SafetyZ-div-ul" >
                 <ul style={{ listStyle: "none" }} >
                    {this.state.dataList.map((item, index) => {
                    return (
                        <li key={index}>
                        <div className="SafetyZ-div-ul-li" >
                            <div className="SafetyZ-div-ul-li-img">
                            <Image width={300} height={200} src={item.ul} />
                            </div>
                            <div className="SafetyZ-div-ul-li-text">
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
                <div className ="SafetyZ-div-fy">
                <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                </div>
            </div>
        );
    }
}

export default SafetyZ;