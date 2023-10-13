import './globals.css'
import dynamic from 'next/dynamic';
import Footer from '../Component/Common/Footer.jsx';



export const metadata = {
  title: 'Stack Homme | Your Business Solution Partner',
  description: "Discover Stack Homme's expertise in custom software development for businesses. We specialize in crafting innovative solutions tailored to your unique needs. Transform your business with our digital excellence today.",
}
const DynamicNavbar = dynamic(() => import('../Component/Common/Navbar'), {
  ssr:false
  
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
      <link rel='icon' href='/favicon.ico'/>
      </head>
      <body suppressHydrationWarning={true}>
        <DynamicNavbar/>
        {children}
        <Footer/>
        </body>
  
      
    </html>
  )
}
