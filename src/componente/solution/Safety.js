import React ,{Component,useState} from 'react';
import { Divider ,Image,Button} from 'antd';
import "../../asste/css/solution/Safety.css"
class Safety extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                 <div className="Safety-div-top">
                     <div className="Safety-div-top-h1"> <h1  >企业安防”技术与服务解决方案</h1></div>

                     <div className="Safety-div-top-top">
                        <div className="Safety-div-top-top-img">
                        <img src={require("../../asste/images//solution/Safety/anfang.jpg").default}  height="400px" width="500px" ></img>
                        </div>
                        <div className="Safety-div-top-top-text" > 
                        <br/>
                            <h2>概述：</h2>
                           <p>传统工厂正处于向智慧工厂建设的关键阶段，亟需采用融合智能化和信息化的技术，来推动生产管理模式从局部、粗放、低效向安全、精准、高效方向变革。鲲云科技提供算法算力平台一体化的工厂安全生产解决方案，基于厂区/车间内摄像头采集的视频图像数据，通过人工智能技术实时识别安全着装规范、作业规范、设备状态、环境安全等安全生产因素，及时将危险事件反馈给安全管理人员，提高安全生产管理效率。</p>
                                    <p ><strong>...</strong></p>
                                    <Button type="primary" ><a  >Click  Me</a></Button>
                        </div>
                     </div>
                    
                     <Divider  orientation="left">方案概述</Divider>
                     <div className="Safety-div-top-gaishu" >
                            <div className="Safety-div-top-gaishu-img">
                                <img src={require("../../asste/images/solution/gaishu.jpg").default}></img>
                            </div> 
                            <div  className="Safety-div-top-gaishu-p">
                                <br ></br> <br ></br>
                                <p>传统工厂正处于向智慧工厂建设的关键阶段，亟需采用融合智能化和信息化的技术，来推动生产管理模式从局部、粗放、低效向安全、精准、高效方向变革。鲲云科技提供算法算力平台一体化的工厂安全生产解决方案，基于厂区/车间内摄像头采集的视频图像数据，通过人工智能技术实时识别安全着装规范、作业规范、设备状态、环境安全等安全生产因素，及时将危险事件反馈给安全管理人员，提高安全生产管理效率。</p> 
                            </div>
                    </div>
                    <br></br>   <br></br>
                    <Divider orientation="left">方案构成</Divider>
                    <br></br>
                    <div className="Safety-div-top-goucheng" >
                            <div className="Safety-div-top-goucheng-img">
                                <img src={require("../../asste/images/solution/goucheng.jpg").default}></img>
                            </div> 
                            <div  className="Safety-div-top-goucheng-r">
                              <br></br><br></br><br></br><br></br><br></br><br></br>
                                <div className ="Safety-div-top-goucheng-r-img">
                                     <div className ="Safety-div-top-goucheng-r-img-app" > <APP /> </div>
                                </div>
                             </div>  
                     </div>
                     <Divider orientation="left">方案特点</Divider>
                     <div className="Safety-div-top-tedian" >
                            <div className="Safety-div-top-tedian-img">
                                <img src={require("../../asste/images/solution/tedian.jpg").default}></img>
                            </div> 
                            <div  className="Safety-div-top-tedian-p">
                                <br ></br> <br ></br>
                                <p><ol>
                                  <li>基于人工智能高精度检测算法和高性能硬件，借助强大的图像处理能力，及时扼杀隐患苗头。</li>
                                  <li>利用智能化、自动化手段，全方位保障工厂的人员出入安全，环境消防安全、作业生产安全。</li>
                                  <li>支持数据多维度可视化分析，报警事件回溯查询，提高管理人员工作效率</li>
                                  </ol>
                                  </p> 
                            </div>
                    </div>
                    <Divider orientation="left">应用案例</Divider>
                    <div className="Safety-div-top-anli" >
                            <div className="Safety-div-top-anli-img">
                                <img src={require("../../asste/images/solution/anli.jpg").default}></img>
                            </div> 
                            <div  className="Safety-div-top-anli-p">
                                <br ></br> <br ></br>
                                <p></p> 
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
          height={400}
          src={require("../../asste/images/solution/Safety/anfang2.jpg").default}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            <Image src={require("../../asste/images/solution/Safety/anfang2.jpg").default} />
            <Image src={require("../../asste/images/solution/Safety/anfang3.jpg").default} />
          </Image.PreviewGroup>
        </div>
      </>
    );
  };


export default Safety;