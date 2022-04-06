import React ,{Component} from 'react';
import "../asste/css/Recruit.css";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Footss from "../componente/Footss"

const listData = [];

  listData.push(
      {
    href: 'https://ant.design',
    title: `销售工程师`,
    avatar: require("../asste/images/Recruit/avatar.jpg").default,
    description: '',
    duty:`岗位职责：1、根据公司销售战略，完成销售目标。
                   2、收集客户信息，维护老客户，开发新客户和挖掘潜在客户。` ,
    require:"任职要求：大专以上学历，专业不限，35岁以下，1-2年以上营销经验。",
    text:"",
    },  
    {
        href: 'https://ant.design',
        title: `金牌环保运维主管 ` , 
        avatar: require("../asste/images/Recruit/avatar.jpg").default,
        description: ``,
        duty:`岗位职责：1、监督环保在线监测设备日常运维与管理 。`,
        require:`任职要求：1、大专以上学历，为人正直，可熟练驾驶机动车。
                  2、2-5年以上同岗位管理经验。
                  3、良好的沟通，协调，应急处理能力 ，带领团队完成工作任务。`,
        text:"",
        },  
        {
            href: 'https://ant.design',
            title: `金牌环保运维工程师`,
            avatar: require("../asste/images/Recruit/avatar.jpg").default,
            description: '',
            duty:`岗位职责：1、负责环保在线监测设备日常维护与管理。 
                  2、环保数据信息采集，确保系统稳定运行。`,
            require: `任职要求：1、大专及以上学历，机械，机电，电气，环保等相关专业，动手能力强。 
                  2、吃苦耐劳、爱岗敬业、良好团队服务意识。`,
            text:"",
            },  
            {
                href: 'https://ant.design',
                title: `技术支持工程师`,
                avatar: require("../asste/images/Recruit/avatar.jpg").default,
                description: "",
                duty:  `岗位职责：1、负责公司产品（智慧安监仪器仪表）项目实施、跟进、调试与管理。
                  2、日常产品维护与服务，及时解决产品运行各种问题，确保系统正常运行。`,
                require:`任职要求：1、大专以上学历，网路、工程类等相关专业。
                  2、为人正直、爱岗敬业、良好沟通能力和团队服务意识。`,
                text:"",
                },  
     );
const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
class Recruit extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className="Recruit-div">
                    <div className="Recruit-div-img" >
                        <img src={require("../asste/images/Recruit/b.jpg").default} ></img>
                    </div>
                    <div className="Recruit-div-table"  style={{whiteSpace:'pre-wrap'} }>
                        <List itemLayout="vertical" size="large"
                            pagination={{ onChange: page => { console.log(page);  },  pageSize: 4,  }}
                            dataSource={listData}
                            renderItem={item => 
                                (
                            <List.Item key={item.title}
                                actions={[
                                <IconText icon={StarOutlined} text="29" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]}
                                extra={
                                <img  width={400} alt="logo"  src={require("../asste/images/Recruit/a.png").default}/>
                                }
                            >
                                <List.Item.Meta  avatar={<Avatar src={item.avatar} />} 
                                title={<span href={item.href}>{item.title}</span>}
                                description={item.description}
                                />
                                {item.duty}
                                <br></br>
                                <div >{item.require}</div>
                               <div> {item.text}</div>
                            </List.Item>
                                )} />
                    </div>
                    <Footss />

                </div>
                
            </div>
        );
    }
}

export default Recruit;