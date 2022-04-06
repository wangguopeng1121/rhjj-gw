import React, { Component } from 'react';
import "../asste/css/Home.css"
import { Divider, Button, Carousel,Pagination } from 'antd';
import { MediumOutlined, HomeOutlined, LoadingOutlined, SmallDashOutlined, DownloadOutlined } from '@ant-design/icons';
import Foots from './Foots';
            const data = [
              {
                  ul:require('../asste/images/home/yangchen.jpg').default,
                  pust:"/product",
                  text:"环境空气在线监测设备",
                  text1:"常规环境空气质量自动监测",
                  text2:"环境空气质量网格化监测",
                  text3:"大气颗粒物在线/快速源解析",
                  text4:"大气光化学污染监测",
                  text5:"大气环境立体监测",
                  text6:""
              },
              {
                ul:require('../asste/images/home/cems.jpg').default,
                pust:"/product/airY",
                text:"气污染源在线监测设备",
                text1:"常规排放监测系统",
                text2:"超低排放监测系统",
                text3:"挥发性气体监测系统",
                text4:"颗粒物排放监测系统",
                text5:"烟气重金属监测系统",
                text6:""
            },
            {
              ul:require("../asste/images/home/waterE.png").default,
              pust:"/product/waterY",
              text:"水环境质量在线监测设备",
              text1:"水质在线分析仪",
              text2:"水质在线监测辅助设备",
              text3:"水质在线监测集成系统",
              text4:"",
              text5:"",
              text6:""
          },
          {
            ul:require("../asste/images/home/water.jpg").default,
            pust:"/product/waterZ",
            text:"水污染源在线监测设备",
            text1:"水质在线分析仪",
            text2:"水质在线监测辅助设备",
            text3:"",
            text4:"",
            text5:"",
            text6:""
        },
    
        {
          ul:require("../asste/images/home/ruanjian.png").default,
          pust:"/software",
          text:"环境大数据平台",
          text1:"环境空气质量自动监测系统软件",
          text2:"大气环境网格化监测与管理系统软件",
          text3:"大气复合污染快速诊断分析系统软件",
          text4:"空气质量预报预警系统软件",
          text5:"",
          text6:""
      },
      {
        ul:require("../asste/images/home/anfang.jpg").default,
        pust:"/product/safetyZ",
        text:"安全系统监控服务",
        text1:"网络与信息安全软件开发",
        text2:"信息技术咨询服务",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
    },
              ]
            class Home extends Component {
              constructor(props) {
                super(props);
                this.state = {
                  currentPage: 1,
                  pageCount: 6,
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
      <div className="a">
        <div className="lb">
          <Carousel autoplay>
            <div >
              <img src={require("../asste/images/home/beijing2.jpg").default} alt="logo" />
            </div>
            <div>
              <img src={require("../asste/images/home/beijing3.png").default} alt="logo" />
            </div>
            <div>
              <img src={require("../asste/images/home/beijing4.png").default} alt="logo" />
            </div>
            <div>
              <img src={require("../asste/images/home/beijing.jpg").default} alt="logo" />
            </div>
          </Carousel>
        </div>
        <div className="middle">
          <div className="middle-boady">
            <div className="home-div">
              <div className="home-left" >
                {/* 简介 头*/}
                <div className="home-left-account" >
                  <MediumOutlined />
                  <div className="span"><h2>公司简介 Company profile</h2></div>
                  <Divider orientation="right">天津仁和嘉镜科技有限公司</Divider>
                </div>
                <div className="home-left-contact">
                  <img src={require("../asste/images/home/company.jpg").default} ></img>
                </div>
                <div className="home-left-info">
                  <span><p class="company_info_p">天津仁和嘉境科技有限公司成立于2016年，地址位于天津市东丽区，公司以空气站和污染源在线监测仪器、环境物联网系统解决方案为基础，专业从事大气环境污染防治服务、协同软件开发、设备仪器的研发、销售等业务，为客户提优质特色的“一站式”环境管理咨询服务。</p>
                    <p class="company_info_p">公司汇集各领域专家型人才，与中国环境科学规划院；天津市环境科学院、以及南开大学、天津大学等高校和研究院所单位实行战略合作，并在此基础上建立了专家智库，储备了涵盖众多领域的资深专家。公司本着为客户创造价值的宗旨，坚持经济与生态环境可持续发展，追求专业与精益求精，为企事业单位、政府部门、提供管家式环境与资源领域的管理与技术咨询服务。</p>
                    <p ><strong>...</strong></p>
                  </span>
                  <Button type="primary" onClick={() => this.props.history.push('/certification')}>荣誉证书</Button> <span style={{ paddingLeft: 50 }}></span><Button type="primary" onClick={() => this.props.history.push('/recruit')}>加入我们</Button> <span style={{ paddingLeft: 50 }}></span><Button type="primary" onClick={() => this.props.history.push('/contact')}>联系我们</Button>
                </div>
              </div>
              <div className="home-middle" >
                <div className="home-left-account" >
                  <HomeOutlined />
                  <div className="span"><h2>解决方案 Air Pollution Prevention </h2></div>
                  <Divider orientation="right"></Divider>
                </div>

                <div className="home-middle-steward" >
                  <div className="home-middle-steward-img"><img src={require('../asste/images/home/wenzi.png').default}></img> </div>
                  <div className="home-middle-info"> <h2>方案描述</h2>  <span><p class="company_info_p">我国区域性大气复合物污染问题日益突出，已成为当前迫切需要解决的环境问题。准确监测区域性大气复合污染，是实现区域大气复合污染控制需要解决的关键科学问题。天津仁和嘉境科技有限公司大气环境监测板块由大气网格化监测模块、颗粒物源解析监测模块、大气光化学污染监测模块和大气污染移动监测走航车模块组成，可实现对大气环境中污染因子的24小时连续自动监测，对区域性大气污染精准治理和空气质量精细化管理以及重污染应急、治理成效评估提供长期基础数据和技术支持。</p>
                    <p ><strong>...</strong></p>
                  </span>
                  </div>
                  <div className="home-middle-steward-foot">
                    <div className="home-middle-steward-foot-feiqizaixian"> <Button type="link" size="large" onClick={() => this.props.history.push('/consult')} ghost>废气解决方案</Button></div>
                    <div className="home-middle-steward-foot-feishuizaixian"> <Button size="large" type="link" onClick={() => this.props.history.push('/consult/water')}  ghost >工业废水解决方案</Button></div>
                    <div className="home-middle-steward-foot-anfang"><Button size="large" type="link"  onClick={() => this.props.history.push('/consult/wisdomGreen')} ghost>智慧环保解决方案</Button> </div>
                    <div className="home-middle-steward-foot-yuanqu"><Button size="large" type="link" onClick={() => this.props.history.push('/consult/industryZone')} ghost>环保管家解决方案</Button> </div>
                    <div className="home-middle-steward-foot-huanbao"><Button size="large" type="link" onClick={() => this.props.history.push('/consult/safety')} ghost>智慧安防解决方案</Button> </div>
                  </div>
                </div>
              </div>
              <div className="home-right">
                <div className="home-left-account" >
                  <LoadingOutlined />
                  <div className="span"><h2>产品中心  Product Center  </h2></div>
                  <Divider orientation="right">天津仁和嘉境科技有限公司</Divider>
                </div>

                  {
                      this.state.dataList.map((item,key)=>{
                        return(
                          <div className="home-right-main"><br></br>
                              <h3><Button type="link" size="large" onClick={() => this.props.history.push(item.pust)} ghost>{item.text}</Button></h3>
                              <div className="home-right-main-img">
                                  <Button type="link" size="large" onClick={() => this.props.history.push(item.pust)} ghost>
                                    <img height="180px" width="180px" src={item.ul} alt="logo" ></img>
                                  </Button> 
                              </div>
                              <div className="home-right-main-text"> 
                                <span><SmallDashOutlined /></span><p>{item.text1}</p><p>{item.text2}</p><p></p>{item.text3}<p>{item.text4}</p> <p>{item.text5}</p><p>{item.text6}</p>
                              </div>
                          </div>
                        )

                      })
                  }
              
              </div>
                 
           
            </div>
                <div className ="Home-div-fy">
                  <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                </div>
          </div>
          <Foots />
        </div>
      
                  

      </div>
    );
  }
}
export default Home;