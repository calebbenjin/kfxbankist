import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { FaBandcamp } from 'react-icons/fa'
import { LinkButton } from './Button'
import playstoreImg from '../assets/playstore.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <FooterSection>
      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
        <div className="about-content">
          <BrandLogo><FaBandcamp className="logo" /> <span>KFXBankist</span></BrandLogo>
          <p className="text-gray-200 my-6">With so many options to transfer money internationally - through bank accounts, mobile wallets, at thousands of locations and online - PayForiegn lets you find your way..</p>
          <LinkButton href="/" className="mt-4 shadow-2xl"> <Image src={playstoreImg} alt="download on playstore" width={170} height={100} /> </LinkButton>
        </div>
        <div className="nav-link flex align-center justify-center">
          <div className="container">
            <h3 className="font-bold text-xl text-white my-4">Company</h3>
            <Link href="" >About us</Link>
            <Link href="">How it works</Link>
            <Link href="">Blog</Link>
          </div>
        </div>
        <div className="nav-link flex align-center justify-center">
          <div className="container">
            <h3 className="font-bold text-xl text-white my-4">Product</h3>
            <Link href="">Invoicing Platform</Link>
            <Link href="">Accounting Plateform</Link>
            <Link href="">Contracts Loans</Link>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container py-4 mx-auto flex align-center justify-between">
          <p className="text-white text-sm">2022 AR KFX. All rights reserved. -- Privacy Policy - Terms of Services</p>
          <p className="text-white text-sm">Supported by KFX Startup</p>
        </div>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  background: #1B1C31;

  .footer {
    border-top: solid 1px #f2f3f4;
  }

  .playstore-icon {
    font-size: 1.5rem;
    color: #fff;
  }

  .nav-link a {
    display: block;
    margin-bottom: 1rem;
    color: #f2f3f4;
  }
`

const BrandLogo = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 900;
  color: #fff;
  font-size: 1.2rem;

  .logo {
    font-size: 2rem;
  }
`

export default Footer
