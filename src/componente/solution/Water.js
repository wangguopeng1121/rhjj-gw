import React ,{Component,useState} from 'react';
import { Divider ,Image,Button} from 'antd';
import "../../asste/css/solution/Water.css"
class Water extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
            <div className="Water-div-top">
                <div className="Water-div-top-h1"> <h1  >水环境“监•管”技术与服务解决方案</h1></div>

                <div className="Air-div-top-top">
                        <div className="Air-div-top-top-img">
                        <img src={require("../../asste/images/solution/Water/water.jpg").default}  height="400px" width="500px" ></img>
                        </div>
                        <div className="Air-div-top-top-text" > 
                        <br/>
                            <h2>概述：</h2>
                           <p>紧跟国家生态环境保护政策和行业发展趋势，以“面向流域统筹的水环境综合管理模式”为理念，强化水质目标管理，紧抓水环境管理的业务主线，推行以流域控制单元为载体的精细化管理，创建水质断面、河流水系、控制断面、入河排污口、污染源多维关联分析模型，全面摸清污染源排放现状和水环境质量状况，诊断和识别各单元的污染特征及成因，优化水环境污染防治措施，并提供精细化的环境监管及考核评估服务，同时结合河湖长制，辅助生态环境监管部门构建科学有效的水环境综合监管与污染防治体系。</p>
                                    <p ><strong>...</strong></p>
                                    <Button type="primary" ><a>Click  Me</a></Button>
                        </div>
                     </div>
                <Divider  orientation="left">方案概述</Divider>
                <div className="Water-div-top-gaishu" >
                       <div className="Water-div-top-gaishu-img">
                           <img src={require("../../asste/images/solution/gaishu.jpg").default}></img>
                       </div> 
                       <div  className="Water-div-top-gaishu-p">
                           <br ></br> <br ></br>
                           <p>采用微型水站、多种规格走入式小型水站和移动监测车组合的方式，依据流域/区域河网水系结构和关键节点、河道体量规模、手工考核断面等多种因素，在流域/区域内进行低成本网格化布点与高频监测，结合信息化技术，以大数据支撑水环境评价与预警、水质水量科学调控，以及治理方案评估、治理绩效评价、河长考核等，为管理部门实现水环境精细化管理提供技术支持。</p> 
                       </div>
               </div>
               <br></br>   <br></br>
               <Divider orientation="left">方案构成</Divider>
               <br></br>
               <div className="Water-div-top-goucheng" >
                       <div className="Water-div-top-goucheng-img">
                           <img src={require("../../asste/images/solution/goucheng.jpg").default}></img>
                       </div> 
                       <div  className="Water-div-top-goucheng-r">
                         <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
                           <h3>水环境监管地图</h3>
                           <div className ="Water-div-top-goucheng-r-img">
                                <div className ="Water-div-top-goucheng-r-img-app" > <APP /> </div>
                           </div>
                        </div>  
                </div>
                <Divider orientation="left">方案特点</Divider>
                <div className="Water-div-top-tedian" >
                       <div className="Water-div-top-tedian-img">
                           <img src={require("../../asste/images/solution/tedian.jpg").default}></img>
                       </div> 
                       <div  className="Water-div-top-tedian-p">
                           <ul >
                            <li>数据业务化：构建技术、数据、业务三大中台，提供可靠的底层技术、强大的数据分析能力，驱动数据业务化，助力数字化转型，让数据产生价值 </li>     
                            <li>分析多元化：图文并茂展示环境、污染的时空分布特征，紧抓目标、现状、成因、溯源、管控主线，运用大数据等技术手段对数据抽丝剥茧，可视化把控环境、污染、管控现状。</li>
                            <li>管控精细化：通过网格精细化布点汇集水质、污染源、水文等数据，建立事件闭环管理机制、应急响应机制，实现“横向到边、纵向到底、属地管理、精细管控”，全面助力打赢污染防治攻坚战</li>
                            <li>决策科学化：运用图像识别、关联分析等大数据模型辅助污染行为的发现，基于河流水质－污染源响应关系模型对污染源、水文等条件变化后的水质状况进行预测与分析，并通过多种调控方案模拟筛选科学可行的方案，为措施制定提供参考。</li>
                          </ul>
                       </div>
               </div>
               <Divider orientation="left">应用案例</Divider>
               <div className="Water-div-top-anli" >
                       <div className="Water-div-top-anli-img">
                           <img src={require("../../asste/images/solution/anli.jpg").default}></img>
                       </div> 
                       <div  className="Water-div-top-anli-p">
                           <br ></br> <br ></br>
                           <p><ol></ol></p> 
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
          width={700}
          height={485}
          src={require("../../asste/images/solution/Water/water2.jpg").default}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            <Image src={require("../../asste/images/solution/Water/water2.jpg").default}></Image>
            <Image src={require("../../asste/images/solution/Water/water1.jpg").default}></Image>
          </Image.PreviewGroup>
        </div>
      </>
    );
  };

export default Water;