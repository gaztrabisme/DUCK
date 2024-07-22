// components/HeroSection.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  text-align: center;
  padding: 100px 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const PrimaryCTA = styled(CTAButton)`
  background-color: #0070f3;
  color: white;
`;

const SecondaryCTA = styled(CTAButton)`
  background-color: #fff;
  color: #0070f3;
  border: 1px solid #0070f3;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Title>Join DUCK – Earn Rewards for Using Telegram!</Title>
      <Tagline>7 years & still running, join our top Telegram users.</Tagline>
      <div>
        <PrimaryCTA>Join Now</PrimaryCTA>
        <SecondaryCTA>Learn More</SecondaryCTA>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;