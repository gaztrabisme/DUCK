// pages/index.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowToEarnSection from '../components/HowToEarnSection';
import LeaderboardAndRewards from '../components/LeaderboardAndRewards';
import CommunitySection from '../components/CommunitySection'; // Import the new component

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HowToEarnSection />
      <LeaderboardAndRewards />
      <CommunitySection /> {/* Add the Community Section component here */}
    </div>
  );
};

export default HomePage;