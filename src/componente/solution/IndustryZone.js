import React ,{Component,useState} from 'react';
import { Divider ,Image ,Button} from 'antd';
import "../../asste/css/solution/IndustryZone.css"
class IndustryZone extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                 <div className="IndustryZone-div-top">
                     <div className="IndustryZone-div-top-h1"> <h1  >环保管家技术与服务解决方案</h1></div>

                     <div className="IndustryZone-div-top-top">
                        <div className="IndustryZone-div-top-top-img">
                        <img src={require("../../asste/images/solution/IndustryZone/gj.jpg").default}  height="400px" width="500px" ></img>
                        </div>
                        <div className="IndustryZone-div-top-top-text" > 
                        <br/>
                            <h2>概述：</h2>
                           <p>面对目前工业园区考核达标的管理目标、提升安全与环保管控能力的需求，仁和嘉境科技建立园区综合服务平台，为园区的长期发展定位与产业结构优化提供顶层规划设计服务。 基于物联网技术采集与融合园区生产安全、环保、应急、能源、消防多部门数据，提供智慧园区数据运营服务、园区大气污染管控达标服务、园区污染水防治环保管家服务、园区企业合规排放等主专项主题服务，为园区应急防控、污染预警、溯源追踪、科学减排、靶向治理提供技术抓手；为企业提供专业安环一企一册，节能提效、绿色发展的长效保障；构建生态可视化领导驾驶舱，全方位呈现园区生态、经济、节能、应急等综合绩效指标与产业优化建议，为园区腾笼换鸟、经济增长提供周期性管理咨询服务。 应用场景：园区安环现状调研评估、园区日常监管、污染事件应急溯源、园区管控成果评估等。</p>
                                    <p ><strong>...</strong></p>
                                    <Button type="primary" ><a>Click  Me</a></Button>
                        </div>
                     </div>

                    
                     <Divider  orientation="left">方案概述</Divider>
                     <div className="IndustryZone-div-top-gaishu" >
                            <div className="IndustryZone-div-top-gaishu-img">
                                <img src={require("../../asste/images/solution/gaishu.jpg").default}></img>
                            </div> 
                            <div  className="IndustryZone-div-top-gaishu-p">
                                <br ></br> <br ></br>
                                <p>
面对目前工业园区考核达标的管理目标、提升安全与环保管控能力的需求，仁和嘉境科技建立园区综合服务平台，为园区的长期发展定位与产业结构优化提供顶层规划设计服务。基于物联网技术采集与融合园区生产安全、环保、应急、能源、消防多部门数据，提供智慧园区数据运营服务、园区大气污染管控达标服务、园区污染水防治环保管家服务、园区企业合规排放等主专项主题服务，为园区应急防控、污染预警、溯源追踪、科学减排、靶向治理提供技术抓手；为企业提供专业安环一企一册，节能提效、绿色发展的长效保障；构建生态可视化领导驾驶舱，全方位呈现园区生态、经济、节能、应急等综合绩效指标与产业优化建议，为园区腾笼换鸟、经济增长提供周期性管理咨询服务。应用场景：园区安环现状调研评估、园区日常监管、污染事件应急溯源、园区管控成果评估等。</p> 
                            </div>
                    </div>
                    <br></br>   <br></br>
                    <Divider orientation="left">方案构成</Divider>
                    <br></br>
                    <div className="IndustryZone-div-top-goucheng" >
                            <div className="IndustryZone-div-top-goucheng-img">
                                <img src={require("../../asste/images/solution/goucheng.jpg").default}></img>
                            </div> 
                            <div  className="IndustryZone-div-top-goucheng-r">
                              <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                                <h3>环保管家</h3>
                                <div className ="IndustryZone-div-top-goucheng-r-img">
                                     <div className ="IndustryZone-div-top-goucheng-r-img-app" > <APP /> </div>
                                </div>
                             </div>  
                     </div>
                     <Divider orientation="left">方案特点</Divider>
                     <div className="IndustryZone-div-top-tedian" >
                            <div className="IndustryZone-div-top-tedian-img">
                                <img src={require("../../asste/images/solution/tedian.jpg").default}></img>
                            </div> 
                            <div  className="IndustryZone-div-top-tedian-p">
                                <br ></br> <br ></br>
                                <p>数据融合：打破各自为政、信息封锁、职能交叉重叠的传统状态，构建生产安全、环保、应急、能源、消防、安防多交互一体化的园区管理模式；
立体监测：全覆盖的立体监测网为智慧园区数据挖掘、决策应用提供快速、精准、全面的感知数据，提供执法、监管、规划、调控不同业务的量化数据抓手；
管理精细化：建立一企一册，依托企业监测数据、多维分析结果等为企业提供自检自查、预检预控、排名评价等功能，助力园区精细化管理；
生态可视化：构建生态可视化领导驾驶舱，全方位呈现园区生态、经济、节能、应急等综合绩效指标与产业优化建议，助力管理者决策。</p> 
                            </div>
                    </div>
                    <Divider orientation="left">应用案例</Divider>
                    <div className="IndustryZone-div-top-anli" >
                            <div className="IndustryZone-div-top-anli-img">
                                <img src={require("../../asste/images/solution/anli.jpg").default}></img>
                            </div> 
                            <div  className="IndustryZone-div-top-anli-p">
                                <br ></br> <br ></br>
                                {/* <p><ol><li></li></ol></p>  */}
                            </div>
                    </div>


                    </div>
                       
            </div>
        );
    }
}


const APP = () => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Image
          preview={{ visible: false }}
          width={800}
          height={459}
          src={require("../../asste/images/solution/IndustryZone/zl.jpg").default}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            <Image  src={require("../../asste/images/solution/IndustryZone/zl.jpg").default} />
            <Image  src={require("../../asste/images/solution/IndustryZone/nr.jpg").default} />
            <Image  src={require("../../asste/images/solution/IndustryZone/td.jpg").default} />
          
          </Image.PreviewGroup>
        </div>
      </>
    );
  };

export default IndustryZone;