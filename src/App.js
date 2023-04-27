import React from 'react'
import Circular from './Components/Circular'
import CircularLines from './Components/CircularLines'
import Example from './Components/Example'
import Iphone from './Components/Iphone'
import LandingPage from './Components/LandingPage'
import Option from './Components/Option'
import SingleComponent from './Components/OptionComponent/SingleComponent'
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, AcademicCapIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import SelectBox from './Components/SelectBox'
import Form from './Form'
import Footer from './Components/Footer'


var feature = [{
  name: 'Personalized Career Guidance:',
  description:
    `As an experienced IT professional, I can provide personalized guidance to help you navigate the various career paths and roles available in the industry. I'll help you identify your strengths, interests, and goals, and work with you to develop a plan for launching your IT career.`,
  icon: GlobeAltIcon,
},
{
  name: 'Technical Skills Development:',
  description:
    `Depending on your goals and interests, We can help you develop the technical skills you need to succeed in the IT industry. Whether you're interested in Software Development, Web Devlopment, AI/ML, DS or another area, I can provide tailored coaching and training to help you acquire the necessary skills.`,
  icon: CodeBracketIcon,
},
{
  name: 'Job Search Support: ',
  description:
    `Once you've developed your skills and are ready to start applying for jobs, I can provide guidance and support to help you navigate the job search process. I can help you craft an effective resume and cover letter, prepare for interviews, and network with professionals in the industry.`,
  icon: AcademicCapIcon,
}]
const App = () => {
  return (
    <div>
    
    <div style={{position:"absolute",opacity:"", width:"100%" ,height:"100vh"}} className="w-100 flex " ><CircularLines/>
    
    </div>
        
        <div>
        <LandingPage />
        
        </div>
        <div className="flex flex-col lg:flex-row" style={{background:"rgb(23 23 23)",position:"relative",overflow:"hidden"}}>
        
            <div  style={{width:"100%"}}>
              <div style={{position:"absolute"}} className="w-100"><CircularLines/></div>
              <Iphone/>
            </div>
            <div className="w-50 lg:ml-30 ">

            {feature.map((featureData)=>{
              return(<SingleComponent feature={featureData}/>)
            })}
              

            </div>
        </div>
        <Option/>
        <Example/>
        <Footer/>
    </div>
  )
}

export default App
