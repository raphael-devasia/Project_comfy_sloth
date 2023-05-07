import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk"></img>
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <p>
              Welcome to our online furniture store! We are a dedicated team of
              furniture enthusiasts who are passionate about bringing style and
              comfort to your home. With our extensive range of furniture
              products, we offer something for everyone, whether you're looking
              for a cozy sofa for your living room or a sturdy dining table for
              family gatherings. Our team is committed to providing high-quality
              furniture at affordable prices, and we strive to make the online
              shopping experience as easy and enjoyable as possible. We believe
              that your home should be a reflection of your unique style and
              personality, and we are here to help you achieve that with our
              carefully curated selection of furniture pieces. Thank you for
              choosing us as your go-to destination for all your furniture
              needs!
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
  
  
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
