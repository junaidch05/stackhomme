import ServiceContainer from '../../Component/Service/ServiceContainer'
import React from 'react'

export const metadata = {
  title: 'Our Services | Stack Homme Software Solutions',
  description: "Discover Stack Homme's expert software services, from custom development to digital transformation, tailored to elevate your digital presence" ,

}


export default function page() {
  return (
<>
<ServiceContainer page="services"/>
</>
  )
}
