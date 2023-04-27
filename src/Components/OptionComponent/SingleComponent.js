import React from 'react'
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const SingleComponent = ({feature}) => {
  return (
    <div className="mt-12" style={{background:"black",color:"white",width:"70%",padding:"10px",borderRadius:"10px",marginRight:"auto", marginLeft:" auto"}}>
    <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white sm:shrink-0">
      <feature.icon className="h-8 w-8" aria-hidden="true" />
    </div>
    <div className="sm:min-w-0 sm:flex-1">
      <p className="text-lg font-semibold leading-8 text-white-900">{feature.name}</p>
      <p className="mt-2 text-base leading-7 text-white-600">{feature.description}</p>
    </div>
  </div>
    </div>
  )
}

export default SingleComponent
