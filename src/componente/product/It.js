import React,{Component} from 'react';
import  "../../asste/css/product/It.css"

import { Divider ,Menu,Pagination,Image} from 'antd';

const data = [{ul: require("../../asste/images/AirZ/airz.png").default,
                texth1:"AQMS-1000常规空气站",
                textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
                texta:"了解更多",
                hrefa:"/consult/water"
             },
             {ul: require("../../asste/images/AirZ/airz.png").default,
             texth1:"AQMS-1000常规空气站",
             textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
             texta:"了解更多",
             hrefa:"/consult/water"
             },
             {ul: require("../../asste/images/AirZ/airz.png").default,
             texth1:"AQMS-1000常规空气站",
             textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
             texta:"了解更多",
             hrefa:"/consult/water"
             },
             {ul: require("../../asste/images/AirZ/airz.png").default,
             texth1:"AQMS-1000常规空气站",
             textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
             texta:"了解更多",
             hrefa:"/consult/water"
             },
             {ul: require("../../asste/images/AirZ/airz.png").default,
             texth1:"AQMS-1000常规空气站",
             textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
             texta:"了解更多",
             hrefa:"/consult/water"
             },
             {ul: require("../../asste/images/AirZ/airz.png").default,
             texth1:"AQMS-1000常规空气站",
                textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
                texta:"了解更多",
                hrefa:"/consult/water"
            },
            {ul: require("../../asste/images/AirZ/airz.png").default,
            texth1:"AQMS-1000常规空气站",
            textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
            texta:"了解更多",
            hrefa:"/consult/water"
             },
            {ul: require("../../asste/images/AirZ/airz.png").default,
            texth1:"AQMS-1000常规空气站",
                textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
                texta:"了解更多",
                hrefa:"/consult/water"
            },
            {ul: require("../../asste/images/AirZ/airz.png").default,
            texth1:"AQMS-1000常规空气站",
            textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
            texta:"了解更多",
            hrefa:"/consult/water"
             },
             {ul: require("../../asste/images/AirZ/airz.png").default,
             texth1:"AQMS-1000常规空气站",
             textp2:"AQMS-1000常规空气质量连续自动监测系统是一种标准的空气质量监测站。它可以监测SO2、NO、NOX、CO、O3、PM2.5、PM10等常规空气污染物。监测方法符合中国环境监测标准、美国EPA认证要求。O3检测采用紫外光度计法、SO2检测采用紫外荧光法，NO/NOx检测采用化学发光法，CO检测采用非色散红外气体相关滤波法，颗粒物检测采用beta射线法。AQMS-1000系统配备有动态校准仪以及零气发生器，可对系统监测仪表进行标定校准，保证监测仪表的测量准确性。",
             texta:"了解更多",
             hrefa:"/consult/water"
             },
            ]
class It extends Component {
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
            <div className="It-div">
                <div className="It-div-backg" > 
                <img src={require("../../asste/images/AirZ/AirZ-b.png").default} ></img>
                </div>
                <div className ="It-div-ul" >
                <ul style={{ listStyle: "none" }} >
                    {this.state.dataList.map((item, index) => {
                    return (
                        <li key={index}>
                        <div className="It-div-ul-li" >
                            <div className="It-div-ul-li-img">
                            <Image width={300} height={200} src={require("../../asste/images/AirZ/airz.png").default} />
                            </div>
                            <div className="It-div-ul-li-text">
                                <h2  style={ {whiteSpace:"nowrap"}}>{item.texth1}</h2>
                                <p style={ {whiteSpace:"pre-wrap"}}>{item.textp2}</p>
                                <Divider />
                                <a width="30px" height="20px" href={item.hrefa} > {item.texta}</a>
                            </div>
                        </div>
                        </li>
                    )
                    })}
                </ul>
                    
                </div>
                <div className ="It-div-fy">
                <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                </div>
            </div>
        );
    }
}

export default It;