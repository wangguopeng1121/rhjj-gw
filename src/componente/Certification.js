import React ,{Component} from 'react';
import "../asste/css/Certification.css";
import { Image,Pagination} from 'antd';
import Foots from "../componente/Foots"
const data=[
    {
    ul:require("../asste/images/Certification/营业执照.png").default,
    theme:"营业执照",
    },
    {
        ul:require("../asste/images/Certification/科技型企业.jpg").default,
        theme:"科技型企业",
    },
    {
        ul:require("../asste/images/Certification/天津雏鹰企业.jpg").default,
        theme:"天津雏鹰企业",
    },
     {
        ul:require("../asste/images/Certification/高新技术企业.jpg").default,
        theme:"高新技术企业",
    },
    {
        ul:require("../asste/images/Certification/软件产品证书.png").default,
        theme:"软件产品证书",
    },
    {
        ul:require("../asste/images/Certification/软件产品证书1.png").default,
        theme:"软件产品证书",
    },
]

class Certification extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPage: 1,
            pageCount: 6,
            dataList:[],
            //图片轮播div样式相关参数
            width: '10000px',
            transition: '500ms ease-out',
            transform: 'translatex(10px)',
            countnum: 12,     //图片数量
            curPageIndex: 0, //点击右箭头+1，左箭头减1
            viewcount: 3,    //初始展示图片数量（和div宽度相关） 
            Larrowstate: true,
            Rarrowstate: true,
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

 //以下为轮播图 函数
 handleclickPrev(){
    let { countnum,viewcount,curPageIndex,Rarrowstate } = this.state
    if(curPageIndex === countnum - viewcount){
        this.setState({
            Rarrowstate:!Rarrowstate 
        })
    }
    this.getPage(curPageIndex-1)
}

handleclickNext(){
    let { countnum,viewcount,curPageIndex,Rarrowstate } = this.state
    if (curPageIndex < 0) {
        curPageIndex = 0
    }
    if(curPageIndex === 0){
        this.setState({
            Larrowstate:true
        })
    }
    this.getPage(curPageIndex + 1)
}

getPage(value) {
    let { countnum,viewcount,Larrowstate,Rarrowstate} = this.state
    let n = countnum - viewcount
    //一项的宽度
    let itemwidth = 426.6
    let transform = 'translatex(-' + value * itemwidth + 'px)'
    value > n || 0 > value || this.setState({transform:transform})
    this.setState({
        curPageIndex: value,
    })
    if (value == 0) {
        this.setState({
            Larrowstate: !Larrowstate
        })
    }
    if (value == n) {
        this.setState({
            Rarrowstate: !Rarrowstate
        })
    }
}
    render() {
        let { width,transition,transform,Larrowstate,Rarrowstate } = this.state
        let LArrowClaName = Larrowstate ? 'arrow_l' : 'hidden'
        let RArrowClaName = Rarrowstate ? 'arrow_r' : 'hidden'

        return (

            
            <div>
                <div className="Certification-div">
                    <div className="Certification-div-img">
                        <img src={require("../asste/images/Certification/b.jpg").default}></img>
                    </div>

                    <div className="Certification-div-list">
                        {
                            this.state.dataList.map((item,key)=>{
                                return(
                                    <div className="Certification-div-list-all"  key={key}>
                                        <div className="Certification-div-list-all-img"> 
                                        <img width={450}   height={320}  src={item.ul}/>
                                        </div>
                                        <div className="Certification-div-list-all-text"><h2>{item.theme}</h2> </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="Certification-div-hotList-fy" >  
                            <Pagination current={this.state.currentPage} pageSize={this.state.pageCount} total={data.length} onChange={this.onChangePage.bind(this)} />
                    </div>
                    <div>
                        <div className="bd basefix ">
                            <div className="pro_list_wrap"  style={{ width: width, transition: transition, transform: transform }} id="hot_scenics_list" data-count="8" >
                                <div className="pro_list_recomm"  data-reactid="79">
                                    <img  alt="" src={require("../asste/images/Certification/质量体系认证.png").default} /> 
                                    <h3 data-reactid="81">质量体系认证</h3>
                                </div>
                                
                                <div className="pro_list_recomm"   data-reactid="83">
                                    <img  alt="" src={require("../asste/images/Certification/环境体系认证.png").default} />
                                    <h3 data-reactid="85">环境体系认证</h3>
                                </div >
                                <div  className="pro_list_recomm"   >
                                    <img alt="" src={require("../asste/images/Certification/职业健康安全体系认证.png").default} />
                                    <h3 data-reactid="89">职业健康安全体系认证</h3>
                                </div >
                                <div  className="pro_list_recomm"  >
                                    <img  alt="" src={require("../asste/images/Certification/实用型专利.jpg").default} />
                                    <h3 data-reactid="93">实用型专利</h3>
                                </div >
                                <div  className="pro_list_recomm"  >
                                    <img  alt="" src={require("../asste/images/Certification/实用型专利1.jpg").default} />
                                    <h3 data-reactid="97">实用型专利（1）</h3>
                                </div >
                                <div  className="pro_list_recomm" data-reactid="99">
                                    <img alt="" src={require("../asste/images/Certification/实用型专利第二页.jpg").default} />
                                    <h3 data-reactid="101">实用型专利（2）</h3>
                                </div >
                                <div  className="pro_list_recomm"  data-reactid="103">
                                    <img  alt="" src={require("../asste/images/Certification/职业健康安全体系认证.png").default} data-reactid="104"/>
                                    <h3 data-reactid="105">亚龙湾热带天堂森林公园</h3>
                                </div >
                                <div  className="pro_list_recomm" >
                                    <img  alt="" src={require("../asste/images/Certification/软著-安全生产评估与分析平台.jpg").default}/>
                                    <h3>软著-安全生产评估与分析平台</h3 >
                                </div >
                                <div  className="pro_list_recomm" >
                                    <img  alt="" src={require("../asste/images/Certification/软著-安全生产隐患排查.jpg").default}/>
                                    <h3>软著-安全生产隐患排查</h3 >
                                </div >  
                                <div  className="pro_list_recomm" >
                                    <img  alt="" src={require("../asste/images/Certification/软著-应急救援.jpg").default}/>
                                    <h3>软著-应急救援</h3 >
                                </div >  
                                <div  className="pro_list_recomm" >
                                    <img  alt="" src={require("../asste/images/Certification/诚信供应商中文.jpg").default}/>
                                    <h3>诚信供应商中文</h3 >
                                </div >
                                <div  className="pro_list_recomm" >
                                    <img  alt="" src={require("../asste/images/Certification/诚信企业家中文.jpg").default}/>
                                    <h3>诚信企业家中文</h3 >
                                </div >
                               

                            </div>
                            <div></div>
                            <a href="javascript:;" className={LArrowClaName} onClick={() => this.handleclickPrev()} />
                            <a href="javascript:;" className={RArrowClaName} onClick={() => this.handleclickNext()} />
                        </div>
                    </div>
                    <Foots />
                </div>
            </div>
        );
    }
}

export default Certification;