// components/CommunitySection.js
import React from 'react';
import styled from 'styled-components';

const CommunityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  background-color: #fff;
`;

const CommunityText = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const TestimonialsPlaceholder = styled.div`
  flex: 1;
  height: 200px;
  background-color: #f0f0f0;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #0070f3;
  color: white;
  margin-top: 20px;
`;

const CommunitySection = () => {
  return (
    <CommunityContainer>
      <CommunityText>
        <h2>Join Our Vibrant Community</h2>
        <p>Engage with other Telegram users, share your experiences, and learn how to maximize your DUCK token earnings. Join now to be part of the conversation!</p>
        <CTAButton>Join Now</CTAButton>
      </CommunityText>
      <TestimonialsPlaceholder />
    </CommunityContainer>
  );
};

export default CommunitySection;