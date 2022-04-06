import React,{Component} from 'react';
import  "../../asste/css/product/AirY.css"
import { Divider ,Menu,Pagination,Image} from 'antd';
const data = [
            {ul: require("../../asste/images/AirY/product1.jpg").default,
                texth1:"CEMS-2000烟气连续在线监测系统",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/AirY/product2.jpg").default,
             texth1:"CEMS-2000 D 烟气超低排放在线监测系统",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
            {ul: require("../../asste/images/AirY/product3.jpg").default,
            texth1:"CEMS-2000 B 烟气超低排放在线监测系统",
            textp2:"",
            texta:"了解更多",
            hrefa:""
          },
            {ul: require("../../asste/images/AirY/product4.jpg").default,
            texth1:"CEMS-2000 VOC挥发性有机物在线监测系统",
            textp2:"",
            texta:"了解更多",
            hrefa:""
            },
            {ul: require("../../asste/images/AirY/product5.jpg").default,
            texth1:"CEMS-4000 VOC挥发性有机物在线监测系统",
            textp2:"",
            texta:"了解更多",
            hrefa:""
        },
        {ul: require("../../asste/images/AirY/product6.jpg").default,
        texth1:"FEMS-1000 VOC 无组织排放VOC监测系统",
        textp2:"",
        texta:"了解更多",
        hrefa:""
        },
        {ul: require("../../asste/images/AirY/product7.jpg").default,
        texth1:"ETMS-200无组织排放在线监测系统",
        textp2:"",
        texta:"了解更多",
        hrefa:""
        },
        {ul: require("../../asste/images/AirY/product8.jpg").default,
        texth1:"Synspec PM 1.0超低颗粒物在线监测系统 ",
        textp2:"",
        texta:"了解更多",
        hrefa:""
        },
        {ul: require("../../asste/images/AirY/product9.jpg").default,
        texth1:"BPM-200大气颗粒物监测仪",
        textp2:"",
        texta:"了解更多",
        hrefa:""
        },
            ]
class AirY extends Component {
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
            <div className="AirY-div">
            <div className="AirY-div-backg" > 
            <img src={require("../../asste/images/AirY/AirZ-b.png").default} ></img>
            </div>
            <div className ="AirY-div-ul" >
                <ul style={{listStyle:"none"}} >
                        {this.state.dataList.map((item, index) => {
                    return (
                        <li key={index}>
                        <div className="AirY-div-ul-li" >
                            <div className="AirY-div-ul-li-img">
                            <Image width={300} height={200} src={item.ul} />
                            </div>
                            <div className="AirY-div-ul-li-text">
                                <h2 >{item.texth1}</h2>
                                <p style={ {whiteSpace:"pre-wrap"}}>{item.textp2}</p>
                                <Divider />
                                <a width="30px" height="20px"> {item.texta}</a>
                            </div>
                        </div>
                        </li>
                    )
                    })}
                </ul>
            </div>
            <div className ="AirY-div-fy">
            <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
            </div>
        </div>
        );
    }
}

export default AirY;