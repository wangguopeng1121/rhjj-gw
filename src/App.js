import './asste/css/App.css';
import routes from './model/router.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo1 from './asste/images/picture.jpg'
// 引入antd
import { Layout, Menu } from 'antd';
const { Header} = Layout;
function App() {
  return ( 
    <div>
       <Router>
           <Layout  >
                <title>天津仁和嘉境科技有限公司</title>
                <Header className="header"  style={{  background: 'white' }}  > 
                <div className="logo" ><img src={logo1} width="300px" height="60px"></img></div>
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  style={{fontSize:20}}  > 
                    <Menu.Item key="1" ><Link to="/">首页 </Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/consult">解决方案</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/product">产品中心</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/software">软件平台</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/new">新闻中心</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/recruit">招聘信息</Link></Menu.Item>
                    {/* <Menu.Item key="7"><Link to="/certification">荣誉证书</Link></Menu.Item> */}
                    <Menu.Item key="8"><Link to="/contact">联系我们</Link></Menu.Item>
                  </Menu>
                </Header>
             </Layout>
          {
              routes.map((value,key)=>{
                  if(value.exact){
                    return <Route key={key} exact path={value.path}                     
                    // route.component     value.component   <User  {...props}  routes={route.routes} />
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <value.component {...props} routes={value.routes} />
                    )}
                    />
                  }else{
                    return <Route  key={key}  path={value.path} 
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <value.component {...props} routes={value.routes} />
                    )}
                    />
                  }
              })
            }            
           </Router>
           
  </div>
  );
}

export default App;
