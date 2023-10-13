"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import logo from '../../public/shlogo.webp'
import logo2 from '../../public/shlogocolor.webp'


export default function Navbar() {
  const [togglemenu, settogglemenu] = useState(false);
  const [togglesubmenu, settogglesubmenu] = useState(false);
  const Togglenav = () => {
    settogglemenu(!togglemenu);

    
  };
  const Togglesubnav = () => {
    settogglesubmenu(!togglesubmenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const[show ,handleshow]=useState(false);

  const transition = () => {
    if (window.scrollY > 200) {
      settogglemenu(false);
      settogglesubmenu(false);
      handleshow(true)
    }
    else{
      handleshow(false)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transition);

    return () => {
      window.removeEventListener("scroll", transition);
    };
  }, []);

  const closeNavbar = () => {
    settogglesubmenu(!togglesubmenu);
    settogglemenu(!togglemenu)
  };

  const handleSubmenuClick = () => {
    if (screenWidth <= 786) {
      settogglesubmenu(!togglesubmenu);
    }
  };

  return (
    <>
      <header className={`header ${show&& "nav-back"}`}>
        <div className="logo">
          <Link href='/'>
            {
              show? 
            
              
              <Image src={logo2} className="logoimage"  priority={true}  alt="logo" />: <Image className="logoimage"  priority={true}  src={logo} alt="logo" />
            }
  
          </Link>
        </div>
        {(togglemenu || screenWidth > 786) &&
         (
          <nav className="navbar">
    <Link href='/'  className='links'  onClick={closeNavbar}>Home</Link>
<div className="dropdown">
<div className="submenu" onClick={handleSubmenuClick}>
   <p> <Link href='/services'   className='links  onClick={closeNavbar}'>Services</Link></p>
    <FontAwesomeIcon className="iconcart" onClick={Togglesubnav} icon={faCaretDown} />
    </div>

  {(togglesubmenu || screenWidth >786)&&(
    <div className="dropdownlink">
    <Link href='/services/devops'   className='links'  onClick={closeNavbar}>DevOps</Link>
    <Link href='/services/web-design'   className='links' onClick={closeNavbar}>Web Design</Link>
    <Link href='/services/web-development'   className='links'  onClick={closeNavbar}>Web Development</Link>
    <Link href='/services/mean-development'   className='links' onClick={closeNavbar}>Mean Development</Link>
    <Link href='/services/mern-development'   className='links' onClick={closeNavbar}>Mern Development</Link>
    <Link href='/services/mevn-development'   className='links' onClick={closeNavbar}>Mevn Development</Link>
    </div>
  )}
    
</div>
    <Link href='/pricing'   className='links'  onClick={closeNavbar}>Pricing</Link>
    <Link href='/careers'  className='links'  onClick={closeNavbar}>Career</Link>
    <Link href='/contact-us' className='btn' onClick={closeNavbar}>Contact Us</Link>
          </nav>
          )
          }
         
        <FontAwesomeIcon className="icon" onClick={Togglenav} icon={faBars} />
      </header>
    </>
  );
}
