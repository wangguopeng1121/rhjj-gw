import React, { Component } from 'react';
import "../../asste/css/product/AirZ.css"

import { Divider, Menu, Pagination,Image } from 'antd';
const data = [
            {ul: require("../../asste/images/AirZ/air1.jpg").default,
                texth1:"EXPEC 2000 环境空气挥发性有机物自动监测系统",
                textp2:"",
                texta:"了解更多",
                hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air2.jpg").default,
             texth1:"EXPEC 2000 环境空气非甲烷总烃自动监测系统",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air3.jpg").default,
             texth1:"EXPEC 2000 环境空气高低碳自动监测系统",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air4.jpg").default,
             texth1:"SUPEC 7030 大气颗粒物无机元素在线监测系统 (在线ICP-MS)",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air5.jpg").default,
             texth1:"EXPEC 1900 傅里叶红外气体遥测仪",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air6.jpg").default,
             texth1:"AQMS-1000常规空气站",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air7.jpg").default,
             texth1:"AQMS-400 一氧化碳分析仪",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air7.jpg").default,
             texth1:"AQMS-500 二氧化硫分析仪",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air7.jpg").default,
             texth1:"AQMS-200动态校准仪",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air8.jpg").default,
             texth1:"PMS-200A自动换膜颗粒物采样器",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
             {ul: require("../../asste/images/AirZ/air9.jpg").default,
             texth1:"GC-TOFMS-100 VOCs在线监测质谱系统",
             textp2:"",
             texta:"了解更多",
             hrefa:""
             },
            ]
 class AirZ extends Component {
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
      <div className="AirZ-div">
        <div className="AirZ-div-backg" >
          <img src={require("../../asste/images/AirZ/AirZ-b.png").default} ></img>
        </div>
        <div className="AirZ-div-ul" >
          <ul style={{ listStyle: "none" }} >
            {this.state.dataList.map((item, index) => {
              return (
                <li key={index}>
                  <div className="AirZ-div-ul-li" >
                    <div className="AirZ-div-ul-li-img">
                    <Image width={300} height={200} src={item.ul} />
                    </div>
                    <div className="AirZ-div-ul-li-text">
                        <h2>{item.texth1}</h2>
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
        <div className="AirZ-div-fy">
          <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
        </div>
      </div>
    );
  }
}

export default AirZ;