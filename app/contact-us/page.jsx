import ContactContainer from '../../Component/Contact/ContactContainer'
import React from 'react'

export const metadata = {
  title: 'Get in Touch with Stack Homme | Contact Information',
  description: "Contact Stack Homme for all your software inquiries. Our team is here to assist in your digital success journey.",

}

export default function page() {
  return (
    <>
    <ContactContainer page="contact"/>
    </>
  )
}
