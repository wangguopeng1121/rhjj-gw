import React ,{Component} from 'react';
import { Map, Circle, CircleEditor } from 'react-amap';
import { PhoneOutlined,DesktopOutlined,MailOutlined,ControlOutlined,ExportOutlined} from '@ant-design/icons';
import "../asste/css/Contact.css";
import Foot from "./Foot"
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
          }
        }
        
        toggleEdit(){
          this.setState({
            active: !this.state.active
          })
    }
    render() {
        const events = {
            move: () => {console.log('circle move')},
            adjust: () => {console.log('circle adjust')},
            end: () => {console.log('circle end')},
            created: (ins) => {console.log(ins)}
        }
        return (
            <div className="Contact-div">
            <div className="Contact-div-top" >
            <div ><img width="400px" height="400px" src={require("../asste/images/contact/1.png").default}></img> </div>
            <div ><img width="400px" height="400px" src={require("../asste/images/contact/2.jpg").default}></img> </div>
            <div ><img width="400px" height="400px" src={require("../asste/images/contact/3.jpg").default}></img> </div>

            </div>
            <div className="Contact-div-info">
                <div className="Contact-div-info-phone">
                 <PhoneOutlined />
                 <h3 style={{fontSize:"25px"}}>电话</h3>
                 <h2> 022-58652856</h2>
                </div>
                <div className="Contact-div-info-fox">
                <ControlOutlined />
                 <h3 style={{fontSize:"25px"}}>传真</h3>
                 <h2> 022-58652856</h2></div>
                <div className="Contact-div-info-code">
                <ExportOutlined />
                 <h3 style={{fontSize:"25px"}}>邮编</h3>
                 <h2> 300300</h2>
                    
                </div>
                <div className="Contact-div-info-web">
                <DesktopOutlined />
                 <h3 style={{fontSize:"25px"}}>官网</h3>
                 <h2> www.rhjj-inc.com</h2>
                </div>
                <div className="Contact-div-info-email">
                <MailOutlined />
                 <h3 style={{fontSize:"25px"}}>邮箱</h3>
                 <h2> tjrhjjkj@rhjj-inc.com</h2>
                </div>
             </div>
                
            <div style={{width: '1230px', height: '370px',margin: 'auto'}}>
                <Map center={{longitude: 117.376071, latitude: 39.07258}} zoom={100}>
                    <Circle radius={15} center={{longitude: 117.376071, latitude: 39.07258}}>
                        <CircleEditor events={events} active={this.state.active} />
                    </Circle>
                </Map>
            </div>
             <Foot /> 

            </div>
        
        )
            
    }
}

export default Contact;