import React ,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider , Menu} from 'antd';
import "../asste/css/Consult.css"
import Foots from './Foots';
import routes from '../model/router.js';
class Consult extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }
    onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
      };
    render() {
        return (
            <div>
                <div className="Consult-div">
                    <div className="Consult-div-hander">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  style={{fontSize:17}}  > 
                        <Menu.Item key="1" ><Link to="/consult">废气解决方案 </Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/consult/water">废水解决方案</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/consult/wisdomGreen">智慧环保解决方案</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/consult/industryZone">环保管家解决方案</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/consult/safety">安全防控解决方案</Link></Menu.Item>
                  </Menu>
                    </div>
                            <div className="Consult-left-account"  >
                                  <Divider orientation="right">天津仁和嘉境科技有限公司</Divider>
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

export default Consult;