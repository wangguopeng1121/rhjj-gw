import React ,{Component} from 'react';
import "../asste/css/Foot.css"
import { Divider} from 'antd';
import {WhatsAppOutlined,EnvironmentOutlined} from '@ant-design/icons';
class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
                    <div className ="foot-div">
                        <div className="foot-div-t">
                        <span >如想进一步了解相关信息，欢迎您致电我们公司，我们的客服人员将耐心为您解答！</span>  
                        <Divider></Divider>
                        </div>
                        <div  className="foot-div-z">
                            <div className="foot-div-z-info"> 
                            <span className="foot-div-z-info-yw-span1">商务合作</span><span className="foot-div-z-info-yw-span2"></span><span className="foot-div-z-info-yw-span3">  张经理：15302105587</span><br></br>
                            <br></br>
                            <span className="foot-div-z-info-yw-span1">招聘咨询</span> <span className="foot-div-z-info-yw-span2"></span> <span className="foot-div-z-info-yw-span3"> 王女士：15320122587</span><br></br>
                            </div>  
                            <div className="foot-div-z-dz"> <EnvironmentOutlined /><span><a href="https://map.baidu.com/search/%E5%B8%9D%E8%BE%BE%E4%B8%9C%E8%B0%B7%E5%9B%BD%E9%99%85/@13066879.251126345,4705628.424999993,18.16z?querytype=s&da_src=shareurl&wd=%E5%B8%9D%E8%BE%BE%E4%B8%9C%E8%B0%B7%E5%9B%BD%E9%99%85&c=1&src=0&wd2=%E5%A4%A9%E6%B4%A5%E5%B8%82%E4%B8%9C%E4%B8%BD%E5%8C%BA&pn=0&sug=1&l=5&b=(6077939.599963071,979190.6300493199;19840499.59996307,8671478.63004932)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D&sug_forward=32525b788df6b5952b06cef7&device_ratio=1">天津市东丽区一纬路24号 东谷中心 2号楼 601室</a></span><br /></div>
                         </div>
                         <div className="foot-div-i">
                         {/* <img src={require("../asste/images/foot/ma.jpg").default} ></img> */}
                         </div>
                    </div>
        );
    }
}

export default Foot;