import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faBuilding } from "@fortawesome/free-solid-svg-icons";
import fb from "../../public/facebook.webp";
import ln from "../../public/linkdin.webp";
import logo from "../../public/shlogo.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-desc">
        <div className="logo">
          <Link href='/'>
            <Image src={logo}  className="logoimage "alt="Stack Homme" />
          </Link>
        </div>
          <p>
            Embark on a transformative journey with Stack Homme comprehensive
            360° Web & Software Development Services. As a software development
            company, we empower businesses to outshine competition and establish
            industry leadership. Leveraging our seasoned team, we engineer
            software solutions that execute potent digital marketing plans and
            strategies.
          </p>
          <h3>– We stand ready to fuel your growth!</h3>
          <div className="footerlinks">
          <Link href="/services" className="links">
              Services
            </Link>
            <Link href="/careers" className="links">
              Career
            </Link>
            <Link href="/pricing" className="links">
              Pricing
            </Link>
            <Link href="/contact-us" className="links">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="footer-contact">
          <h2>Contact us</h2>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <Link href="mailto:info@stackhomme.com" className="mail">
              info@stackhomme.com
            </Link>
          </p>
          <h2>Location</h2>
          <p>
            <span>
            <FontAwesomeIcon icon={faBuilding} />
            </span>
            <Link href="/" aria-disabled="true" className="mail mail2">
              6 Happ street, Aurban. NSW, Australia
            </Link>
          </p>
          <p>
            <span>
            <FontAwesomeIcon icon={faBuilding} />
            </span>
            <Link href="/" aria-disabled="true" className="mail mail2">
              6 Happ street, Aurban. NSW, Australia
            </Link>
          </p>
        </div>
        
      </div>
      <div className="credit">
        <p>© 2023 All Rights Reserved By Stack Homme</p>
        <div className="sociallinks">
          <div className="socialimage">
            <Link href="https://www.facebook.com/people/Stack-Homme/61551507417212/">
              <Image src={fb} alt="facebook" className="socialimageholder" />
            </Link>
          </div>
       
          <div className="socialimage">
            <Link href="https://www.linkedin.com/company/stackhomme/">
              <Image src={ln} alt="linkdin" className="socialimageholder" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
