import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SideBarRouteList from './SideBarRouteList';
import SearchLocation from './SearchLocation';

const BasicSide = styled.div`
  border: 1px solid black;
  margin: 1px 1px;
  padding: 5px; 
`;

const SideBar = () => {
  const { panTo, currentNumber } = useSelector((state) => state.map);

  return (
    <div style={{ border: '1px solid black', width: '500px', height: '680px', margin: '0 5px', padding: '5px' }}>
      {currentNumber && <SearchLocation panTo={panTo} currentNumber={currentNumber} />}
      <BasicSide>
        태그들 있는 자리
      </BasicSide>
      <SideBarRouteList />
    </div>
  );
};

export default SideBar;
