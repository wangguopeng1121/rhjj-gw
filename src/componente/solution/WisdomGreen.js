import React ,{Component,useState} from 'react';
import { Divider ,Image,Button} from 'antd';
import "../../asste/css/solution/WisdomGreen.css"
class WisdomGreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                 <div className="WisdomGreen-div-top">
                     <div className="WisdomGreen-div-top-h1"> <h1  >智慧环保解决方案</h1></div>

                     <div className="Air-div-top-top">
                        <div className="Air-div-top-top-img">
                        <img src={require("../../asste/images/solution/WisdomGreen/wis1.jpg").default}  height="400px" width="500px" ></img>
                        </div>
                        <div className="Air-div-top-top-text" > 
                        <br/>
                            <h2>概述：</h2>
                           <p>城市级智慧环保以城市生态环境质量持续改善为目标，以助力打赢污染防治攻坚战为根本落脚点，在生态环境“测管治”一体化基础上，融合“云大物智”新技术，助力精准治污、科学治污、依法治污，推进城市生态环境治理体系和治理能力现代化。</p>
                                    <p ><strong>...</strong></p>
                                    <Button type="primary" ><a>Click  Me</a></Button>
                        </div>
                     </div>

                    
                     <Divider  orientation="left">方案概述</Divider>
                     <div className="WisdomGreen-div-top-gaishu" >
                            <div className="WisdomGreen-div-top-gaishu-img">
                                <img src={require("../../asste/images/solution/gaishu.jpg").default}></img>
                            </div> 
                            <div  className="WisdomGreen-div-top-gaishu-p">
                                <br ></br> <br ></br>
                                <p>城市级智慧环保以城市生态环境质量持续改善为目标，以助力打赢污染防治攻坚战为根本落脚点，在生态环境“测管治”一体化基础上，融合“云大物智”新技术，助力精准治污、科学治污、依法治污，推进城市生态环境治理体系和治理能力现代化。</p> 
                            </div>
                    </div>
                    <br></br>   <br></br>
                    <Divider orientation="left">方案构成</Divider>
                    <br></br>
                    <div className="WisdomGreen-div-top-goucheng" >
                            <div className="WisdomGreen-div-top-goucheng-img">
                                <img src={require("../../asste/images//solution/goucheng.jpg").default}></img>
                            </div> 
                            <div  className="WisdomGreen-div-top-goucheng-r">
                                <br></br>  <br></br> <br></br> <br></br> <br></br> <br></br>
                                <h3>智慧环保</h3>
                                <div className ="WisdomGreen-div-top-goucheng-r-img">
                                     <div className ="WisdomGreen-div-top-goucheng-r-img-app" > <APP /> </div>
                                </div>
                             </div>  
                     </div>
                     <Divider orientation="left">方案特点</Divider>
                     <div className="WisdomGreen-div-top-tedian" >
                            <div className="WisdomGreen-div-top-tedian-img">
                                <img src={require("../../asste/images//solution/tedian.jpg").default}></img>
                            </div> 
                            <div  className="WisdomGreen-div-top-tedian-p">
                                <br ></br> <br ></br>
                                <p>大气环境达标管控“测·管·治”一体化监管侧重于依托于数据中台、 技术中台、业务中台，构建大气环境和污染源的整体监管“一张网”， 同时以达标管控治理服务为牵引、数据应用为串联、考核目标达成为核心， 配套监测预警、溯源解析、分级监管、成效评估等能力，实现市、县、乡多级纵向互联， 各级职能部门处置横向互通，形成治测管合力，保障环境质量持续改善。</p> 
                            </div>
                    </div>
                    <Divider orientation="left">应用案例</Divider>
                    <div className="WisdomGreen-div-top-anli" >
                            <div className="WisdomGreen-div-top-anli-img">
                                <img src={require("../../asste/images//solution/anli.jpg").default}></img>
                            </div> 
                            <div  className="WisdomGreen-div-top-anli-p">
                                <br ></br> <br ></br>
                                <p>大气环境达标管控“测·管·治”一体化监管侧重于依托于数据中台、 技术中台、业务中台，构建大气环境和污染源的整体监管“一张网”， 同时以达标管控治理服务为牵引、数据应用为串联、考核目标达成为核心， 配套监测预警、溯源解析、分级监管、成效评估等能力，实现市、县、乡多级纵向互联， 各级职能部门处置横向互通，形成治测管合力，保障环境质量持续改善。</p> 
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
          height={403}
          src={require("../../asste/images/solution/WisdomGreen/wis.jpg").default}
          onClick={() => setVisible(true)}
        />
        <div style={{ display: 'none' }}>
          <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            <Image src={require("../../asste/images/solution/WisdomGreen/wis.jpg").default} />
            <Image src={require("../../asste/images/solution/WisdomGreen/wis4.jpg").default} />
          </Image.PreviewGroup>
        </div>
      </>
    );
  };

export default WisdomGreen;