import React ,{Component} from 'react';
import "../asste/css/Software.css"
import { Divider,Image,Pagination} from 'antd';
import Foots from './Foots';

const data=[
          {
            ul:require("../asste/images/software/product1.jpg").default,
            theme:"污染源监测设备动态管控系统软件综合利用物联网、大数据、监测数据智能分析模型，在现有污染源自动监控系统的基础上，改进自动监测数据监控方式，实现自动监测设备监测数据、工作参数、运行状态“三同时”监控，从技术上屏蔽通过软件进行污染源自动监控数据作假行为，在减轻环境监测、监察工作量的同时，实现对污染源自动监控设备的有效监管，提高在线监测数据质量。",
            time:"",
          },
          {
            ul:require("../asste/images/software/product2.png").default,
            theme:"针对工业园区排放的大气污染物组分具有浓度较高、成分复杂、部分物种同源、难溯源等特点，仁和嘉境开发了一套高时空分辨率预警与溯源模式系统。该模式系统实现了不同尺度气象模式耦合、气象与大气扩散模式的耦合，当园区需要对历史污染物的来源进行追溯时，将“重现”溯源时段园区高精度气象流场，分析出污染物传输路径，同时结合企业污染物排放特征、排放量和活动工况等参数，最终筛查出该时段排放此污染物的可疑企业。",
            time:"",
          },
          {
            ul:require("../asste/images/software/product4.jpg").default,
            theme:"污染源在线监控系统通过对污染排放数据的采集，利用数据有效性审核机制对监测数据进行审核, 为环境监察部门提供真实有效的监测数据，帮助环境监察部门实时掌握污染排放状况，约束企业的违法、违规排污行为，为污染减排和总量控制提供数据支撑。",
            time:"",
          },
        
          {
            ul:require("../asste/images/software/product5.png").default,
            theme:"环境综合业务办公系统在梳理和优化环保部门业务模型和数据模型的基础上，应用工作流技术、协同技术将日常办公、环境监察、环境信访、行政处罚、环境监测、总量管理等业务融为一体,构建一体化办公环境，实现全局信息资源的整合共享和业务协同。",
            time:"",
          },
         
         
]

class Software extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataList:[],
            currentPage: 1,
            pageCount: 4,
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

      

        return (
            <div className ="Software-div">
                <div className="Software-div-img" > 
                   <img src={require("../asste/images/software/keji.jpg").default} ></img>
                </div>
                <div className="Software-div-hender">
                  <span className="Software-div-hender-span" >软件平台</span>
                </div>
                <Divider />
                  
                  <div className="Software-div-list">
                    {
                        this.state.dataList.map((item,index)=>{

                          return(
                            <div className="Software-div-list-left">
                              <div className="Software-div-list-left-img" > 
                              <Image width={200}  height={200} src={item.ul} />
                              </div>
                              <div className="Software-div-list-left-text" > 
                                <span className="Software-div-list-left-text-span">{item.theme}</span>
                                <span className="Software-div-list-span">{item.time}</span>
                              </div>
                            </div>
                          )
                        })
                    }
                       
                  </div>
                  <div className="Software-div-list-fy" >  
                        <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                  </div>
                  <Foots/>
            </div>
        );
    }
}

export default Software;