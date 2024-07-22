// components/LeaderboardAndRewards.js
import React from 'react';
import styled from 'styled-components';
import styles from './LeaderboardAndRewards.module.css';

const LeaderboardContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #f9f9f9;
`;

const LeaderboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

const RewardsInfo = styled.div`
  margin-bottom: 30px;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #0070f3;
  color: white;
`;

const LeaderboardAndRewards = () => {
  const leaderboardData = [
    { rank: 1, name: 'User1', points: 1500 },
    { rank: 2, name: 'User2', points: 1200 },
    { rank: 3, name: 'User3', points: 1000 },
    { rank: 4, name: 'User4', points: 900 },
    { rank: 5, name: 'User5', points: 800 },
  ];

  return (
    <LeaderboardContainer>
      <h2>Leaderboard and Rewards</h2>
      <LeaderboardTable>
        <thead>
          <tr>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Points</TableHeader>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user) => (
            <TableRow key={user.rank}>
              <TableData>{user.rank}</TableData>
              <TableData>{user.name}</TableData>
              <TableData>{user.points}</TableData>
            </TableRow>
          ))}
        </tbody>
      </LeaderboardTable>
      <RewardsInfo>
        <h3>Rewards Information</h3>
        <p>Earn badges and exclusive rewards by boosting your score!</p>
      </RewardsInfo>
      <CTAButton>Boost Your Score</CTAButton>
    </LeaderboardContainer>
  );
};

export default LeaderboardAndRewards;