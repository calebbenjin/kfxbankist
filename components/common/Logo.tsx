import React from 'react'
import styled from 'styled-components'
import { FaBandcamp } from 'react-icons/fa'

type logoProps = {
  isBage?: any
}

const Logo = ({isBage}: logoProps) => {
  return (
    <>
    {isBage ? <BrandLogo className="text-white"><FaBandcamp className="logo w-10 h-10" /></BrandLogo> : <BrandLogo className="text-white"><FaBandcamp className="logo mr-1" /> <span>KFXBankist</span></BrandLogo>}
      
    </>
  )
}

const BrandLogo = styled.h2`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 1.2rem;
  margin: 0;

  .logo {
    font-size: 2rem;
  }

  @media (max-width: 786px) {
    font-size: 1rem;

    .logo {
      font-size: 1.5rem;
    }
  }
`

export default Logo
