import React ,{Component} from 'react';
import "../asste/css/Recruit.css";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Foots from "../componente/Foots"

const listData = [];

  listData.push(
      {
    href: 'https://ant.design',
    title: `王女士/人事经理：销售工程师`,
    avatar: require("../asste/images/Recruit/avatar.jpg").default,
    description: '地点：天津市东丽区 |1-2年（营销经验）|大专以上',
    duty:" 岗位职责：根据公司销售战略，完成销售目标。2、收集客户信息，维护老客户，开发新客户和挖掘潜在客户。 ",
    require:"任职要求：大专以上学历，专业不限，35岁以下，1-2年以上营销经验。",
    text:"福利待遇：基础底薪+高提成+各种补贴",
    },  
    {
        href: 'https://ant.design',
        title: `王女士/人事经理：金牌环保运维主管 ` , 
        avatar: require("../asste/images/Recruit/avatar.jpg").default,
        description: '地点：天津市东丽区 |2-5年|大专以上',
        duty:" 岗位职责：1、监督环保在线监测设备日常运维与管理。",
        require:"任职要求：1、大专以上学历，为人正直，可熟练驾驶机动车。2、2-5年以上同岗位管理经验3、良好的沟通，协调，应急处理能力 ，带领团队完成工作任务。4、您不仅能够单打独斗而且还能带领团队披荆斩棘，所向披靡欢迎同行高手骚扰。",
        text:"福利待遇：起步10w~(高于同行)",
        },  
        {
            href: 'https://ant.design',
            title: `王女士/人事经理：金牌环保运维工程师`,
            avatar: require("../asste/images/Recruit/avatar.jpg").default,
            description: '地点：天津市东丽区 |大专以上 |全职|招6-10人',
            duty:" 岗位职责：1、负责环保在线监测设备日常维护与管理。2、环保数据信息采集，确保系统稳定运行。",
            require:"任职要求：大专及以上学历，机械，机电，电气，环保等相关专业，动手能力强。2、吃苦耐劳、爱岗敬业、良好团队服务意识，会开车必须滴，不恐高。3、职场小白我们培养，同行精英欢迎加入。",
            text:"福利待遇：综合薪酬高于同行",
            },  
            {
                href: 'https://ant.design',
                title: `王女士/人事经理：技术支持工程师`,
                avatar: require("../asste/images/Recruit/avatar.jpg").default,
                description: " 地点：天津市东丽区 |大专以上 |全职|招1-3人",
                duty:" 岗位职责：1、负责公司产品（智慧安监仪器仪表）项目实施、跟进、调试与管理。2、日常产品维护与服务，及时解决产品运行各种问题，确保系统正常运行。",
                require:"任职要求：1、大专以上学历，网路、工程类等相关专业。网络必备技能之一。2、为人正直、爱岗敬业、良好沟通能力和团队服务意识，会开车是必须滴。",
                text:"福利待遇：综合薪酬高于同行",
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
                        <img src={require("../asste/images/Recruit/b.png").default} ></img>
                    </div>
                    <div className="Recruit-div-table">
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
                                <img  width={400} alt="logo"  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                                }
                            >
                                <List.Item.Meta  avatar={<Avatar src={item.avatar} />} 
                                title={<span href={item.href}>{item.title}</span>}
                                description={item.description}
                                />
                                {item.duty}
                                <br></br>
                                <div>{item.require}</div>
                               <div> {item.text}</div>
                            </List.Item>
                                )} />
                    </div>
                    <Foots />

                </div>
                
            </div>
        );
    }
}

export default Recruit;