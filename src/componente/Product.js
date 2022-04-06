
import React ,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Divider ,Menu} from 'antd';
import "../asste/css/Product.css"
import Foots from './Foots';
import routes from '../model/router.js';
import AirZ from '../componente/product/AirZ';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         };
    }
    render() {
        return (
          <div>
            <div className="Product-div">
              <div className="Product-div-hander">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ fontSize: 17 }}  >
                  <Menu.Item key="1"><Link to="/product">环境空气设备</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/product/airY">气污染源设备</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/product/waterY">水环境设备</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/product/waterZ">水污染源设备</Link></Menu.Item>
                  <Menu.Item key="6"><Link to="/product/safetyZ">安全系统监控服务</Link></Menu.Item>
                </Menu>
              </div>
              <div className="Product-left-account"  >
                <Divider orientation="right">天津仁和嘉境科技有限公司</Divider>
              </div>
              {
                this.props.routes.map((route, key) => {
                  return <Route key={key} exact path={route.path} component={route.component} />
                })
              }
              <Foots />
            </div>
           
          </div>
        );
      }
    }
export default Product;