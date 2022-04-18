import React ,{Component ,useState ,} from 'react';
import { Divider ,Image,Button} from 'antd';
import "../../asste/css/solution/Air.css"
class Air extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
  
    render() {
        return (
            <div>
                 <div className="Air-div-top">
                     <div className="Air-div-top-h1"> <h1  >大气环境网格化“监•管”技术与服务解决方案</h1></div>
                     <div className="Air-div-top-top">
                        <div className="Air-div-top-top-img">
                        <img src={require("../../asste/images/solution/Air/daqiwangggehua.jpg").default}  height="400px" width="500px" ></img>
                        </div>
                        <div className="Air-div-top-top-text" > 
                        <br/>
                            <h2>概述：</h2>
                           <p>根据“网格化”理念，依托技术“监•管”平台，组织全区域实施大气污染防治网格化管理，实现本地污染源的精准识别及污染排放管理，建立以基层网格为单元的污染源动态更新与管理机制，下沉环保专业监管力量；打通监测与监管之间的通道，提升基层网格发现问题和解决问题的能力；利用综合立体监测技术和人工管理相结合的方式，实现“监测全覆盖、管理无死角、监察无盲区”，为区域空气质量持续改善提供有力保障，形成“覆盖全面、边界清晰、职责明确、任务具体、处置及时、行动落实、目标达成”的大气污染防治多级网格化管理体系。</p>
                                    <p ><strong>...</strong></p>
                                    <Button type="primary" ><a >Click  Me</a></Button>
                        </div>
                     </div>
                    
                     <Divider  orientation="left">方案概述</Divider>
                     <div className="Air-div-top-gaishu" >
                            <div className="Air-div-top-gaishu-img">
                                <img src={require("../../asste/images/solution/gaishu.jpg").default}></img>
                            </div> 
                            <div  className="Air-div-top-gaishu-p">
                                <br ></br> <br ></br>
                                <p>根据“网格化”理念，依托技术“监•管”平台，组织全区域实施大气污染防治网格化管理，
                                  实现本地污染源的精准识别及污染排放管理，建立以基层网格为单元的污染源动态更新与管理机制，
                                  下沉环保专业监管力量；打通监测与监管之间的通道，提升基层网格发现问题和解决问题的能力；
                                  利用综合立体监测技术和人工管理相结合的方式，实现“监测全覆盖、管理无死角、监察无盲区”，
                                  为区域空气质量持续改善提供有力保障，形成“覆盖全面、边界清晰、职责明确、任务具体、处置及时、
                                  行动落实、目标达成”的大气污染防治多级网格化管理体系</p> 
                            </div>
                    </div>
                    <br></br>   <br></br>
                    <Divider orientation="left">方案构成</Divider>
                    <br></br>
                    <div className="Air-div-top-goucheng" >
                            <div className="Air-div-top-goucheng-img">
                                <img src={require("../../asste/images/solution/goucheng.jpg").default}></img>
                            </div> 
                            <div  className="Air-div-top-goucheng-r">
                                <h3>大气环境监管平台</h3>
                                <h3>大气环境监管设备</h3>
                                <div className ="Air-div-top-goucheng-r-img">
                                     <div className ="Air-div-top-goucheng-r-img-app" > <APP /><BPP /></div>
                                </div>
                             </div>  
                     </div>
                     <Divider orientation="left">方案特点</Divider>
                     <div className="Air-div-top-tedian" >
                            <div className="Air-div-top-tedian-img">
                                <img src={require("../../asste/images/solution/tedian.jpg").default}></img>
                            </div> 
                            <div  className="Air-div-top-tedian-p">
                                <br ></br> <br ></br>
                                <p>
固定监测与移动监测相结合，近地面监测与高空探测相结合，一次污染监测与二次污染监测相结合，真正做到“全方位、全过程、全要素”无死角监测，复合污染判断，为攻坚战实施提供“靶向制导”和“精准导航”；
监测仪器与信息化平台结合，线上与线下结合，测管联动，促进环境质量改善目标达成。</p> 
                            </div>
                    </div>
                    <Divider orientation="left">应用案例</Divider>
                    <div className="Air-div-top-anli" >
                            <div className="Air-div-top-anli-img">
                                <img src={require("../../asste/images/solution/anli.jpg").default}></img>
                            </div> 
                            <div  className="Air-div-top-anli-p">
                                <br ></br> <br ></br>
                               <ol>
                                 <li>天津市XX区大气环境网格化监测服务项目 </li>
                               </ol>
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
          width={600}
          height={400}
          src={require("../../asste/images/solution/Air/pingtai2.jpg").default}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <Image src={require("../../asste/images/solution/Air/pingtai2.jpg").default}/>
            <Image src={require("../../asste/images/solution/Air/pingtai1.jpg").default} />
          
            <Image src={require("../../asste/images/solution/Air/pingtai3.jpg").default} />
          </Image.PreviewGroup>
        </div>
      </>
    );
  };

  const BPP = () => {
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Image
          preview={{ visible: false }}
          width={600}
          height={400}
          src={require("../../asste/images/solution/Air/weizhan.jpg").default}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            <Image src={require("../../asste/images/solution/Air/weizhan.jpg").default} />
            <Image src={require("../../asste/images/solution/Air/shebei4.jpg").default} />
            <Image src={require("../../asste/images/solution/Air/shebei2.jpg").default} />
            <Image src={require("../../asste/images/solution/Air/shebei3.jpg").default} />
          </Image.PreviewGroup>
        </div>
      </>
    );
  };


export default Air;