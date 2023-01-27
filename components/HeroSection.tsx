import React from 'react'
import styled from 'styled-components'
import { LinkButton } from './Button'

const HeroSection = () => {
  return (
    <HeroWrapper>
      <div className="container mx-auto flex items-center justify-between flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="hero-content">
          <h1 className="text-3xl sm:text-5xl font-bold animate__bounceIn text-white capitalize">Pay, Invest, Save your cash with a single Online bank</h1>
          <p className="mt-7 mb-10 text-md sm:text-1xl md:pr-20 text-white">Banking made for digital entrepreneurs. End-to-end payments and financial management in a single solution.</p>
          <div className="hero-btns mt-10 flex">
            <LinkButton href="/register" className="core-btn font-bold shadow-2xl bg-brand text-gray-100 py-3 px-6 md:py-4 md:px-7 mr-4">Open an Account</LinkButton>
            <LinkButton href="/login" className="core-btn font-bold shadow-2xl bg-brand text-gray-100 py-3 px-6 md:py-4 md:px-7 mr-4">Login to Account</LinkButton>
          </div>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  height: 100vh;
  padding-top: 10rem;
  display: flex;
  align-items: center;
  overflow: none;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.689), rgba(0, 0, 0, 0)), url(./hero1.jpeg);
  background-position: center;
  background-size: cover;

  .playstore-icon {
    font-size: 1.5rem;
  }

  .line-height {
    line-height: 4rem;
  }

  @media (max-width: 1024px) {
    height: 100%;
    padding-top: 6rem;
    /* padding-bottom: 2rem; */
    text-align: center;

    .hero-btns {
      width: 90%;
      margin: 0 auto;
    }
  }

  .hero-content {
    width: 50%;
    @media (max-width: 1024px) {
      padding-bottom: 3rem;
      width: 100%;
    }
  }

  .hero-image {
    background: red;
    position: relative;
    width: 50%;
  }
`

export default HeroSection
