import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
    margin-top: 30px;
`;

const Image = styled.img`
  width: 200px;
  height: 160px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-top: 20px;
`;

const DietComponent = () => {
  const dietData = useSelector((state) => state.diet);

  return (
    <div>
      <Title>오늘 먹은 식단</Title>
      {/* DietData를 사용하여 식단 정보를 표시하는 컴포넌트 */}
    </div>
  );
};

const ExerciseComponent = () => {
  const exerciseData = useSelector((state) => state.exercise);

  return (
    <div>
      <Title>운동 목록</Title>
      {/* ExerciseData를 사용하여 운동 목록을 표시하는 컴포넌트 */}
    </div>
  );
};

const MainScreen = () => {
  return (
    <MainContainer>
      <Image src="assets/diet.jpg" alt="diet" />
      <DietComponent />
      <ExerciseComponent />
    </MainContainer>
  );
};

export default MainScreen;
