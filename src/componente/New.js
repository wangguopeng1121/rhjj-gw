import React ,{Component} from 'react';
import { Divider , Menu} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../asste/css/New.css"
import routes from '../model/router.js';
import Foots from './Foots';
class New extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
               <div className="new-div">
               <div className="new-div-hander">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  style={{fontSize:14}}  > 
                        <Menu.Item key="1" ><Link to="/new">新闻热点 </Link></Menu.Item>
                        {/* <Menu.Item key="2"><Link to="/new/characters">人物专访</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/new/video">视频中心</Link></Menu.Item> */}
                  </Menu>
                 </div>
                 <div  className="Hot-div-img" >
                <img src={require("../asste/images/new/new.jpg").default}></img>
                </div>
                 {
                     this.props.routes.map((route,key)=>{
                     return  <Route key={key}  exact path={route.path} component={route.component} />
                            })
                         }
                  <Foots />
               </div>
            </div>
        );
    }
}

export default New;