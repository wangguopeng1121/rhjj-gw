import Consult from '../componente/Consult';
import Home from '../componente/Home';
import Air from '../componente/solution/Air';
import IndustryZone from '../componente/solution/IndustryZone';
import Safety from '../componente/solution/Safety';
import  Water from '../componente/solution/Water';
import WisdomGreen from '../componente/solution/WisdomGreen';
import Software from '../componente/Software';
import Contact from '../componente/Contact';
import Product from '../componente/Product';
import AirZ from '../componente/product/AirZ';
import AirY from '../componente/product/AirY';
import WaterZ from '../componente/product/WaterZ';
import WaterY from '../componente/product/WaterY';
import It from '../componente/product/It';
import SafetyZ from '../componente/product/SafetyZ';
import New from '../componente/New';
import Hot from '../componente/new/Hot';
import Characters from '../componente/new/Characters';
import Video from '../componente/new/Video';
import Recruit from '../componente/Recruit';
import Certification from '../componente/Certification';
let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    {
      path: "/consult",
      component: Consult,
      routes:[   
        /*嵌套路由*/
        {
          path: "/consult",
          component: Air,
        },
        {
          path: "/consult/industryZone",
          component: IndustryZone,
        },
        {
          path: "/consult/safety",
          component: Safety ,
        },
        {
          path: "/consult/water",
          component: Water,
        },
        {
          path: "/consult/wisdomGreen",
          component: WisdomGreen,
        }
            ]
    },
    
   {  
     path: "/product",
     component: Product ,
     routes:[
        {
          path: "/product",
          component: AirZ,
        },
        {
          path: "/product/airY",
          component: AirY
        },
        {
          path: "/product/waterY",
          component: WaterY
        },
          {
          path: "/product/waterZ",
          component: WaterZ
        }, 
         {
          path: "/product/it",
          component: It
        },
          {
          path: "/product/safetyZ",
          component: SafetyZ
        }, 
     ]
   },

    {
      path: "/new",
      component: New,
      routes:[
        {
          path: "/new",
          component: Hot,
        },
        {
          path: "/new/video",
          component: Video,
        },
        {
          path: "/new/characters",
          component: Characters,
        },
     ]
    },
    {
      path: "/recruit",
      component: Recruit,
    },
    {
      path: "/certification",
      component: Certification,
    },
    {
      path: "/software",
      component: Software,
    },
    {
      path: "/contact",
      component: Contact,
    },
    
];

export default routes;