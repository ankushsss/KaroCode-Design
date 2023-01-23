import React from 'react'
import Circular from './Components/Circular'
import CircularLines from './Components/CircularLines'
import Example from './Components/Example'
import Iphone from './Components/Iphone'
import LandingPage from './Components/LandingPage'
import Option from './Components/Option'
import SingleComponent from './Components/OptionComponent/SingleComponent'
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import SelectBox from './Components/SelectBox'
import Form from './Form'
import Footer from './Components/Footer'

var feature = {
  name: 'Competitive exchange rates',
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: GlobeAltIcon,
}
const App = () => {
  return (
    <div>
        <LandingPage/>
        <div className="flex flex-col lg:flex-row" style={{background:"rgb(23 23 23)",position:"relative",overflow:"hidden"}}>
            <div  style={{width:"100%"}}>
              <div style={{position:"absolute"}} className="w-100"><CircularLines/></div>
              <Iphone/>
            </div>
            <div className="w-100 lg:ml-30px">
              <SingleComponent feature={feature}/>
              <SingleComponent feature={feature}/>
              <SingleComponent feature={feature}/>

            </div>
        </div>
        <Option/>
        <Example/>
        
        <Footer/>
    </div>
  )
}

export default App
