// components/HowToEarnSection.js
import React from 'react';
import styled from 'styled-components';

const HowToEarnContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #fff;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const Step = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 10px;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
`;

const StepIllustration = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
`;

const HowToEarnSection = () => {
  return (
    <HowToEarnContainer>
      <h2>How to Earn DUCK Tokens</h2>
      <StepContainer>
        <Step>
          <StepIllustration />
          <StepTitle>Step 1</StepTitle>
          <StepDescription>Create a Telegram Account</StepDescription>
        </Step>
        <Step>
          <StepIllustration />
          <StepTitle>Step 2</StepTitle>
          <StepDescription>Join DUCK Community</StepDescription>
        </Step>
        <Step>
          <StepIllustration />
          <StepTitle>Step 3</StepTitle>
          <StepDescription>Earn DUCK Tokens</StepDescription>
        </Step>
      </StepContainer>
    </HowToEarnContainer>
  );
};

export default HowToEarnSection;