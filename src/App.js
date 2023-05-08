// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ExerciseScreen from './pages/ExerciseScreen';
import DietScreen from './pages/DietScreen';
import MainScreen from './pages/MainScreen';
import DateScreen from './pages/DateScreen';

import Navation from './componet/Navation';

const AppContainer = styled.div`
  // 전체 앱의 스타일링을 정의합니다.

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  overflow: auto;

`;

const AppContent  = styled.div`
  width: 360px;
  height: 640px;
border: 1px solid;
background-color: #E9F4FA;

`


function App() {
  return (
    <AppContainer>
      
      <AppContent>
      <Navation />
        
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/exercise" element={<ExerciseScreen />} />
          <Route path="/diet" element={<DietScreen />} />
          <Route path="/date" element={<DateScreen />} />
        </Routes>
      </AppContent>
    </AppContainer>
          
  );
}


export default App;
